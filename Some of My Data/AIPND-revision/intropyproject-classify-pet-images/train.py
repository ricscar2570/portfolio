# train.py
import argparse
import torch
from torch import nn, optim
from torchvision import datasets, transforms, models
import os

def get_input_args():
    parser = argparse.ArgumentParser(description="Train a new network on a dataset")
    parser.add_argument('data_dir', type=str, help='Directory of training data')
    parser.add_argument('--save_dir', type=str, default='.', help='Directory to save checkpoints')
    parser.add_argument('--arch', type=str, default='vgg16', help='Model architecture: vgg16, resnet18, alexnet')
    parser.add_argument('--learning_rate', type=float, default=0.003, help='Learning rate for training')
    parser.add_argument('--hidden_units', type=int, default=512, help='Number of hidden units in classifier')
    parser.add_argument('--epochs', type=int, default=5, help='Number of epochs for training')
    parser.add_argument('--gpu', action='store_true', help='Use GPU for training if available')
    return parser.parse_args()

def load_data(data_dir):
    train_dir = os.path.join(data_dir, 'train')
    valid_dir = os.path.join(data_dir, 'valid')
    
    data_transforms = {
        'train': transforms.Compose([
            transforms.RandomRotation(30),
            transforms.RandomResizedCrop(224),
            transforms.RandomHorizontalFlip(),
            transforms.ToTensor(),
            transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
        ]),
        'valid': transforms.Compose([
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
        ])
    }

    image_datasets = {
        'train': datasets.ImageFolder(train_dir, transform=data_transforms['train']),
        'valid': datasets.ImageFolder(valid_dir, transform=data_transforms['valid'])
    }

    dataloaders = {
        'train': torch.utils.data.DataLoader(image_datasets['train'], batch_size=64, shuffle=True),
        'valid': torch.utils.data.DataLoader(image_datasets['valid'], batch_size=32)
    }
    
    return dataloaders, image_datasets['train'].class_to_idx

def build_model(arch, hidden_units):
    if arch == 'vgg16':
        model = models.vgg16(pretrained=True)
        input_size = model.classifier[0].in_features
    elif arch == 'resnet18':
        model = models.resnet18(pretrained=True)
        input_size = model.fc.in_features
    else:
        model = models.alexnet(pretrained=True)
        input_size = model.classifier[1].in_features

    for param in model.parameters():
        param.requires_grad = False

    classifier = nn.Sequential(
        nn.Linear(input_size, hidden_units),
        nn.ReLU(),
        nn.Dropout(0.2),
        nn.Linear(hidden_units, 102),
        nn.LogSoftmax(dim=1)
    )

    if arch == 'resnet18':
        model.fc = classifier
    else:
        model.classifier = classifier

    return model

def train_model(model, dataloaders, criterion, optimizer, device, epochs):
    model.to(device)
    for epoch in range(epochs):
        running_loss = 0
        model.train()
        for inputs, labels in dataloaders['train']:
            inputs, labels = inputs.to(device), labels.to(device)
            optimizer.zero_grad()
            logps = model(inputs)
            loss = criterion(logps, labels)
            loss.backward()
            optimizer.step()
            running_loss += loss.item()

        print(f"Epoch {epoch+1}/{epochs}, Train loss: {running_loss/len(dataloaders['train']):.3f}")

def main():
    args = get_input_args()
    dataloaders, class_to_idx = load_data(args.data_dir)
    model = build_model(args.arch, args.hidden_units)
    device = torch.device("cuda" if args.gpu and torch.cuda.is_available() else "cpu")
    criterion = nn.NLLLoss()
    optimizer = optim.Adam(model.classifier.parameters(), lr=args.learning_rate)
    train_model(model, dataloaders, criterion, optimizer, device, args.epochs)
    checkpoint = {
        'state_dict': model.state_dict(),
        'class_to_idx': class_to_idx,
        'classifier': model.classifier,
        'epochs': args.epochs,
        'optimizer_state_dict': optimizer.state_dict()
    }
    torch.save(checkpoint, os.path.join(args.save_dir, 'checkpoint.pth'))
    print("Model saved to checkpoint.pth")

if __name__ == "__main__":
    main()
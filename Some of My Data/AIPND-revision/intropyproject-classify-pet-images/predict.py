# predict.py
import argparse
import torch
from torchvision import models
from PIL import Image
import json
import numpy as np

def get_input_args():
    parser = argparse.ArgumentParser(description="Predict flower name from an image along with the probability of that name.")
    parser.add_argument('image_path', type=str, help='Path to the input image')
    parser.add_argument('checkpoint', type=str, help='Path to the model checkpoint')
    parser.add_argument('--top_k', type=int, default=5, help='Return top K most likely classes')
    parser.add_argument('--category_names', type=str, default='cat_to_name.json', help='Path to category to name JSON file')
    parser.add_argument('--gpu', action='store_true', help='Use GPU for inference if available')
    return parser.parse_args()

def load_checkpoint(filepath):
    checkpoint = torch.load(filepath)
    model = models.vgg16(pretrained=True) if checkpoint['classifier'] else models.alexnet(pretrained=True)
    model.classifier = checkpoint['classifier']
    model.load_state_dict(checkpoint['state_dict'])
    model.class_to_idx = checkpoint['class_to_idx']
    return model

def process_image(image_path):
    image = Image.open(image_path)
    image = image.resize((256, 256)).crop((16, 16, 240, 240))
    np_image = np.array(image) / 255
    mean = np.array([0.485, 0.456, 0.406])
    std = np.array([0.229, 0.224, 0.225])
    np_image = (np_image - mean) / std
    return np_image.transpose((2, 0, 1))

def predict(image_path, model, top_k, device):
    model.eval()
    model.to(device)
    image = process_image(image_path)
    image_tensor = torch.from_numpy(image).unsqueeze_(0).float().to(device)
    with torch.no_grad():
        output = model.forward(image_tensor)
    probs, classes = torch.exp(output).topk(top_k)
    return probs[0].tolist(), classes[0].add(1).tolist()

def main():
    args = get_input_args()
    device = torch.device("cuda" if args.gpu and torch.cuda.is_available() else "cpu")
    model = load_checkpoint(args.checkpoint)
    model.to(device)
    probs, classes = predict(args.image_path, model, args.top_k, device)
    with open(args.category_names, 'r') as f:
        cat_to_name = json.load(f)
    labels = [cat_to_name[str(cls)] for cls in classes]
    print("Predicted classes:", labels)
    print("Class probabilities:", probs)

if __name__ == "__main__":
    main()
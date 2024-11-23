
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pickle

# Example product data
data = {
    'product_id': [1, 2, 3, 4],
    'description': [
        'Smartphone with excellent camera and performance',
        'Gaming laptop with high-end GPU and processor',
        'Noise-cancelling over-ear headphones',
        'Lightweight and durable smartwatch',
    ]
}

# Load data into a DataFrame
df = pd.DataFrame(data)

# Step 1: Vectorize the product descriptions
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(df['description'])

# Step 2: Compute the similarity matrix
similarity_matrix = cosine_similarity(tfidf_matrix)

# Step 3: Save the model and vectorizer
with open('similarity_model.pkl', 'wb') as model_file:
    pickle.dump(similarity_matrix, model_file)

with open('vectorizer.pkl', 'wb') as vectorizer_file:
    pickle.dump(vectorizer, vectorizer_file)

print("Model and vectorizer saved successfully!")

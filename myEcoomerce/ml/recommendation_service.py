
import pickle

class RecommendationService:
    def __init__(self):
        # Load the similarity matrix and vectorizer
        with open('ml/similarity_model.pkl', 'rb') as model_file:
            self.similarity_matrix = pickle.load(model_file)

        with open('ml/vectorizer.pkl', 'rb') as vectorizer_file:
            self.vectorizer = pickle.load(vectorizer_file)

    def get_recommendations(self, product_id, top_n=2):
        # Map product ID to index
        product_index = product_id - 1  # Assuming product_id is 1-based
        similar_indices = self.similarity_matrix[product_index].argsort()[-top_n - 1:-1][::-1]
        recommendations = [int(idx + 1) for idx in similar_indices]
        return recommendations

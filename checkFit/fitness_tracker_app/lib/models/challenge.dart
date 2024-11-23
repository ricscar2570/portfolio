// Challenge: Represents a social challenge in the Fitness Tracker app.
// This model is used to store and retrieve challenge data from Firestore.

class Challenge {
  final String id; // Unique challenge ID
  final String name; // Name of the challenge
  final String description; // Description of the challenge
  final int participants; // Number of participants in the challenge

  Challenge({
    required this.id,
    required this.name,
    required this.description,
    this.participants = 0,
  });

  // Convert a Challenge object to a map for Firestore storage
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'description': description,
      'participants': participants,
    };
  }

  // Create a Challenge object from a map
  static Challenge fromMap(Map<String, dynamic> map) {
    return Challenge(
      id: map['id'],
      name: map['name'],
      description: map['description'],
      participants: map['participants'],
    );
  }
}
// User: Represents a user in the Fitness Tracker app.
// This model is used to store and retrieve user data from Firestore.

class User {
  final String id; // Unique user ID
  final String name; // User's name
  final String email; // User's email address

  User({
    required this.id,
    required this.name,
    required this.email,
  });

  // Convert a User object to a map for Firestore storage
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'email': email,
    };
  }

  // Create a User object from a map
  static User fromMap(Map<String, dynamic> map) {
    return User(
      id: map['id'],
      name: map['name'],
      email: map['email'],
    );
  }
}
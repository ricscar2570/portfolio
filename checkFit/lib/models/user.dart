// User model for storing user information.
class User {
  final String id; // Unique user ID
  final String name; // Name of the user
  final String email; // Email address of the user

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

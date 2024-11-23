// Goal: Represents a fitness goal in the Fitness Tracker app.
// This model is used to store and retrieve goal data from Firestore.

class Goal {
  final String id; // Unique goal ID
  final String name; // Name of the goal
  final int targetValue; // Target value to achieve
  final int currentValue; // Current progress
  final String unit; // Unit of measurement (e.g., km, steps)
  final bool completed; // Status of the goal (true if completed)

  Goal({
    required this.id,
    required this.name,
    required this.targetValue,
    this.currentValue = 0,
    required this.unit,
    this.completed = false,
  });

  // Convert a Goal object to a map for Firestore storage
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'targetValue': targetValue,
      'currentValue': currentValue,
      'unit': unit,
      'completed': completed,
    };
  }

  // Create a Goal object from a map
  static Goal fromMap(Map<String, dynamic> map) {
    return Goal(
      id: map['id'],
      name: map['name'],
      targetValue: map['targetValue'],
      currentValue: map['currentValue'],
      unit: map['unit'],
      completed: map['completed'],
    );
  }
}
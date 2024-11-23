// GoalsPage: A screen for managing user fitness goals.
// This screen allows users to add, view, and track progress toward their goals.

import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/goal.dart';

class GoalsPage extends StatefulWidget {
  @override
  _GoalsPageState createState() => _GoalsPageState();
}

class _GoalsPageState extends State<GoalsPage> {
  final CollectionReference _goalsCollection =
      FirebaseFirestore.instance.collection('goals');
  final TextEditingController _goalNameController = TextEditingController();
  final TextEditingController _goalTargetController = TextEditingController();

  // Add a new goal to Firestore
  Future<void> _addGoal(String name, int targetValue) async {
    final newGoal = Goal(
      id: _goalsCollection.doc().id,
      name: name,
      targetValue: targetValue,
      unit: 'km',
    );
    try {
      await _goalsCollection.doc(newGoal.id).set(newGoal.toMap());
      _goalNameController.clear();
      _goalTargetController.clear();
    } catch (e) {
      print("Error adding goal: $e");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('My Goals')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _goalNameController,
                    decoration: InputDecoration(labelText: 'Goal Name'),
                  ),
                ),
                SizedBox(width: 8),
                Expanded(
                  child: TextField(
                    controller: _goalTargetController,
                    decoration: InputDecoration(labelText: 'Target Value'),
                    keyboardType: TextInputType.number,
                  ),
                ),
                IconButton(
                  icon: Icon(Icons.add),
                  onPressed: () {
                    final name = _goalNameController.text.trim();
                    final targetValue =
                        int.tryParse(_goalTargetController.text.trim()) ?? 0;
                    if (name.isNotEmpty && targetValue > 0) {
                      _addGoal(name, targetValue);
                    }
                  },
                ),
              ],
            ),
          ),
          Expanded(
            child: StreamBuilder<QuerySnapshot>(
              stream: _goalsCollection.snapshots(),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return Center(child: CircularProgressIndicator());
                }

                if (!snapshot.hasData || snapshot.data!.docs.isEmpty) {
                  return Center(child: Text('No goals added yet.'));
                }

                final goals = snapshot.data!.docs;

                return ListView.builder(
                  itemCount: goals.length,
                  itemBuilder: (context, index) {
                    final goalData = goals[index].data() as Map<String, dynamic>;
                    final goal = Goal.fromMap(goalData);

                    return ListTile(
                      title: Text(goal.name),
                      subtitle: Text(
                          '${goal.currentValue}/${goal.targetValue} ${goal.unit}'),
                      trailing: goal.completed
                          ? Icon(Icons.check_circle, color: Colors.green)
                          : null,
                    );
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
// ChallengesPage: A screen for managing and participating in social challenges.
// This screen lists all available challenges and allows users to join them.

import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class ChallengesPage extends StatelessWidget {
  final CollectionReference _challengesCollection =
      FirebaseFirestore.instance.collection('challenges');

  // Join a challenge and update participant count
  Future<void> _joinChallenge(String challengeId) async {
    try {
      await _challengesCollection.doc(challengeId).update({
        'participants': FieldValue.increment(1),
      });
    } catch (e) {
      print("Error joining challenge: $e");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Challenges')),
      body: StreamBuilder<QuerySnapshot>(
        stream: _challengesCollection.snapshots(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          }

          if (!snapshot.hasData || snapshot.data!.docs.isEmpty) {
            return Center(child: Text('No challenges available.'));
          }

          final challenges = snapshot.data!.docs;

          return ListView.builder(
            itemCount: challenges.length,
            itemBuilder: (context, index) {
              final challenge = challenges[index];
              final challengeData = challenge.data() as Map<String, dynamic>;

              return ListTile(
                title: Text(challengeData['name'] ?? 'Unnamed Challenge'),
                subtitle: Text(challengeData['description'] ?? 'No description'),
                trailing: ElevatedButton(
                  onPressed: () => _joinChallenge(challenge.id),
                  child: Text('Join (${challengeData['participants'] ?? 0})'),
                ),
              );
            },
          );
        },
      ),
    );
  }
}
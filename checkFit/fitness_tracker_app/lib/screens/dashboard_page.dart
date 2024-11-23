// DashboardPage: The main dashboard of the app.
// This screen provides an overview of the user's progress and navigates to other features.

import 'package:flutter/material.dart';

class DashboardPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Dashboard')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Welcome to Fitness Tracker!',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              textAlign: TextAlign.center,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () => Navigator.pushNamed(context, '/goals'),
              child: Text('View Goals'),
            ),
            ElevatedButton(
              onPressed: () => Navigator.pushNamed(context, '/challenges'),
              child: Text('Social Challenges'),
            ),
            ElevatedButton(
              onPressed: () => Navigator.pushNamed(context, '/workout'),
              child: Text('Track Workout'),
            ),
          ],
        ),
      ),
    );
  }
}
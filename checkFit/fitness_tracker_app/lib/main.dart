// Main entry point for the Fitness Tracker App
// This file sets up the app, initializes Firebase, and defines the app's routing.

import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'screens/login_page.dart';
import 'screens/dashboard_page.dart';
import 'screens/goals_page.dart';
import 'screens/challenges_page.dart';
import 'screens/workout_page.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(); // Initialize Firebase
  runApp(FitnessTrackerApp());
}

class FitnessTrackerApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fitness Tracker',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => LoginPage(), // Login page
        '/dashboard': (context) => DashboardPage(), // Dashboard page
        '/goals': (context) => GoalsPage(), // Goals management page
        '/challenges': (context) => ChallengesPage(), // Social challenges page
        '/workout': (context) => WorkoutPage(), // GPS workout tracking
      },
    );
  }
}
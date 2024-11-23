// ProgressBar: A visual indicator of progress for goals or challenges.
import 'package:flutter/material.dart';

class ProgressBar extends StatelessWidget {
  final double progress; // Progress as a value between 0.0 and 1.0

  ProgressBar({required this.progress});

  @override
  Widget build(BuildContext context) {
    return LinearProgressIndicator(
      value: progress,
      backgroundColor: Colors.grey[300],
      valueColor: AlwaysStoppedAnimation<Color>(Colors.blue),
    );
  }
}

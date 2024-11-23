// ProgressBar: A visual indicator of progress for goals or challenges.
// This widget displays a linear progress bar with customizable colors and progress value.

import 'package:flutter/material.dart';

class ProgressBar extends StatelessWidget {
  final double progress; // Progress as a value between 0.0 and 1.0
  final Color backgroundColor; // Background color of the progress bar
  final Color progressColor; // Color of the progress bar itself

  const ProgressBar({
    Key? key,
    required this.progress,
    this.backgroundColor = Colors.grey,
    this.progressColor = Colors.blue,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 10.0,
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(5.0),
      ),
      child: FractionallySizedBox(
        alignment: Alignment.centerLeft,
        widthFactor: progress.clamp(0.0, 1.0), // Ensure progress stays between 0 and 1
        child: Container(
          decoration: BoxDecoration(
            color: progressColor,
            borderRadius: BorderRadius.circular(5.0),
          ),
        ),
      ),
    );
  }
}
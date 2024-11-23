// CustomButton: A reusable button widget with customizable styles.
// This widget simplifies the creation of styled buttons with consistent design.

import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  final String label; // Text displayed on the button
  final VoidCallback onPressed; // Function to execute when the button is pressed
  final Color color; // Background color of the button
  final Color textColor; // Color of the text on the button
  final double borderRadius; // Rounded corners for the button

  const CustomButton({
    Key? key,
    required this.label,
    required this.onPressed,
    this.color = Colors.blue,
    this.textColor = Colors.white,
    this.borderRadius = 8.0,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      style: ElevatedButton.styleFrom(
        primary: color, // Background color
        onPrimary: textColor, // Text color
        padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(borderRadius),
        ),
      ),
      child: Text(
        label,
        style: TextStyle(fontSize: 16.0),
      ),
    );
  }
}
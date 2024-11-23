// Test suite for FirebaseService
// This file contains unit tests for the FirebaseService class, which manages Firebase authentication and Firestore operations.

import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/mockito.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../lib/services/firebase_service.dart';

// Mock classes for FirebaseAuth and FirebaseFirestore
class MockFirebaseAuth extends Mock implements FirebaseAuth {}
class MockFirebaseFirestore extends Mock implements FirebaseFirestore {}
class MockUserCredential extends Mock implements UserCredential {}
class MockUser extends Mock implements User {}

void main() {
  group('FirebaseService Tests', () {
    late FirebaseService firebaseService;
    late MockFirebaseAuth mockAuth;
    late MockFirebaseFirestore mockFirestore;
    late MockUserCredential mockUserCredential;
    late MockUser mockUser;

    setUp(() {
      mockAuth = MockFirebaseAuth();
      mockFirestore = MockFirebaseFirestore();
      mockUserCredential = MockUserCredential();
      mockUser = MockUser();
      firebaseService = FirebaseService(mockAuth, mockFirestore);
    });

    test('signIn should return a User when login is successful', () async {
      // Arrange
      when(mockAuth.signInWithEmailAndPassword(
        email: anyNamed('email'),
        password: anyNamed('password'),
      )).thenAnswer((_) async => mockUserCredential);
      when(mockUserCredential.user).thenReturn(mockUser);

      // Act
      final result = await firebaseService.signIn('test@example.com', 'password');

      // Assert
      expect(result, equals(mockUser));
    });

    test('signIn should throw an exception when login fails', () async {
      // Arrange
      when(mockAuth.signInWithEmailAndPassword(
        email: anyNamed('email'),
        password: anyNamed('password'),
      )).thenThrow(FirebaseAuthException(code: 'user-not-found'));

      // Act & Assert
      expect(
        () async => await firebaseService.signIn('test@example.com', 'password'),
        throwsA(isA<FirebaseAuthException>()),
      );
    });

    test('getUserData should return user data when document exists', () async {
      // Arrange
      final mockDocumentSnapshot = Mock<DocumentSnapshot>();
      when(mockFirestore.collection(any).doc(any).get())
          .thenAnswer((_) async => mockDocumentSnapshot);
      when(mockDocumentSnapshot.data()).thenReturn({'name': 'Test User'});

      // Act
      final result = await firebaseService.getUserData('testUserId');

      // Assert
      expect(result, containsPair('name', 'Test User'));
    });

    test('getUserData should return null when document does not exist', () async {
      // Arrange
      final mockDocumentSnapshot = Mock<DocumentSnapshot>();
      when(mockFirestore.collection(any).doc(any).get())
          .thenAnswer((_) async => mockDocumentSnapshot);
      when(mockDocumentSnapshot.data()).thenReturn(null);

      // Act
      final result = await firebaseService.getUserData('nonExistentUserId');

      // Assert
      expect(result, isNull);
    });
  });
}
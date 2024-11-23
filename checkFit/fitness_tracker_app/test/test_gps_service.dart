// Test suite for GPSService
// This file contains unit tests for the GPSService class, which manages GPS permissions and location tracking.

import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/mockito.dart';
import 'package:location/location.dart';
import '../lib/services/gps_service.dart';

// Mock class for Location to simulate GPSService behavior
class MockLocation extends Mock implements Location {}

void main() {
  group('GPSService Tests', () {
    late GPSService gpsService;
    late MockLocation mockLocation;

    setUp(() {
      mockLocation = MockLocation();
      gpsService = GPSService(mockLocation);
    });

    test('checkPermissions should return true if permission is granted', () async {
      // Arrange
      when(mockLocation.hasPermission())
          .thenAnswer((_) async => PermissionStatus.granted);

      // Act
      final result = await gpsService.checkPermissions();

      // Assert
      expect(result, isTrue);
    });

    test('checkPermissions should return false if permission is denied', () async {
      // Arrange
      when(mockLocation.hasPermission())
          .thenAnswer((_) async => PermissionStatus.denied);

      // Act
      final result = await gpsService.checkPermissions();

      // Assert
      expect(result, isFalse);
    });

    test('getCurrentLocation should return valid location data', () async {
      // Arrange
      final mockLocationData = LocationData.fromMap({
        'latitude': 37.7749,
        'longitude': -122.4194,
      });
      when(mockLocation.getLocation()).thenAnswer((_) async => mockLocationData);

      // Act
      final location = await gpsService.getCurrentLocation();

      // Assert
      expect(location?.latitude, 37.7749);
      expect(location?.longitude, -122.4194);
    });

    test('getCurrentLocation should return null if permission is denied', () async {
      // Arrange
      when(mockLocation.hasPermission())
          .thenAnswer((_) async => PermissionStatus.denied);

      // Act
      final location = await gpsService.getCurrentLocation();

      // Assert
      expect(location, isNull);
    });
  });
}

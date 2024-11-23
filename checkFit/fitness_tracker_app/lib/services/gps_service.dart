// GPSService: Manages GPS permissions and location updates.
// This service simplifies access to location data and handles permission requests.

import 'package:location/location.dart';

class GPSService {
  final Location _location = Location();

  // Constructor for injecting custom Location instance (useful for testing)
  GPSService([Location? location]) : _location = location ?? Location();

  // Check and request location permissions
  Future<bool> checkPermissions() async {
    PermissionStatus permission = await _location.hasPermission();
    if (permission == PermissionStatus.denied) {
      permission = await _location.requestPermission();
    }
    return permission == PermissionStatus.granted;
  }

  // Get the current location of the user
  Future<LocationData?> getCurrentLocation() async {
    try {
      if (await checkPermissions()) {
        return await _location.getLocation();
      }
    } catch (e) {
      print("Error fetching location: $e");
    }
    return null;
  }

  // Enable or disable location services (request user interaction if necessary)
  Future<bool> enableLocationServices() async {
    bool serviceEnabled = await _location.serviceEnabled();
    if (!serviceEnabled) {
      serviceEnabled = await _location.requestService();
    }
    return serviceEnabled;
  }
}
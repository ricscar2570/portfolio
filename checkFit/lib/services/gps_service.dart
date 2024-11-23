// GPSService: Manages GPS tracking and location updates.
import 'package:location/location.dart';

class GPSService {
  final Location _location = Location();

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
}

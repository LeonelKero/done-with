import * as Location from "expo-location";
import { useEffect, useState } from "react";

interface Coordinate {
  latitude: number;
  longitude: number;
}

const useLocation = () => {
  const [location, setLocation] = useState<Coordinate>();

  try {
    const requestLocationPermission = async () => {
      const locationPermissionResponse =
        await Location.requestForegroundPermissionsAsync();
      if (!locationPermissionResponse.granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    };
    useEffect(() => {
      requestLocationPermission();
    }, []);
  } catch (error) {
    console.log("GETTING LOCATION ERROR OCCURRED", error);
  }

  return { location };
};

export default useLocation;

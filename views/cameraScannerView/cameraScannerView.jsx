import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { coordinates } from "../../utils/data/coordinates";

const CameraScannerView = () => {
  const [currentLocation, setCurrentLocation] = useState(coordinates[0]);
  const [prevLocation, setPrevLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [indexOfCoor,setIndexOfCoor] = useState(0)
  const mapRef = useRef(currentLocation)

  const handleMarkerChange = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    const region = {
      latitude,
      longitude,
      latitudeDelta: initialRegion.latitudeDelta,
      longitudeDelta: initialRegion.longitudeDelta,
    };
    mapRef.current.animateToRegion(region, 500);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentLocation && currentLocation.lon && currentLocation.lat) {
        setPrevLocation(currentLocation);
        const newLocation = coordinates[indexOfCoor];
        setCurrentLocation(newLocation);
        if (indexOfCoor === coordinates.length - 1) {
          setIndexOfCoor(0)
        } else {
          setIndexOfCoor(indexOfCoor + 1)
        }
        if(mapRef.current) {
          mapRef.current.animateToRegion({
            latitude: newLocation.lat,
            longitude: newLocation.lon,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }, 1000);
        }
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentLocation,prevLocation,indexOfCoor]);

  useEffect(() => {
    if (currentLocation && currentLocation.lon && currentLocation.lat) {
      setInitialRegion({
        latitude: currentLocation.lat,
        longitude: currentLocation.lon,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  }, [currentLocation]);
  return (
    <View style={styles.container}>
      {initialRegion && (
        <MapView style={styles.map} initialRegion={initialRegion} ref={mapRef}>
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.lat,
                longitude: currentLocation.lon,
              }}
              title="Your Location"
            />
          )}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default CameraScannerView;

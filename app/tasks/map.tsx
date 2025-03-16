import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import MapView, { Marker, LongPressEvent } from 'react-native-maps';
import { useRouter } from 'expo-router';
import { Marker as MarkerType } from '../../types';

export default function HomeScreen() {
  const router = useRouter();
  const [markers, setMarkers] = useState<MarkerType[]>([]);

  const handleLongPress = (event: LongPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    const newMarker: MarkerType = {
      id: String(markers.length + 1),
      latitude,
      longitude,
      title: `Маркер ${markers.length + 1}`,
      description: 'Описание маркера',
    };
    setMarkers([...markers, newMarker]);
    Alert.alert('Маркер добавлен', `ID: ${newMarker.id}`);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 55.7558,
          longitude: 37.6176,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onLongPress={handleLongPress}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
            onPress={() => router.push(`../marker/${marker.id}`)}
          />
        ))}
      </MapView>
    </View>
  );
}
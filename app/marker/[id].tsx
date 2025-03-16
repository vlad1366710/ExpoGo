import React, { useState } from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Marker } from '../../types';

export default function MarkerDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [marker, setMarker] = useState<Marker>({
    id: id || '1',
    latitude: 55.7558,
    longitude: 37.6176,
    title: `Маркер ${id}`,
    description: 'Описание маркера',
    images: [],
  });

  // Функция для выбора изображения из галереи
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const newImage = result.assets[0].uri;
      setMarker((prev) => ({
        ...prev,
        images: [...(prev.images || []), newImage],
      }));
    }
  };

  // Функция для удаления изображения
  const deleteImage = (index: number) => {
    const newImages = marker.images?.filter((_, i) => i !== index);
    setMarker((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  // Функция для подтверждения удаления изображения
  const confirmDeleteImage = (index: number) => {
    Alert.alert(
      'Удалить изображение',
      'Вы уверены, что хотите удалить это изображение?',
      [
        { text: 'Отмена', style: 'cancel' },
        { text: 'Удалить', onPress: () => deleteImage(index) },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{marker.title}</Text>
      <Text style={styles.description}>{marker.description}</Text>
      <Text style={styles.coordinates}>
        Координаты: {marker.latitude.toFixed(4)}, {marker.longitude.toFixed(4)}
      </Text>

      {/* Кнопка для добавления изображения */}
      <Button title="Добавить изображение" onPress={pickImage} />

      {/* Список изображений */}
      <View style={styles.imageContainer}>
        {marker.images?.map((uri, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri }} style={styles.image} />
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => confirmDeleteImage(index)}
            >
              <Text style={styles.deleteButtonText}>Удалить</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Кнопка для возврата на экран карты */}
      <Button title="Назад к карте" onPress={() => router.back()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  coordinates: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  imageContainer: {
    marginTop: 20,
  },
  imageWrapper: {
    marginBottom: 20,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
});
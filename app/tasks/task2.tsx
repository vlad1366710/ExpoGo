import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Task2Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Задание 2</Text>
      <Text>Это второе задание. Здесь может быть любой контент.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
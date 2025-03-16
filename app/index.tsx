import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import TaskButton from '../components/TaskButton';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите задание:</Text>
      <TaskButton
        title="Задание 1: Карта"
        onPress={() => router.push('/tasks/map')}
      />
      <TaskButton
        title="Задание 2: Другое задание"
        onPress={() => router.push('/tasks/task2')}
      />
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
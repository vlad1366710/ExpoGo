import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Главная' }} />
      <Stack.Screen name="tasks/map" options={{ title: 'Карта' }} />
      <Stack.Screen name="tasks/task2" options={{ title: 'Задание 2' }} />
      <Stack.Screen name="marker/[id]" options={{ title: 'Детали маркера' }} />
    </Stack>
  );
}
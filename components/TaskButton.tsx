import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TaskButtonProps {
  title: string;
  onPress: () => void;
}

export default function TaskButton({ title, onPress }: TaskButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
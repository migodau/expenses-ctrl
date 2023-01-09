import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function IconButton({ name, size, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.container}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
}
export const styles = StyleSheet.create({
  container: {
    padding: 6,
    borderRadius: 24,
    margin: 8,
  },
  pressed: {
    opacity: 0.6,
  }
});
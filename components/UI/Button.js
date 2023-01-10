import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { THEME } from '../../theme';

export function Button({ children, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: THEME.COLORS.accent200,
    borderRadius: 8,
    padding: 16, 
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontFamily: THEME.FONTS.bold,
    fontSize: 16,
  },
  pressed: {
    opacity: 0.8,
    backgroundColor: THEME.COLORS.accent100,
  }
});
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { THEME } from '../../theme';
import { AppText } from './AppText';

export function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Something went wrong!</AppText>
      <AppText style={styles.text}>{message}</AppText>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.primary800,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  text: {
    fontSize: 16,
    color: THEME.COLORS.primary100,
  }
});
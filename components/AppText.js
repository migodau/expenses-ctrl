import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../theme';

export function AppText({ children, style }) {
  return (
    <Text style={[styles.text, style ]}>
      {children}
    </Text>
  );
}
export const styles = StyleSheet.create({
  text: {
    fontFamily: THEME.FONTS.regular,
  }
});
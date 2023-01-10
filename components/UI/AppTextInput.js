import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { THEME } from '../../theme';
import { AppText } from './AppText';

export function Input({label, style, ...textInputProps}) {
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.label}>{label}</AppText>
      <TextInput style={[styles.input, textInputProps?.multiline && styles.inputMultiline ]} {...textInputProps} />
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    margin: 4,
  },
  label: {
    fontSize: 12,
    color: THEME.COLORS.primary200,
  },
  input: {
    backgroundColor: THEME.COLORS.primary100,
    borderRadius: 8,
    padding: 6,
    marginVertical: 4,
    fontSize: 18,
    color: THEME.COLORS.primary600,
    fontFamily: THEME.FONTS.regular,
  },
  inputMultiline: {
    textAlignVertical: 'top',
    minHeight: 60,
  }
});
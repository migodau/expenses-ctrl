import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { THEME } from '../../theme';
import { AppText } from './AppText';

export function Input({label, error, style, ...textInputProps}) {
  return (
    <View style={[styles.container, style]}>
      <AppText style={[styles.label, error && styles.labelError]}>{label}</AppText>
      <TextInput style={[styles.input, error && styles.inputError, textInputProps?.multiline && styles.inputMultiline ]} {...textInputProps} />
      <AppText style={[styles.errorInfo]}>{error}</AppText>
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
  labelError: {
    color: THEME.COLORS.danger500,
  },
  inputError: {
    backgroundColor: THEME.COLORS.danger100,
  },
  errorInfo: {
    fontSize: 9,
    padding: 0,
    margin: 0,
    color: THEME.COLORS.danger500,
  },
  inputMultiline: {
    textAlignVertical: 'top',
    minHeight: 60,
  }
});
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { THEME } from '../../theme';

export function AppTextInput({value, onChange}) {
  return (
    <View style={styles.input}>
      <TextInput style={styles.textInput} value={value} onChange={onChange} />
    </View>
  );
}
export const styles = StyleSheet.create({
  input: {
    backgroundColor: THEME.COLORS.primary100,
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
  },
  textInput: {
    color: THEME.COLORS.primary500,
    fontFamily: THEME.FONTS.regular,
  }
});
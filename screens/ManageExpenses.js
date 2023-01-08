import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AppText } from '../components/AppText';

export function ManageExpenses() {
  return (
    <View>
      <AppText>Manage Expenses</AppText>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
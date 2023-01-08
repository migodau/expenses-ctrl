import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';

export function AllExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput/>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
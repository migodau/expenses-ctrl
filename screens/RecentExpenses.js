import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';

export function RecentExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput period={7}/>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
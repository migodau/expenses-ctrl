import React from 'react';
import { StyleSheet, View } from 'react-native';
import { EXPENSES } from '../../data/dummy-data';
import { THEME } from '../../theme';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

export function ExpensesOutput({ expenses, period }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary period={period} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.primary800,
  }
});
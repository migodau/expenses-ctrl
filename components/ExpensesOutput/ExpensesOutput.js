import React from 'react';
import { StyleSheet, View } from 'react-native';
import { EXPENSES } from '../../data/dummy-data';
import { THEME } from '../../theme';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

export function ExpensesOutput({ period }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary period={period} expenses={EXPENSES} />
      <ExpensesList expenses={EXPENSES} />
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.primary500,
  }
});
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { EXPENSES } from '../../data/dummy-data';
import { THEME } from '../../theme';
import { AppText } from '../UI/AppText';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

export function ExpensesOutput({ expenses, period }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary period={period} expenses={expenses} />
      { !!expenses.length && <ExpensesList expenses={expenses} />}
      { !expenses.length && (
        <View style={styles.fallback}>
          <AppText style={styles.fallbackText}>No expenses to show</AppText>
        </View>
      )}
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.primary800,
  },
  fallback: {
    flex: 1,
    justifyContent: 'center',
  },
  fallbackText: {
    color: THEME.COLORS.primary200,
    textAlign: 'center',
  }
});
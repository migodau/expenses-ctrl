import React from 'react';
import { StyleSheet, View } from 'react-native';
import { THEME } from '../../theme';
import { AppText } from '../AppText';

export function ExpensesSummary({ expenses, period }) {
  const sum = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <View style={styles.container}>
      <AppText style={styles.period} >{period ? 'Last '+ period + ' days' : 'Total'}</AppText>
      <AppText style={styles.sum}>${sum.toFixed(2)}</AppText>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: THEME.COLORS.primary50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  period: {
    color: THEME.COLORS.primary100,
    fontSize: 16,
  },
  sum: {
    color: THEME.COLORS.primary100,
    fontFamily: THEME.FONTS.bold,
    fontSize: 16,
  }
});
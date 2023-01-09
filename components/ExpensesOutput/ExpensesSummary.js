import React from 'react';
import { StyleSheet, View } from 'react-native';
import { THEME } from '../../theme';
import { AppText } from '../UI/AppText';

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
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: THEME.COLORS.primary100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  period: {
    color: THEME.COLORS.primary500,
    fontSize: 16,
  },
  sum: {
    color: THEME.COLORS.primary500,
    fontFamily: THEME.FONTS.bold,
    fontSize: 16,
  }
});
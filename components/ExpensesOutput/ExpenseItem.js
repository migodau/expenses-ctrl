import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { THEME } from '../../theme';
import { formatDate } from '../../util/date';
import { AppText } from '../AppText';

export function ExpenseItem({expense}) {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.detail}>
          <AppText style={styles.detailText}>{expense.description}</AppText>
          <AppText style={styles.detailText}>{formatDate(expense.date)}</AppText>
        </View>
        <View style={styles.amount}>
          <AppText style={styles.amountText}>${expense.amount}</AppText>
        </View>
      </View>
    </Pressable>
  );
}
export const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: THEME.COLORS.primary400,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    color: THEME.COLORS.primary50,
  },
  amount: {
    backgroundColor: THEME.COLORS.primary50,
    borderRadius: 12,
    padding: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  amountText: {
    color: THEME.COLORS.primary500,
    fontFamily: THEME.FONTS.bold,
  }
});
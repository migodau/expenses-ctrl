import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { THEME } from '../../theme';
import { AppText } from '../AppText';
import { ExpenseItem } from './ExpenseItem';

const RenderExpenseItem = ({ item }) => {
  return (
    <ExpenseItem expense={item } />
  )
}

export function ExpensesList({expenses}) {
  return (
    <View style={styles.container}>
      <FlatList data={expenses} keyExtractor={(_, index) => index} renderItem={RenderExpenseItem} />
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  expenseItem: {
    padding: 16,
    margin: 16,
    backgroundColor: THEME.COLORS.primary100,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expenseItemAmount: {
    backgroundColor: THEME.COLORS.primary500,
    borderRadius: 12,
  },
  expenseItemAmountText: {

  }
});
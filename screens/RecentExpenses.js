import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

export function RecentExpenses() {
  const { expenses } = useContext(ExpensesContext);
  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={expenses} period={7}/>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
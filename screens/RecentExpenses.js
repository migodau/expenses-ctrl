import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

export function RecentExpenses() {
  const { expenses } = useContext(ExpensesContext);
  const limitDate = getDateMinusDays(new Date(), 7);

  const recentExpenses = expenses.filter(item => item.date >= limitDate);

  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={recentExpenses} period={7}/>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
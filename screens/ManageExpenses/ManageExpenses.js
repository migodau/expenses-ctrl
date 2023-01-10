import React, { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../../components/UI/Button';
import { IconButton } from '../../components/UI/IconButton';
import { Input } from '../../components/UI/AppTextInput';
import { ExpensesContext } from '../../store/expenses-context';
import { THEME } from '../../theme';
import { ExpenseForm } from './ExpenseForm';

export function ManageExpenses({ route, navigation }) {
  const {expenses, addExpense, removeExpense, updateExpense} = useContext(ExpensesContext);
  const expenseId = route.params?.id;
  const isEditing = !!expenseId;

  const expense = isEditing ? expenses.find(item => item.id === expenseId) : null
  
  const [description, setDescription] = useState(expense?.description || '');
  const amount = 10.25;
  const date = new Date();

  const handleConfirmPress = () => {
    if (isEditing) {
      updateExpense(expenseId, { description, amount, date });
    } else {
      addExpense({ description, amount, date });
    }
    navigation.goBack();
  }

  const handleDeleteExpense = () => {
    removeExpense(expenseId);
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttonContainer}>
        <Button onPress={handleConfirmPress}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton name="trash" size={24} color={THEME.COLORS.primaryA200} onPress={handleDeleteExpense} />
        </View>
      )}
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: THEME.COLORS.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.primary100,
    alignItems: 'center',
  },
  buttonContainer: {
    paddingVertical: 24,
  }
});
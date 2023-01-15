import React, { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
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

  const handleConfirm = (expenseData) => {
    if (isEditing) {
      updateExpense(expenseId, expenseData);
    } else {
      addExpense(expenseData);
    }
    navigation.goBack();
  }

  const handleCancel = () => {
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
      <ExpenseForm 
        submitButtonLabel={isEditing ? 'Update' : 'Add'} 
        defaultValues={expense}
        onSubmit={handleConfirm} 
        onCancel={handleCancel} 
      />
      
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
});
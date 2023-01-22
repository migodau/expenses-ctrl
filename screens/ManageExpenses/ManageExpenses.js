import React, { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ErrorOverlay } from '../../components/UI/ErrorOverlay';
import { IconButton } from '../../components/UI/IconButton';
import { Loading } from '../../components/UI/Loading';
import { ExpensesContext } from '../../store/expenses-context';
import { THEME } from '../../theme';
import { storeExpense, modifyExpense, deleteExpense } from '../../util/http';
import { ExpenseForm } from './ExpenseForm';

export function ManageExpenses({ route, navigation }) {
  const {expenses, addExpense, removeExpense, updateExpense} = useContext(ExpensesContext);
  const expenseId = route.params?.id;
  const isEditing = !!expenseId;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const expense = isEditing ? expenses.find(item => item.id === expenseId) : null

  const handleConfirm = async (expenseData) => {
    setLoading(true);
    try {
      if (isEditing) {
        await modifyExpense(expenseId, expenseData);
        updateExpense(expenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        addExpense({ ...expenseData, id });
      }
      navigation.goBack();
    } catch {
      setLoading(false);
      setError('Could not save data');
    }
  }

  const handleCancel = () => {
    navigation.goBack();
  }

  const handleDeleteExpense = async () => {
    setLoading(true);
    try {
      removeExpense(expenseId);
      await deleteExpense(expenseId);
      navigation.goBack();
    } catch {
      setLoading(false);
      setError('Could not delete the expense.');
    }
    
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing]);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorOverlay message={error} />
  }

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
          <IconButton name="trash" size={24} color={THEME.COLORS.danger500} onPress={handleDeleteExpense} />
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
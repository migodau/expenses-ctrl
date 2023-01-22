import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';
import { ErrorOverlay } from '../components/UI/ErrorOverlay';
import { Loading } from '../components/UI/Loading';
import { ExpensesContext } from '../store/expenses-context';
import { fetchExpenses } from '../util/http';

export function AllExpenses() {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getExpenses = async () => {
      try{
        const resp = await fetchExpenses();
        setExpenses(resp);
      } catch {
        setError('Could not fetch the expenses');
      }
      setLoading(false);
      
    };

    getExpenses();
  }, []);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorOverlay message={error} />
  }
  
  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={expenses}/>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
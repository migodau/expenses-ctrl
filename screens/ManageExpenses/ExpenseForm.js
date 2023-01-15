import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { AppText } from '../../components/UI/AppText';
import { Input } from '../../components/UI/AppTextInput';
import { THEME } from '../../theme';
import { Button } from '../../components/UI/Button';
import { formatDate } from '../../util/date';

export function ExpenseForm({ submitButtonLabel, defaultValues, onCancel, onSubmit }) {
  const [formError, setFormError] = useState('');

  const [formInputs, setFormInputs] = useState({
    amount: { 
      value: defaultValues?.amount.toString() || '',
      error: '',
    },
    date: {
      value: defaultValues?.date ? formatDate(defaultValues.date) : '',
      error: '',
    },
    description: {
      value: defaultValues?.description || '',
      error: '',
    },
  });

  const handleInputChange = (key, value) => {
    setFormInputs(current => ({ 
      ...current, 
      [key]: { value, error: '' } 
    }));
  };

  const handleSubmit = () => {
    expenseData = {
      amount: +formInputs.amount.value,
      date: new Date(formInputs.date.value),
      description: formInputs.description.value
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = formInputs.date.value.length === 10 && expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = !!expenseData.description.trim();

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setFormInputs(current => {
        return {
          amount: { ...current.amount, error: amountIsValid ? '' : 'amount invalid' },
          date: { ...current.date, error: dateIsValid ? '' : 'date invalid' },
          description: { ...current.description, error: descriptionIsValid ? '' : 'description invalid' },
        }
      });
      return;
    }

    onSubmit(expenseData);
  };
  
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Your Expense</AppText>
      <View style={styles.inputsRow}>
        <Input style={styles.inputRow}
          label="amount" 
          error={formInputs.amount.error}
          value={formInputs.amount.value}
          keyboardType='decimal-pad'
          onChangeText={handleInputChange.bind(this,'amount')} 
        />
        <Input style={styles.inputRow}
          label="date"
          error={formInputs.date.error}
          value={formInputs.date.value}
          placeholder="YYYY-MM-DD"
          maxLength={10}
          onChangeText={handleInputChange.bind(this,'date')} 
        />
      </View>
      <Input 
        label="description" 
        error={formInputs.description.error}
        multiline={true}
        value={formInputs.description.value} 
        onChangeText={handleInputChange.bind(this,'description')} 
      />
      <View style={styles.buttonContainer}>
        <Button type="primary" onPress={handleSubmit}>{submitButtonLabel}</Button>
        <Button onPress={onCancel}>Cancel</Button>
      </View>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: THEME.FONTS.bold,
    marginBottom: 16,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputRow: {
    flex: 1,
  },
  buttonContainer: {
    paddingVertical: 24,
  }
});
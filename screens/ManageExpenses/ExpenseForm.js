import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from '../../components/UI/AppText';
import { Input } from '../../components/UI/AppTextInput';
import { THEME } from '../../theme';

export function ExpenseForm() {
  const [formValues, setFormValues] = useState({
    amount: '',
    date: '',
    description: ''
  });


  const handleInputChange = (key, value) => setFormValues(current => ({ ...current, [key]: value }));

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Your Expense</AppText>
      <View style={styles.inputsRow}>
        <Input style={styles.inputRow}
          label="amount" 
          value={formValues.amount}
          keyboardType='decimal-pad'
          onChangeText={handleInputChange.bind(this,'amount')} 
        />
        <Input style={styles.inputRow}
          label="date"
          value={formValues.date}
          placeholder="YYYY-MM-DD"
          maxLength={10}
          onChangeText={handleInputChange.bind(this,'date')} 
        />
      </View>
      <Input 
        label="description" 
        multiline={true}
        value={formValues.description} 
        onChangeText={handleInputChange.bind(this,'description')} 
      />
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
  }
});
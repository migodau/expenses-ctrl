import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { THEME } from '../../theme';
import { formatDate } from '../../util/date';
import { AppText } from '../UI/AppText';

export function ExpenseItem({expense}) {

  const navigation = useNavigation();

  function handleItemPress() {
    navigation.navigate('ManageExpenses', { id: expense.id });
  }

  return (
    <Pressable onPress={handleItemPress} style={({pressed}) => pressed && styles.pressed}>
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
    backgroundColor: THEME.COLORS.primary600,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressed: {
    opacity: 0.6,
  },
  detailText: {
    color: THEME.COLORS.primary100,
  },
  amount: {
    backgroundColor: THEME.COLORS.primary100,
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
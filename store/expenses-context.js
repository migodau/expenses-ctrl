import { createContext, useReducer } from 'react';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  removeExpense: (id) => {},
  updateExpense: (id, {description, amount, date}) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [{...action.payload, id: uuidv4()}, ...state];
    case 'UPDATE':
      const updatedExpenses = [ ...state ];
      const index = updatedExpenses.findIndex(item => item.id === action.payload.id);
      updatedExpenses[index] = { id: updatedExpenses[index].id, ...action.payload.expense }
      return updatedExpenses;
    case 'DELETE':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expenses, dispatch] = useReducer(expenseReducer, [{
    id: '1',
    description: 'a pair of shoes',
    amount: 52.87,
    date: new Date('2023-01-05'),
  },
  {
    id: '2',
    description: '"The Litle Prince" book',
    amount: 2.50,
    date: new Date('2022-11-22'),
  }]);

  function addExpense(expense) {
    dispatch({type: 'ADD', payload: expense});
  }

  function removeExpense(id) {
    dispatch({type: 'DELETE', payload: id});
  }

  function updateExpense(id, expense) {
    dispatch({type: 'UPDATE', payload: { id, expense }});
  }

  const value = {
    expenses,
    addExpense,
    removeExpense,
    updateExpense,
  }
  
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}
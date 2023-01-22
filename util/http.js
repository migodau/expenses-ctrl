import axios from 'axios';

const API_URL = 'API-URL';

export async function storeExpense(expenseData) {
  const response = await axios.post(
    `${API_URL}/expenses.json`,
    expenseData
  );

  return response.data.name;
}

export async function fetchExpenses(expenseData) {
  const response = await axios.get(
    `${API_URL}/expenses.json`,
    expenseData
  );

  const expenses = [];

  for (const key in response.data) {
    expenses.push({
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    })
  }

  return expenses;
}

export function modifyExpense(id, expenseData) {
  return axios.put(
    `${API_URL}/expenses/${id}.json`,
    expenseData
  );
}

export function deleteExpense(id) {
  return axios.delete(
    `${API_URL}/expenses/${id}.json`
  );
}
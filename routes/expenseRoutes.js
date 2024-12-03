// In-memory storage for expenses (to be replaced with a database in production)
let expenses = [];

const addExpense = (category, amount, date) => {
  // Create a new expense
  const newExpense = { category, amount, date };
  
  // Store the new expense
  expenses.push(newExpense);
  
  return newExpense;
};

const getExpenses = (category, startDate, endDate) => {
  let filteredExpenses = expenses;

  // Filter by category if provided
  if (category) {
    filteredExpenses = filteredExpenses.filter(exp => exp.category.toLowerCase() === category.toLowerCase());
  }

  // Filter by date range if provided
  if (startDate && endDate) {
    filteredExpenses = filteredExpenses.filter(exp => {
      const expDate = new Date(exp.date);
      return expDate >= new Date(startDate) && expDate <= new Date(endDate);
    });
  }
  
  return filteredExpenses;
};

const analyzeSpending = () => {
  // Analyze spending by category
  const spendingAnalysis = expenses.reduce((acc, exp) => {
    if (!acc[exp.category]) {
      acc[exp.category] = 0;
    }
    acc[exp.category] += exp.amount;
    return acc;
  }, {});

  return spendingAnalysis;
};

module.exports = { addExpense, getExpenses, analyzeSpending };

let expenses = [];

exports.addExpenseToModel = (expense) => {
  expenses.push(expense);
};

exports.getExpensesFromModel = (category, startDate, endDate) => {
  return expenses.filter((expense) => {
    let matchesCategory = category ? expense.category === category : true;
    let matchesDateRange =
      (!startDate || new Date(expense.date) >= new Date(startDate)) &&
      (!endDate || new Date(expense.date) <= new Date(endDate));
    return matchesCategory && matchesDateRange;
  });
};

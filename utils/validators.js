exports.validateExpense = (category, amount, predefinedCategories) => {
    if (!predefinedCategories.includes(category)) {
      return 'Invalid category';
    }
    if (typeof amount !== 'number' || amount <= 0) {
      return 'Amount must be a positive number';
    }
    return null;
  };
  
import React, { useState, useEffect } from 'react';
import '../App.css';
import HelperPage from './HelperPage'; // Import the HelperPage component

function IncomeExpensesCalculator() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState('');
  const [showHelper, setShowHelper] = useState(false);

  const calculateSavings = () => {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const calculatedSavings = income - totalExpenses;
    setSavings(calculatedSavings);
  };

  const calculateIncomeExpenseRatio = () => {
    if (income === 0) {
      return 'Infinity';
    } else {
      const ratio = (expenses.reduce((total, expense) => total + expense.amount, 0) / income) * 100;
      return ratio.toFixed(2);
    }
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, { category: '', amount: 0 }]);
  };

  const handleExpenseChange = (index, e) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].amount = parseFloat(e.target.value);
    setExpenses(updatedExpenses);
  };

  const handleCategoryChange = (index, e) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].category = e.target.value;
    setExpenses(updatedExpenses);
  };

  const handleReset = () => {
    setIncome('');
    setExpenses([]);
    setSavings('');
  };

  const handleHelperToggle = () => {
    setShowHelper(!showHelper);
  };

  useEffect(() => {
    // Load previous calculation when component mounts
    const lastCalculation = JSON.parse(localStorage.getItem('lastCalculation'));
    if (lastCalculation) {
      setIncome(lastCalculation.income);
      setExpenses(lastCalculation.expenses);
      setSavings(lastCalculation.savings);
    }
  }, []);

  useEffect(() => {
    // Save calculation to local storage whenever savings changes
    const calculation = { income, expenses, savings };
    localStorage.setItem('lastCalculation', JSON.stringify(calculation));
  }, [savings]);

  return (
    <div className="App">
      <header className="header">
        <img src="/apple-touch-icon.png" alt="Apple Touch Icon" />
        <h1>Income vs. Expenses Calculator</h1>
      </header>
      <main className="main-content">
        <div className="calculator">
          <div className="input-group">
            <input
              type="number"
              className="input-field"
              name="income"
              placeholder="Enter Income Per month"
              value={income}
              onChange={(e) => setIncome(parseFloat(e.target.value))}
            />
          </div>
          <div className="expense-group">
            <p className="expense-heading">Expenses:</p>
            {expenses.map((expense, index) => (
              <div key={index} className="expense-input">
                <input
                  type="text"
                  className="category-field"
                  placeholder="Expense Category"
                  value={expense.category}
                  onChange={(e) => handleCategoryChange(index, e)}
                />
                <input
                  type="number"
                  className="amount-field"
                  placeholder="Expense Amount"
                  value={expense.amount}
                  onChange={(e) => handleExpenseChange(index, e)}
                />
              </div>
            ))}
            <button className="add-expense-button" onClick={handleAddExpense}>
              Add Expense
            </button>
          </div>
          <div className="button-group">
            <button className="calculate-button" onClick={calculateSavings}>
              Calculate
            </button>
            <button className="reset-button" onClick={handleReset}>
              Reset
            </button>
          </div>
          <div className="result">
            {savings !== '' ? (
              <div>
                <p className="result-text">Your savings: {savings >= 0 ? `$${savings}` : `-$${Math.abs(savings)}`}</p>
                <p className="result-text">Income-to-Expense Ratio: {calculateIncomeExpenseRatio()}%</p>
                {parseFloat(calculateIncomeExpenseRatio()) <= 20 ? (
                  <p className="result-text">You have a good income-to-expense ratio. Keep it up!</p>
                ) : (
                  <p className="result-text">You should aim for an income-to-expense ratio below 20%.</p>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </main>
      <button className={`helper-button ${showHelper ? 'active': 'inactive'}`} onClick={handleHelperToggle}>
        Toggle Helper
      </button>
      {showHelper && <HelperPage />}
    </div>
  );
}

export default IncomeExpensesCalculator;
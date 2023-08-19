import React, { useState } from 'react';
import '../App.css';
import HelperPage from './HelperPage'; // Import the HelperPage component

function PropertyCalculator() {
  const [totalPropertyCost, setTotalPropertyCost] = useState('');
  const [salary, setSalary] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [termInYears, setTermInYears] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [showHelper, setShowHelper] = useState(false);

  const [loanPayment, setLoanPayment] = useState('');
  const [affordabilityAdvice, setAffordabilityAdvice] = useState('');

  const calculateLoanPayment = () => {
    const principal = totalPropertyCost - downPayment;
    const monthlyInterestRate = interestRate / (12 * 100);
    const numberOfPayments = termInYears * 12;

    const monthlyPayment =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setLoanPayment(monthlyPayment.toFixed(2));
  };

  const checkAffordability = () => {
    const monthlyIncome = salary / 12;
    const affordabilityRatio = (loanPayment / monthlyIncome) * 100;

    if (affordabilityRatio <= 30) {
      setAffordabilityAdvice('You can afford this property. Good job!');
    } else {
      setAffordabilityAdvice('The property might be unaffordable. Consider a lower-priced property or increasing your down payment.');
    }
  };

  const handleReset = () => {
    setTotalPropertyCost('');
    setSalary('');
    setInterestRate('');
    setTermInYears('');
    setDownPayment('');

    setLoanPayment('');
    setAffordabilityAdvice('');
  };

  return (
    <div className="App">
      <header className="header">
        <img src="../apple-touch-icon.png" alt="Apple Touch Icon" />
        <h1>ROI Property Calculator</h1>
      </header>
      <main className="main-content">
        <div className="calculator">
          <div className="input-group">
            <input
              type="number"
              className="input-field"
              name="totalPropertyCost"
              placeholder="Total Property Cost"
              value={totalPropertyCost}
              onChange={(e) => setTotalPropertyCost(parseFloat(e.target.value))}
            />
            <input
              type="number"
              className="input-field"
              name="salary"
              placeholder="Salary per month"
              value={salary}
              onChange={(e) => setSalary(parseFloat(e.target.value))}
            />
            <input
              type="number"
              className="input-field"
              name="interestRate"
              placeholder="Interest Rate"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            />
            <input
              type="number"
              className="input-field"
              name="termInYears"
              placeholder="Term in Years"
              value={termInYears}
              onChange={(e) => setTermInYears(parseFloat(e.target.value))}
            />
            <input
              type="number"
              className="input-field"
              name="downPayment"
              placeholder="Down Payment"
              value={downPayment}
              onChange={(e) => setDownPayment(parseFloat(e.target.value))}
            />
          </div>
          <div className="button-group">
            <button className="calculate-button" onClick={calculateLoanPayment}>
              Calculate Loan Payment
            </button>
            <button className="calculate-button" onClick={checkAffordability}>
              Check Affordability
            </button>
            <button className="reset-button" onClick={handleReset}>
              Reset
            </button>
          </div>
          <div className="result">
            {loanPayment !== '' && affordabilityAdvice !== '' && (
              <div>
                <p className="result-text">Loan Payment: ${loanPayment}</p>
                <p className="result-text">{affordabilityAdvice}</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <button className={`helper-button ${showHelper ? 'active': 'inactive'}`} onClick={() => setShowHelper(!showHelper)}>
        Toggle Helper
      </button>
      {showHelper && <HelperPage />}
    </div>
  );
}

export default PropertyCalculator;
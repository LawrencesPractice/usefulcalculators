import React, { useState, useEffect } from 'react';
import './App.css';
import HelperPage from './HelperPage'; // Import the HelperPage component

function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');
  const [calculationMethod, setCalculationMethod] = useState('percentageOf');
  const [showHelper, setShowHelper] = useState(false);

  const calculatePercentage = () => {
    let calculatedResult;

    switch (calculationMethod) {
      case 'percentageOf':
        calculatedResult = (parseFloat(value1) * parseFloat(value2)) / 100;
        break;
      case 'whatPercentOf':
        calculatedResult = (parseFloat(value1) / parseFloat(value2)) * 100;
        break;
      case 'percentageChange':
        calculatedResult = ((parseFloat(value2) - parseFloat(value1)) / parseFloat(value1)) * 100;
        break;
      default:
        calculatedResult = 0;
    }

    setResult(calculatedResult.toFixed(2));
  };

  const handleMethodChange = (method) => {
    setCalculationMethod(method);
    setResult('');
  };

  useEffect(() => {
    // Load previous calculation when component mounts
    const lastCalculation = JSON.parse(localStorage.getItem('lastCalculation'));
    if (lastCalculation) {
      setValue1(lastCalculation.value1);
      setValue2(lastCalculation.value2);
      setResult(lastCalculation.result);
    }
  }, []);

  return (
    <div className="App">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9194894797026673"
          crossorigin="anonymous"
        ></script>
      </head>
      <header className="header">
        <img src="/apple-touch-icon.png" alt="Apple Touch Icon" /> {/* Display the image */}        <h1>Quick Percentage Solver</h1>
      </header>
      <main className="main-content">
        <div className="calculator">
          <div className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder={
                calculationMethod === 'percentageOf'
                  ? 'Enter Percentage (e.g., 10)'
                  : 'Enter Value (e.g., 50)'
              }
              value={value1}
              onChange={(e) => {
                setValue1(e.target.value.replace(/[^0-9.]/g, ''));
              }}
            />
            <input
              type="text"
              className="input-field"
              placeholder={
                calculationMethod === 'percentageChange'
                  ? 'Enter Initial Value (e.g., 100)'
                  : calculationMethod === 'percentageOf'
                    ? 'Enter Amount'
                    : 'Enter Total Value'
              }
              value={value2}
              onChange={(e) => {
                setValue2(e.target.value.replace(/[^0-9.]/g, ''));
              }}
            />
          </div>
          <div className="button-group">
            <button className="calculate-button" onClick={calculatePercentage}>
              Calculate
            </button>
            <button
              className="reset-button"
              onClick={() => {
                setValue1('');
                setValue2('');
                setResult('');
              }}
            >
              Reset
            </button>
          </div>
          <div className="method-buttons">
            <select
              className="select-field"
              value={calculationMethod}
              onChange={(e) => handleMethodChange(e.target.value)}
            >
              <option value="percentageOf">What is x% of y?</option>
              <option value="whatPercentOf">z is what percent of y?</option>
              <option value="percentageChange">Percentage Change</option>
            </select>
          </div>
          <div className="result">
            {result && !isNaN(result) ? (
              <p className="result-text">
                {calculationMethod === 'percentageOf'
                  ? `${value1}% of ${value2} is ${result}`
                  : calculationMethod === 'whatPercentOf'
                    ? `${value1} is ${result}% of ${value2}`
                    : `Percentage change from ${value1} to ${value2} is ${result}%`}
              </p>
            ) : (
              <p className="error">Invalid input. Please enter valid values.</p>
            )}
          </div>
        </div>
      </main>
      <button className={`helper-button ${showHelper ? 'active' : ''}`} onClick={() => setShowHelper(!showHelper)}>
        How to use Percentage Solver
      </button>
      {showHelper && <HelperPage />}

      <footer className="footer">
        <p>&copy; 2023 Quick Percentage Solver</p>
      </footer>
    </div>
  );
}

export default App;

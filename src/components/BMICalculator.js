import React, { useState, useEffect } from 'react';
import '../App.css';
import HelperPage from './HelperPage'; // Import the HelperPage component

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [showHelper, setShowHelper] = useState(false);

  const calculateBMI = () => {
    if (weight && height) {
      const bmi = (parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2)).toFixed(2);
      setResult(bmi);
    } else {
      setResult('');
    }
  };

  useEffect(() => {
    // Load previous calculation when component mounts
    const lastCalculation = JSON.parse(localStorage.getItem('lastCalculation'));
    if (lastCalculation) {
      setWeight(lastCalculation.weight);
      setHeight(lastCalculation.height);
      setResult(lastCalculation.result);
    }
  }, []);

  useEffect(() => {
    // Save calculation in localStorage
    const calculation = {
      weight,
      height,
      result,
    };
    localStorage.setItem('lastCalculation', JSON.stringify(calculation));
  }, [weight, height, result]);

  return (
    <div className="App">
      <header className="header">
        <img src="/apple-touch-icon.png" alt="Apple Touch Icon" />
        <h1>BMI Calculator</h1>
      </header>
      <main className="main-content">
        <div className="calculator">
          <div className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value.replace(/[^0-9.]/g, ''));
              }}
            />
            <input
              type="text"
              className="input-field"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value.replace(/[^0-9.]/g, ''));
              }}
            />
          </div>
          <div className="button-group">
            <button className="calculate-button" onClick={calculateBMI}>
              Calculate BMI
            </button>
            <button
              className="reset-button"
              onClick={() => {
                setWeight('');
                setHeight('');
                setResult('');
              }}
            >
              Reset
            </button>
          </div>
          <div className="result">
            {result && !isNaN(result) ? (
              <p className="result-text">{`Your BMI is ${result}`}</p>
            ) : (
              <p className="error">Invalid input. Please enter valid values.</p>
            )}
          </div>
        </div>
      </main>
      <button className={`helper-button ${showHelper ? 'active' : ''}`} onClick={() => setShowHelper(!showHelper)}>
        How to use BMI Calculator
      </button>
      {showHelper && <HelperPage />}

      <footer className="footer">
        <p>&copy; 2023 BMI Calculator</p>
      </footer>
    </div>
  );
}

export default BMICalculator;
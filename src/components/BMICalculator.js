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

  // Define weight categories and suggestions
  const weightCategories = [
    { category: 'Underweight', minBMI: 0, maxBMI: 18.5, suggestion: 'You may need to gain weight. Consult with a healthcare professional for a proper diet and exercise plan.' },
    { category: 'Normal weight', minBMI: 18.5, maxBMI: 24.9, suggestion: 'Congratulations! You have a healthy weight. Maintain a balanced diet and regular exercise routine to stay healthy.' },
    { category: 'Overweight', minBMI: 25, maxBMI: 29.9, suggestion: 'You may need to lose some weight. Consult with a healthcare professional for a proper diet and exercise plan.' },
    { category: 'Obese', minBMI: 30, maxBMI: Number.POSITIVE_INFINITY, suggestion: 'You may need to lose weight for your health. Consult with a healthcare professional for a proper diet and exercise plan.' },
  ];

  // Find the weight category based on BMI
  const findWeightCategory = (bmi) => {
    return weightCategories.find(category => bmi >= category.minBMI && bmi <= category.maxBMI);
  };

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
              <>
                <p className="result-text">{`Your BMI is ${result}`}</p>
                {findWeightCategory(parseFloat(result)) && (
                  <p className="suggestion">
                    {`Category: ${findWeightCategory(parseFloat(result)).category}`}
                    <br />
                    {`Suggestion: ${findWeightCategory(parseFloat(result)).suggestion}`}
                  </p>
                )}
              </>
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
        <p>&copy; 2023 Quick Calculator solver</p>
      </footer>
    </div>
  );
}

export default BMICalculator;
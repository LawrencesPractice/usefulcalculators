import React, { useState, useEffect } from 'react';
import '../App.css';
import HelperPage from './HelperPage'; // Import the HelperPage component

function FuelCalculator() {
  const [distance, setDistance] = useState('');
  const [fuelEconomy, setFuelEconomy] = useState('');
  const [fuelCost, setFuelCost] = useState('');
  const [result, setResult] = useState('');

  const calculateFuelUsage = () => {
    const calculatedResult = (parseFloat(distance) / parseFloat(fuelEconomy)).toFixed(2);
    setResult(calculatedResult);
  };

  const calculateTripCost = () => {
    const calculatedResult = (parseFloat(distance) / parseFloat(fuelEconomy)) * parseFloat(fuelCost);
    setResult(calculatedResult.toFixed(2));
  };

  useEffect(() => {
    // Load previous calculation when component mounts
    const lastCalculation = JSON.parse(localStorage.getItem('lastCalculation'));
    if (lastCalculation) {
      setDistance(lastCalculation.distance);
      setFuelEconomy(lastCalculation.fuelEconomy);
      setFuelCost(lastCalculation.fuelCost);
      setResult(lastCalculation.result);
    }
  }, []);

  useEffect(() => {
    // Save calculation in localStorage
    const calculation = {
      distance,
      fuelEconomy,
      fuelCost,
      result,
    };
    localStorage.setItem('lastCalculation', JSON.stringify(calculation));
  }, [distance, fuelEconomy, fuelCost, result]);

  return (
    <div className="App">
      <header className="header">
        <img src="/apple-touch-icon.png" alt="Apple Touch Icon" />
        <h1>Fuel Calculator</h1>
      </header>
      <main className="main-content">
        <div className="calculator">
          <div className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Distance (e.g., 100)"
              value={distance}
              onChange={(e) => {
                setDistance(e.target.value.replace(/[^0-9.]/g, ''));
              }}
            />
            <input
              type="text"
              className="input-field"
              placeholder="Fuel Economy (e.g., 10)"
              value={fuelEconomy}
              onChange={(e) => {
                setFuelEconomy(e.target.value.replace(/[^0-9.]/g, ''));
              }}
            />
            <input
              type="text"
              className="input-field"
              placeholder="Fuel Cost (e.g., 2.5)"
              value={fuelCost}
              onChange={(e) => {
                setFuelCost(e.target.value.replace(/[^0-9.]/g, ''));
              }}
            />
          </div>
          <div className="button-group">
            <button className="calculate-button" onClick={calculateFuelUsage}>
              Calculate Fuel Usage
            </button>
            <button className="calculate-button" onClick={calculateTripCost}>
              Calculate Trip Cost
            </button>
            <button
              className="reset-button"
              onClick={() => {
                setDistance('');
                setFuelEconomy('');
                setFuelCost('');
                setResult('');
              }}
            >
              Reset
            </button>
          </div>
          <div className="result">
            {result && !isNaN(result) ? (
              <p className="result-text">
                {`Fuel Usage: ${result} units`}
              </p>
            ) : (
              <p className="error">Invalid input. Please enter valid values.</p>
            )}
          </div>
        </div>
      </main>
      {/* <button className={`helper-button ${showHelper ? 'active' : ''}`} onClick={() => setShowHelper(!showHelper)}>
        How to use Fuel Calculator
      </button>
      {showHelper && <HelperPage />} */}

      <footer className="footer">
        <p>&copy; 2023 Fuel Calculator</p>
      </footer>
    </div>
  );
}

export default FuelCalculator;
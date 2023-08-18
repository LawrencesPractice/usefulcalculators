import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PercentageCal from './components/PercentageCal.js';
import FuelCalculator from './components/FuelCalculator.js';
import BMICalculator from './components/BMICalculator.js';
import IncomeExpensesCalculator from './components/IncomeExpensesCalculator';
import PropertyCalculator from './components/PropertyCalculator';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/fuel-calculator">Fuel Calculator</Link>
            </li>
            <li>
              <Link to="/bmi-calculator">BMI Calculator</Link>
            </li>
            <li>
              <Link to="/percentage-calculator">Percentage Calculator</Link>
            </li>
            <li>
              <Link to="/incomeExpenses-calculator">Income vs expenses Calculator</Link>
            </li>
            <li>
            <Link to="/property-affordability-calculator">Property affordability Calculator</Link>

            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/fuel-calculator" element={<FuelCalculator />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/percentage-calculator" element={<PercentageCal />} />
          <Route path="/incomeExpenses-calculator" element={<IncomeExpensesCalculator />} />
          <Route path="/property-affordability-calculator" element={<PropertyCalculator />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
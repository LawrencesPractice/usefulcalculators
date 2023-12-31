import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PercentageCal from './components/PercentageCal.js';
import FuelCalculator from './components/FuelCalculator.js';
import BMICalculator from './components/BMICalculator.js';
import IncomeExpensesCalculator from './components/IncomeExpensesCalculator';
import PropertyCalculator from './components/PropertyCalculator';
import CostComparison from './components/CostComparison';
import HomePage from './components/HomePage'; // Import the HomePage component

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
            <li>
              <Link to="/transport-cost-comparison-calculator">Transport Cost Comparison Calculator</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Set the HomePage component as the element for the root route */}
          <Route path="/fuel-calculator" element={<FuelCalculator />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/percentage-calculator" element={<PercentageCal />} />
          <Route path="/incomeExpenses-calculator" element={<IncomeExpensesCalculator />} />
          <Route path="/property-affordability-calculator" element={<PropertyCalculator />} />
          <Route path="/transport-cost-comparison-calculator" element={<CostComparison />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
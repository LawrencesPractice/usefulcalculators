import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PercentageCal from './components/PercentageCal.js';
import FuelCalculator from './components/FuelCalculator.js';
import BMICalculator from './components/BMICalculator.js';

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
          </ul>
        </nav>
        <Routes>
          <Route path="/fuel-calculator" element={<FuelCalculator />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/percentage-calculator" element={<PercentageCal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';
import PercentageCal from './components/PercentageCal.js';
import FuelCalculator from './components/FuelCalculator.js';
import BMICalculator from './components/BMICalculator.js';

function App() {
  const [selectedCalculator, setSelectedCalculator] = useState('');

  const handleCalculatorSelection = (calculator) => {
    setSelectedCalculator(calculator);
  };

  let calculatorComponent;
  switch (selectedCalculator) {
    case 'FuelCalculator':
      calculatorComponent = <FuelCalculator />;
      break;
    case 'BMICalculator':
      calculatorComponent = <BMICalculator />;
      break;

      case 'PercentageCal':
        calculatorComponent = <PercentageCal />;
        break;
        default:
        calculatorComponent = <PercentageCal />;
        break;

  }

  return (
    <div className="App">
      {/* Add your navigation component here */}
      <nav>
        <ul>
          <li>
            <button onClick={() => handleCalculatorSelection('FuelCalculator')}>Fuel Calculator</button>
          </li>
          <li>
            <button onClick={() => handleCalculatorSelection('BMICalculator')}>BMI Calculator</button>
          </li>
          <li>
            <button onClick={() => handleCalculatorSelection('PercentageCal')}>Percentage Calculator</button>
          </li>

        </ul>
      </nav>
      {/* Render the selected calculator component */}
      {calculatorComponent}
    </div>
  );
}

export default App;
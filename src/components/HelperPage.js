import React from 'react';
import './HelperPage.css'; // Import your CSS file for styling

function HelperPage() {
  return (
    <div className="helper-page">
      <h2 className="helper-title">How to Use Quick Percentage Solver</h2>
      <p className="helper-description">
        Quick Percentage Solver is a handy tool that helps you perform various percentage calculations
        with ease. Here's how you can use it:
      </p>
      <h3 className="helper-subtitle">Step 1: Choose Calculation Method</h3>
      <p className="helper-description">
        Select the type of percentage calculation you want to perform from the dropdown menu. You can
        choose from:
      </p>
      <ul className="helper-list">
        <li>What is x% of y?</li>
        <li>z is what percent of y?</li>
        <li>Percentage Change</li>
      </ul>
      <h3 className="helper-subtitle">Step 2: Enter Values</h3>
      <p className="helper-description">
        Depending on the calculation method you chose, enter the required values into the input fields.
        The app will automatically validate and process the input for you.
      </p>
      <h3 className="helper-subtitle">Step 3: Calculate and Reset</h3>
      <p className="helper-description">
        After entering the values, you can click the "Calculate" button to see the result. If you want to
        start over, simply click the "Reset" button to clear the input fields.
      </p>
      <h3 className="helper-subtitle">Step 4: View Results</h3>
      <p className="helper-description">
        The app will display the calculated result based on the selected calculation method. If there's an
        error or invalid input, you'll see an error message instead.
      </p>
      <p className="helper-description">
        Quick Percentage Solver is designed to make percentage calculations quick and hassle-free.
      </p>
    </div>
  );
}

export default HelperPage;
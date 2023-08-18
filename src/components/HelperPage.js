import React from 'react';
import './HelperPage.css'; // Import your CSS file for styling

function HelperPage() {
  return (
    <div className="helper-page">
      <h2 className="helper-title">How to Use the Quick Calculator</h2>
      <p className="helper-description">
        The Quick Calculator is a handy tool that helps you perform various percentage calculations
        to assist you in your daily life. Here's how you can use it:
      </p>
      <h3 className="helper-subtitle">Step 1: Choose Calculation Method</h3>
      <p className="helper-description">
        Select the type of percentage calculation you want to perform from the available options. The calculator
        may offer calculations such as:
      </p>
      <ul className="helper-list">
        <li>What is x% of y?</li>
        <li>z is what percent of y?</li>
        <li>Percentage Change</li>
        {/* Add additional calculation options as needed */}
      </ul>
      <h3 className="helper-subtitle">Step 2: Enter Values</h3>
      <p className="helper-description">
        Depending on the calculation method you chose, enter the required values into the input fields provided.
        The calculator will automatically validate and process the input for you.
      </p>
      <h3 className="helper-subtitle">Step 3: Calculate and Reset</h3>
      <p className="helper-description">
        After entering the values, you can click the "Calculate" button to see the result. If you want to start over,
        simply click the "Reset" button to clear the input fields.
      </p>
      <h3 className="helper-subtitle">Step 4: View Results</h3>
      <p className="helper-description">
        The calculator will display the calculated result based on the selected calculation method. If there's an error
        or invalid input, you'll see an error message instead.
      </p>
      <p className="helper-description">
        The Percentage Calculator is designed to make percentage calculations quick and hassle-free, helping you in your
        daily life.
      </p>
    </div>
  );
}

export default HelperPage;
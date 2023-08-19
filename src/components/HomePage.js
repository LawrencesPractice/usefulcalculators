import React from 'react';
import '../App.css';

function Homepage() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to Quick Daily life Calculators and Tools</h1>
      </header>
      <main className="main-content">
        <div className="description">
          <p>
            At Daily life Calculators and Tools, our mission is to make your daily home tasks easier and more efficient. We understand that managing various calculations and measurements can be time-consuming and complex, so we've developed a range of calculators and tools to simplify your life.
          </p>
          <p>
            Whether you're planning a home loan, managing your household budget, or simply trying to stay organized, our calculators and tools are designed to provide you with accurate results and save you valuable time. With user-friendly interfaces and intuitive functionalities, you can quickly and easily perform calculations and generate useful insights.
          </p>
          <p>
            We strive to continuously expand our offerings and enhance the functionality of our tools based on user feedback and evolving needs. Our goal is to empower you with the right information and tools to make informed decisions and accomplish your daily home tasks with ease.
          </p>
          <p>
            Feel free to explore our calculators and tools, and don't hesitate to reach out to us if you have any suggestions, questions, or feedback. We're here to assist you on your journey to a more efficient and organized home life.
          </p>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Quick Calculator solver</p>
      </footer>
    </div>
  );
}

export default Homepage;
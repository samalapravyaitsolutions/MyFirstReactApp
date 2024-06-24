// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './global.css'; // Ensure global CSS is imported
import LoanBasic from './modules/LoanBasic'; // Import the LoanBasic component
import LoanAdvanced from './modules/LoanAdvanced'; // Placeholder for other modules
// ...import other pages

function Navigation() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Financial Calculator Tool</h1>
      </header>
      <main className="App-main">
        <Link to="/loan-basic" className="App-button">Loan Basic</Link>
        <Link to="/loan-advanced" className="App-button">Loan Advanced</Link>
        <Link to="/fixed-deposit-tdr" className="App-button">Fixed Deposit - TDR (Interest Payout)</Link>
        <Link to="/fixed-deposit-stdr" className="App-button">Fixed Deposit - STDR (Cumulative)</Link>
        <Link to="/recurring-deposit" className="App-button">Recurring Deposit</Link>
        <Link to="/interest-rates" className="App-button">Interest Rates (%)</Link>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/loan-basic" element={<LoanBasic />} />
        <Route path="/loan-advanced" element={<LoanAdvanced />} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;

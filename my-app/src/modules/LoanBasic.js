// src/modules/LoanBasic.js

import React, { useState } from 'react';
import './LoanBasic.css'; // Import CSS for LoanBasic component

function LoanBasic() {
  const [selectedOption, setSelectedOption] = useState('monthly-repayment');
  const [loanAmount, setLoanAmount] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [loanTermValue, setLoanTermValue] = useState('');
  const [loanTermUnit, setLoanTermUnit] = useState('years');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleReset = () => {
    setLoanAmount('');
    setAnnualInterestRate('');
    setLoanTermValue('');
    setLoanTermUnit('years');
  };

  const renderPlaceholder = () => {
    switch (selectedOption) {
      case 'monthly-repayment':
        return (
          <div>
            <label>Loan Amount</label>
            <input
              type="number"
              placeholder="Enter loan amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="numeric-input"
            />
            <div className="gap"></div>
            <label>Annual Interest Rate (%)</label>
            <input
              type="number"
              placeholder="Enter interest rate"
              value={annualInterestRate}
              onChange={(e) => setAnnualInterestRate(e.target.value)}
              className="numeric-input"
            />
            <div className="gap"></div>
            <label>Loan Term</label>
            <div className="loan-term-row">
              <input
                type="number"
                placeholder="Enter term"
                value={loanTermValue}
                onChange={(e) => setLoanTermValue(e.target.value)}
                className="numeric-input"
              />
              <select
                value={loanTermUnit}
                onChange={(e) => setLoanTermUnit(e.target.value)}
                className="term-unit"
              >
                <option value="years">years</option>
                <option value="months">months</option>
              </select>
            </div>
            <div className="gap"></div>
            <div className="button-row">
              <button onClick={handleReset}>Reset</button>
              <button>Calculate</button>
            </div>
          </div>
        );
      case 'loan-amount':
        return <label>Loan Amount</label>;
      case 'annual-interest-rate':
        return <label>Annual Interest Rate (%)</label>;
      case 'loan-term':
        return <label>Loan Term</label>;
      default:
        return <label>Please select an option from the dropdown.</label>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Loan Basic Calculator</h1>
      </header>
      <main className="App-main">
        <div className="dropdown-container">
          <select id="loan-options" onChange={handleDropdownChange} value={selectedOption}>
            <option value="monthly-repayment">Monthly Repayment (EMI)</option>
            <option value="loan-amount">Loan Amount</option>
            <option value="annual-interest-rate">Annual Interest Rate (%)</option>
            <option value="loan-term">Loan Term</option>
          </select>
        </div>
        <div className="placeholder">
          {renderPlaceholder()}
        </div>
      </main>
    </div>
  );
}

export default LoanBasic;

import React from "react";

const UserInput = ({ userInputs, onChange }) => {


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input 
            type="number" 
            placeholder="e.g., 10000" 
            required 
            value={userInputs.initialInvestment}
            onChange={(e) => onChange('initialInvestment', parseFloat(e.target.value) || 0)}
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input 
            type="number" 
            placeholder="e.g., 1200" 
            required 
            value={userInputs.annualInvestment}
            onChange={(e) => onChange('annualInvestment', parseFloat(e.target.value) || 0)}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input 
            type="number" 
            placeholder="e.g., 6" 
            required 
            value={userInputs.expectedReturn}
            onChange={(e) =>  onChange('expectedReturn', parseFloat(e.target.value) || 0)}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input 
            type="number" 
            placeholder="e.g., 10" 
            required 
            value={userInputs.duration}
            onChange={(e) => onChange('duration', parseFloat(e.target.value) || 0)}
          ></input>
        </p>
      </div>
    </section>
  );
};

export default UserInput;

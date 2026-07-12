import React from "react";
import { useState } from "react";

const UserInput = () => {
    const [userInputs, setUserInputs] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

function handleChange(inputIdentifier, newValue) {
setUserInputs(prevUserInputs => {
    return {
        ...prevUserInputs,
        [inputIdentifier]: newValue
    }
})
}

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
            onChange={(e) => handleChange('initialInvestment', parseFloat(e.target.value) || 0)}
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input 
            type="number" 
            placeholder="e.g., 1200" 
            required 
            value={userInputs.annualInvestment}
            onChange={(e) => handleChange('annualInvestment', parseFloat(e.target.value) || 0)}
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
            onChange={(e) => handleChange('expectedReturn', parseFloat(e.target.value) || 0)}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input 
            type="number" 
            placeholder="e.g., 10" 
            required 
            value={userInputs.duration}
            onChange={(e) => handleChange('duration', parseFloat(e.target.value) || 0)}
          ></input>
        </p>
      </div>
    </section>
  );
};

export default UserInput;

import React from "react";

const UserInput = () => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input></input>
        </p>
        <p>
          <label>Investment Period</label>
          <input></input>
        </p>
      </div>
    </section>
  );
};

export default UserInput;

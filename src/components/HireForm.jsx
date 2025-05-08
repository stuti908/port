import React, { useState } from 'react';
import './HireForm.css';

const HireForm = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    e.target.reset(); // Reset form inputs

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="hire-container">
      <form className="hire-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your name .." required />
        <input type="text" placeholder="enter your company name ....." required />
        <input type="text" placeholder="enter my role ....." required />
        <button type="submit">SUBMIT</button>
      </form>

      <div className="hire-quote">"I'll enjoy working with you"</div>

      {showMessage && (
        <div className="success-message">
          I will respond to you very soon!
        </div>
      )}
    </div>
  );
};

export default HireForm;

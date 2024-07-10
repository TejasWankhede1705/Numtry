import React from 'react';
import '../css/FormComponent.css';

const OTPVerification = ({ handleOtpSubmit, handleChange, errors }) => {
  return (
    <div className="form-container">
      <h2>Enter OTP</h2>
      <form onSubmit={handleOtpSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            required
            onChange={handleChange}
          />
        </div>
        {errors.otp && (
          <div className="form-errors">
            <p className="error-message">{errors.otp}</p>
          </div>
        )}
        <div className="form-row">
          <button type="submit">Verify OTP</button>
        </div>
      </form>
    </div>
  );
};

export default OTPVerification;

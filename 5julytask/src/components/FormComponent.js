import React, { useState } from 'react';
import '../css/FormComponent.css';
import ThankYou from './ThankYou';
import OTPVerification from './OTPVerification';

const FormComponent = () => {
  const [submitted, setSubmitted] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    password: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Simulate sending OTP
      setOtp(generateOtp());
      setOtpSent(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === formData.otp) {
      setSubmitted(true);
    } else {
      setErrors({ otp: 'Invalid OTP' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;

    if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }
    if (!passwordRegex.test(formData.password)) {
      errors.password = 'Password must be at least 8 characters long, contain at least one uppercase letter and one special character';
    }

    return errors;
  };

  const generateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(otp);
    return otp;
  };

  if (submitted) {
    return <ThankYou />;
  }

  if (otpSent) {
    return <OTPVerification handleOtpSubmit={handleOtpSubmit} handleChange={handleChange} errors={errors} />;
  }

  return (
    <div className="form-container">
      <h2>CONTACT US TODAY</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <textarea
            name="message"
            placeholder="Message"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        {Object.keys(errors).length > 0 && (
          <div className="form-errors">
            {Object.keys(errors).map((key) => (
              <p key={key} className="error-message">{errors[key]}</p>
            ))}
          </div>
        )}
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;

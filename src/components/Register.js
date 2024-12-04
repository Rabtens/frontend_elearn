import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Use a specific CSS file for the Register page 
import goImage from "../images/go.png"; 

function Register() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="register-container">
      {/* Close Button for Register */}
      <button className="register-close-btn" onClick={() => navigate("/")}>
        ×
      </button>

      {/* Registration Card */}
      <div className="register-card">
        <h2>Register</h2>
        <form>
          {/* Username Field */}
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
          </div>

          {/* Email Field */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" required />
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms">
              I agree to the <a href="/terms">terms & conditions</a>
            </label>
          </div>

          {/* Register Button */}
          <button type="submit" className="register-btn" disabled={!isChecked}>
            Register
          </button>
        </form>

        {/* Login Option */}
        <div className="register-option">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <img src={goImage} alt="goImage" className="register-image" />
    </div>
  );
}

export default Register;

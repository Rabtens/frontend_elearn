import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
import MashaImage from "../images/masha.png"; 
import GoogleImage from "../images/google.png";
import FacebookImage from "../images/facebook.png";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      {/* Login Card */}
      <div className="login-card">
        {/* Close Button */}
        <button className="close-btn" onClick={() => navigate("/")}>
          ×
        </button>

        <h2>Login</h2>
        <form>
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

          {/* Remember Me and Forgot Password */}
          <div className="extras">
            <label className="checkbox-container">
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="/">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {/* Register Option */}
        <div className="register-option">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>

        {/* Social Media Login */}
        <div className="social-login">
          <p>or</p>
          <button className="social-btn google-btn">
            Continue with Google
            <img src={GoogleImage} alt="Google Logo" className="social-icon" />
          </button>
          <button className="social-btn facebook-btn">
            Continue with Facebook
            <img src={FacebookImage} alt="Facebook Logo" className="social-icon" />
          </button>
        </div>
      </div>

      {/* Decorative Image */}
      <img src={MashaImage} alt="MashaImage" className="login-image" />
    </div>
  );
}

export default Login;

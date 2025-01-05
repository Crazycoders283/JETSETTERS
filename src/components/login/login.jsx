/*import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        
        <div
          className="login-image"
          style={{
            backgroundImage: `url('https://www.pixelstalk.net/wp-content/uploads/2016/07/3D-Nature-Images-Free-Download.jpg')`,
          }}
        ></div>

        
        <div className="login-content">
          <h2 className="login-title">Login</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="username@gmail.com"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-input"
              />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="/" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button className="login-button">Sign In</button>
            <div className="login-divider">or continue with</div>
            <div className="social-login">
              <button className="social-button">
                <img
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="Google"
                />
              </button>
              <button className="social-button">
                <img
                  src="https://img.icons8.com/ios-filled/50/facebook-new.png"
                  alt="Facebook"
                />
              </button>
              <button className="social-button">
                <img
                  src="https://img.icons8.com/ios-filled/50/apple-logo.png"
                  alt="Apple"
                />
              </button>
            </div>
          </form>
          <p className="login-footer">
            By proceeding, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;*/
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        {/* Image Section */}
        <div
          className="login-image"
          style={{
            backgroundImage: `url('http://www.gerardgorman.com/uploads/1/7/8/0/17808/1a_orig.jpeg')`,
          }}
        ></div>

        {/* Login Form Section */}
        <div className="login-content">
          <h2 className="login-title">Login</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="username@gmail.com"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-input"
              />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="/" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button className="login-button">Sign In</button>
            <div className="login-divider">or continue with</div>
            <div className="social-login">
              <button className="social-button">
                <img
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="Google"
                />
              </button>
              <button className="social-button">
                <img
                  src="https://img.icons8.com/ios-filled/50/facebook-new.png"
                  alt="Facebook"
                />
              </button>
              <button className="social-button">
                <img
                  src="https://img.icons8.com/?size=100&id=60688&format=png&color=000000"
                  alt="Email"
                />
              </button>
            </div>
          </form>
          <p className="login-footer">
            By proceeding, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="mt-3 border rounded-2 p-4 text-bg-light w-50 mx-auto">
      <div className="form-group mb-2">
        <label className="fw-bold" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="form-group mb-2">
        <label className="fw-bold" htmlFor="password">
          Password
        </label>
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="password"
            placeholder="Password"
          />
          <div className="input-group-append">
            <button
              className="btn btn-danger"
              type="button"
              onClick={handleTogglePassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
        <a href="#" className="float-right ms-2">
          Forgotten password?
        </a>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Log In
      </button>
      <hr />
      <Link to='/register'>
        <button type="button" className="btn btn-secondary btn-block">
          Create New Account
        </button>
      </Link>
    </form>
  );
};

export default Login;

import React from "react";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <form className="mt-3 border rounded-2 p-4 text-bg-light w-50 mx-auto">
      <div className="form-group mb-2">
        <label className="fw-bold" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
        />
      </div>
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
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Register
      </button>
      <hr />
      <Link to="/login">
        <button type="button" className="btn btn-secondary btn-block">
          Already Have an Account
        </button>
      </Link>
    </form>
  );
};

export default Register;

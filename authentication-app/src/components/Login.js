import React from 'react'

function Login() {
    return (
      <div>
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              value="email@example.com"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
        </div>
        <button type="button" class="btn btn-primary">
          Login
        </button>
      </div>
    );
}

export default Login

import React from 'react'
import {NavLink} from "react-router-dom";
const Login = () => {
  return (
    <>
      <center>
            <form>
               <center><h3>Login</h3></center>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" />
                </div>
                <button type="submit" className="btn btn-success btn-lg ml-5" name="signup" value="login">Login</button>
                <p className="forgot-password text-right">
                    Register Yourself <NavLink to="/signup" className="signup-image-link" ><b>Register</b></NavLink>
                </p>
            </form>
            </center>

    </>
  )
}

export default Login

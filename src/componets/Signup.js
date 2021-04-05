
import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <center>
            <form>
               <center><b><h1>Register</h1></b></center>

                <div className="form-group">
                    <label> Full Name</label>
                    <input type="text" className="form-control" placeholder="Full name" autoComplete="off" name="name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter Phone No." name="phone" />
                </div>

                <div className="form-group">
                    <label>Profession</label>
                    <input type="text" className="form-control" placeholder="Enter Profession" name="work" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" />
                </div>

                <div className="form-group">
                    <label> Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="cpassword" />
                </div>

                <button type="submit" className="btn btn-dark  btn-lg ml-5 mt-5" name="signup" value="register">Register</button>
                <p className="forgot-password text-right">
                    Already registered <NavLink to="/login" className="signup-image-link" ><b>Login</b></NavLink>
                </p>
            </form>
            </center>
        );
    }
}


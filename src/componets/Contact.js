import React from 'react'
// import {NavLink} from "react-router-dom";
const Contact = () => {
  return (
    <>
   
    <form>
               <center><h1>Contact Us</h1></center>
               <div class="card">
                  <div class="card-header">
                    On Phone:
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>9549816159</p>
                      <p>Email : tushaltak2000@gmail.com</p>
                      <footer class="blockquote-footer">this is from Tushar you can mail or send mesage on mail id and Phone Number</footer>
                    </blockquote>
                  </div>
                </div>
     
               <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" name="name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="number" className="form-control" placeholder="Enter Phone" name="phone" />
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea id="form10" class="md-textarea form-control" rows="3"></textarea>
                   </div>
                <button type="submit" className="btn btn-danger btn-lg ml-5" name="contact" value="contact">Contact</button>
            </form>
    </>
  )
}

export default Contact

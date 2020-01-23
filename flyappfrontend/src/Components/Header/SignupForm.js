import React from 'react';
//import { Link } from 'react-router-dom';

const SignupForm = (props) =>{
    return (
        <div className="wrapper">
        <div className="form_wrapper">
        <div className="form-center">
            <form className="form_fields">
              <div className="form_field">
                <label className="form_field_label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="form_field_input" placeholder="Enter your full name" name="name"  />
              </div>
              <div className="form_field">
                <label className="form_field_label" htmlFor="password">Password</label>
                <input type="password" id="password" className="form_field_input" placeholder="Enter your password" name="password"  />
              </div>
              <div className="form_field">
                <label className="form_field_label" htmlFor="email">E-mail Address</label>
                <input type="email" id="email" className="form_field_input" placeholder="Enter your email" name="email"/>
              </div>
              <div className="form_field">
                <label className="form_field_checkbox_label">
                    <input className="form_field_checkbox" type="checkbox"/> I agree all statements in <a href="" className="form_field_termslink">terms of service</a>
                </label>
               </div>
              <div className="form_field">
                  <button className="form_field_button mr-20">Sign Up</button>
              </div>
            </form>
          </div>
          </div>
          </div>
        );
    }

  export default SignupForm;

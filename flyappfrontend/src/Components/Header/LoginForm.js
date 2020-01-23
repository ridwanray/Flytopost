import React from 'react';
//import { Link } from 'react-router-dom';
import {useState} from 'react'
import SignupForm from './SignupForm'
import ModalLogin from './ModalLogin'

const LoginForm = (props) =>{
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () =>{
//         setShowModal(true);
//         console.log("openModal");
//     }
    
//  const closeModal = () =>{
//         setShowModal(false);
//         console.log('closeModal');
//     }
    return (
      
        <div className="form-center">
       
            <form className="form_field">
            <h3 className="signupLink">Login to Flytopost</h3>
              <input type="email" id="email" className="form_field_input" placeholder="Enter your email" name="email" />
              <input type="password" id="password" className="form_field_input" placeholder="Enter your password" name="password"  />
              <button className="login_button" type="button">login</button>
              <h3 className="signupLink">Don't have account?</h3>
              <a onClick={<SignupForm></SignupForm>} className="signupLink">Sign up</a>
              
            </form>
          </div>
        
        );
    }

  export default LoginForm;

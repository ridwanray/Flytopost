import React from 'react';
import Modal from 'react-modal';
//import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

//import './modal.scss';
import './login.scss';



const ModalLogin = (props) =>{

    return(

        <div>
        <Modal 
        isOpen = {props.showModal}
        onRequestClose={props.closeModal}
        contentLabel = "Modal-Login"
        closeTimeoutMS = {50}
        className="modal"
        ariaHideApp={false}
        >
        {props.showModal && <LoginForm></LoginForm>}
        </Modal>
        </div>

    );
}

export default ModalLogin;
import React from 'react'
import { useState } from 'react'
import ModalLogin from './ModalLogin'
import { Navbar } from 'react-bootstrap'
import ResponsiveMenu from 'react-responsive-navbar'


const Navigation = (props) => { 
const [showModal, setShowModal] = useState(false);

const openModal = () =>{
  setShowModal(true);
  }
    
const closeModal = () =>{
  setShowModal(false);
  }
const openLogin = ()=> {
  //let x = document.getElementById("nav_items");
    if (!setShowModal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }

return(
  


<nav className="navbar navbar-expand-md navbar-custom">

  <a className="navbar-brand" href="#">FLYTOPOST</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collaps">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="spacer"></div>
 
  <div className="collapse navbar-collapse" id="collaps">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">TRAVEL</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">POST</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">HOW IT WORKS</a>
      </li> 
      <li className="nav-item">
      <a className="nav-link" href="#" onClick={openModal}>LOGIN</a>
              <ModalLogin showModal = {showModal} closeModal={closeModal}/>
      </li> 
    </ul>
  </div> 
</nav>
);
}

export default Navigation;
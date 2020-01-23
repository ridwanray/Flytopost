import React from 'react'
import { useState } from 'react'
import ModalLogin from './ModalLogin'
import { Navbar } from 'react-bootstrap'
import ResponsiveMenu from 'react-responsive-navbar'



const Navigation = (props) =>{
const [showModal, setShowModal] = useState(false);

  const openModal = () =>{
        setShowModal(true);
        console.log("openModal");
    }
    
 const closeModal = () =>{
        setShowModal(false);
        console.log('closeModal');
    }
    const myFunction = ()=> {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
return(
    <div>
    <header  className="toolbar">
    <div className="toolbar_navigation">
    <div className="toolbar_logo"><a href="/">FLYTOPOST</a></div>
    <div className="spacer"></div>
    <ResponsiveMenu
        menuOpenButton={<div className="menu-icon"></div>}
        menuCloseButton={<div className="menu-icon"/>}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
            
            <div className="toolbar_navigation_items" >
                <ul >
                    <li><a href="/">TRAVEL</a></li>
                    <li><a href="/">POST</a></li>
                    <li><a href="/">HOW IT WORKS</a></li>
                    <li>
                        <a onClick={openModal}>LOGIN</a>
                        <ModalLogin showModal ={showModal} closeModal= {closeModal} 
                        />
                    </li>
                </ul>
            </div>
           
        }
        />
        </div>
    </header>
    </div>
  //   <div className="topnav" id="myTopnav">
  //   <a href="#home" className="active">FLYTOPOST</a>
  //   <div className="spacer"></div>
  //   <a href="#Travel">TRAVEL</a>
  //   <a href="#Post">POST</a>
  //   <a href="#Howitworks">HOW IT WORKS</a>
  //   <a onClick={openModal}>LOGIN</a> <ModalLogin showModal = {showModal} closeModal={closeModal} />
  //   <a href="javascript:void(0);" className="icon" onClick={myFunction}>
  //     <i className="fa fa-bars"></i>
  //   </a>
  // </div>

    );
}

export default Navigation;
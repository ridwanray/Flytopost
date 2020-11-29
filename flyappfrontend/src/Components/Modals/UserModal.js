import React from "react";
import LoginForm from "../Header/LoginForm";
import Modal from "react-modal";
// import "../../styles/base/_login.scss";
//import "../../styles/modal/_modal";

const UserModal = props => {
  return (
    <Modal
      isOpen={props.showModal}
      onRequestClose={props.closeModal}
      contentLabel="Login"
      closeTimeoutMS={200}
      class="modal"
      ariaHideApp={true}
    >
      {props.showModal && <LoginForm></LoginForm>}
    </Modal>
  );
};

export default UserModal;

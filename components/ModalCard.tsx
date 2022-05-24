import React,{useState} from 'react';
import Modal from 'react-modal'

const Modal = () => {
  

  return (
    <Modal 
      isOpen={true}
      contentLabel="Selected Todo"
      // onRequestClose={''}
    >
      <p>modal test</p>  
    </Modal> 
  );
};

export default Modal;
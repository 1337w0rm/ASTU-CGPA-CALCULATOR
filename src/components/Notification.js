import React from 'react'
import Modal from 'react-modal'
import '../styles/Modal.css'

const Notification = ({ modal, setModal, message }) => {

  const modalClose = () => {
    setModal(false)
  }

  return (
    <div className='modal-container'>
      <Modal className="Modal" overlayClassName="Overlay" isOpen={modal} ariaHideApp={false}>
        <h6 className='title'>{message}</h6>
        <button className="submit" onClick={modalClose}>Close</button>
      </Modal>
    </div>
  )
}

export default Notification
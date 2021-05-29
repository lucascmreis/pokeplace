
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'


import {Container } from './styles'



export function FinishModal({isOpen, onRequestClose}){

  
  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close" 
      >
        <img src={closeImg} alt="close" />
      </button>

      <Container >
        <h2>Voce ganhou</h2>


      </Container> 
    </Modal>
  )
}
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'

import {DetailsCard} from '../DetailsCard'

export function DetailsModal({isOpen, onRequestClose, pokemon}){  

  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      className="react-modal-content-details"
      overlayClassName="react-modal-overlay"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close" 
      >
        <img src={closeImg} alt="close" />
      </button>

    <DetailsCard pokemon={pokemon}/>

   
    </Modal>
  )
}
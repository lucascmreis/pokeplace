import Modal from 'react-modal'
import {useCart} from '../../hooks/useCart'
import {formatPrice} from '../../utils/formatPrice'
import closeImg from '../../assets/close.svg'


import {Container } from './styles'



export function FinishModal({isOpen, onRequestClose}){
  const {cashBack} = useCart()
  
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
        <h2>Parabéns!</h2>

        <div>
          <p>Você acaba de ganhar 15% de cashback</p>
          <p> {formatPrice(cashBack)} </p> 

          <p>Venha conhecer nossas outras lojas e ganhe até 30% de cashback na próxima compra</p>

        </div>

        <div>
          <ul>
            <li>FireShop</li>
            <li>GrassShop</li>
          </ul>
        </div>


      </Container> 
    </Modal>
  )
}
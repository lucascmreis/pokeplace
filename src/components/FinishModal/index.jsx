import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/formatPrice';

import closeImg from '../../assets/close.svg';
import waterImg from '../../assets/water.png';
import ghostImg from '../../assets/ghost.png';
import fireImg from '../../assets/fire.png';

import { Container, LinksWrapper } from './styles';

export function FinishModal({ isOpen, onRequestClose }) {
  const { cashBack } = useCart();

  return (
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

      <Container>
        <h2>Parabéns!</h2>

        <div>
          <p>Você acaba de ganhar 15% de cashback</p>
          <strong> Seu bônus é de {formatPrice(cashBack)} </strong>

        </div>

        <LinksWrapper>
          <h3>Venha conhecer nossas outras lojas</h3>
          <ul>
            <li>
              <Link to="/fireshop" onClick={onRequestClose}>
                <img src={fireImg} alt="Fireshop" />
                <span>Fireshop</span>
              </Link>
            </li>

            <li>
              <Link to="/aquashop" onClick={onRequestClose}>
                <img src={waterImg} alt="Aquashop" />
                <span>Aquashop</span>
              </Link>
            </li>

            <li>
              <Link to="/ghostshop" onClick={onRequestClose}>
                <img src={ghostImg} alt="Ghostshop" />
                <span>GhostShop</span>
              </Link>
            </li>

          </ul>
        </LinksWrapper>

      </Container>
    </Modal>
  );
}

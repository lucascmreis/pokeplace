import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdSearch } from 'react-icons/md';
import { useCart } from '../../hooks/useCart';
import waterLogo from '../../assets/water.png';

import {
  Container, Wrapper, Cart, InputWrapper,
} from './styles';

const Header = ({setSearch, toggle}) => {
  const {cart} = useCart();
  const cartSize = cart.length;

  return (

    <Container>
      <Wrapper>
        <Link to="/">
          <img src={waterLogo} alt="Pokeshop" />
          <h1>AquaShop</h1>
        </Link>

        <div>
        <InputWrapper>
          <input 
            type="text"
            placeholder="Digite aqui um Pokemon"
            onChange={ (e) => setSearch(e.target.value)}
          />
          <MdSearch size={32} color="#ccc" />

        </InputWrapper>

        <Cart onClick={toggle}>
          <div>
            <strong>Meu carrinho</strong>
            <span >
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
            </span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
        </div>
      
      </Wrapper>

    </Container>

  );
};

export default Header;

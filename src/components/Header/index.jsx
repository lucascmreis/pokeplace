import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdSearch } from 'react-icons/md';
import { useCart } from '../../hooks/useCart';

import {
  Container, Wrapper, Cart, InputWrapper,
} from './styles';

const Header = ({setSearch, toggle, pageProps}) => {
  const {cart} = useCart();
  const cartSize = cart.length;

  return (

    <Container>
      <Wrapper>
        <Link to="/">
          <img src={pageProps.image} alt="Pokeshop" />
          <h1> {pageProps.title} </h1>
        </Link>

        <Cart onClick={toggle}>
          <div>
            <strong>Meu carrinho</strong>

            <span className="mobile-cart">
              {cartSize}
            </span>

            <span className="cart" >
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
            </span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
       
      </Wrapper>

      <InputWrapper>
          <input 
            type="text"
            placeholder="Digite aqui um Pokemon"
            onChange={ (e) => setSearch(e.target.value)}
          />
          <MdSearch size={32} color="#ccc" />

      </InputWrapper>

    </Container>

  );
};

export default Header;

import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdSearch } from 'react-icons/md';

import waterLogo from '../../assets/water.png';

import {
  Container, Wrapper, Cart, InputWrapper,
} from './styles';

const Header = ({setSearch}) => {

  return (

    <Container>
      <Wrapper>
        <Link to="/">
          <img src={waterLogo} alt="Pokeshop" />
          <h1>AquaShop</h1>
        </Link>

        <InputWrapper>
          <input 
            type="text"
            placeholder="Digite aqui um Pokemon"
            onChange={ (e) => setSearch(e.target.value)}
          />
          <MdSearch size={32} color="#ccc" />

        </InputWrapper>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span >
  
            </span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Wrapper>

    </Container>

  );
};

export default Header;

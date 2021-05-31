import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, BackgroundWrapper, Content, LinksWrapper, LogoWrapper,
} from './styles';

import backgroundImg from '../../assets/background-home.jpg';
import logoImg from '../../assets/pokeplaceLogo.png';
import waterImg from '../../assets/water.png';
import ghostImg from '../../assets/ghost.png';
import fireImg from '../../assets/fire.png';
import githubImg from '../../assets/github.png';

function Home() {
  return (
    <Container>
      <BackgroundWrapper>
        <img src={backgroundImg} alt="pokeball grass background " />
      </BackgroundWrapper>

      <Content>
        <LogoWrapper>
          <img src={logoImg} alt="pokeplace" />
          <h2>Seu marketplace Pokémon</h2>

          <footer>
            <a href="https://github.com/lucascmreis">
              <img src={githubImg} alt="" />
              <small>@lucascmreis - {new Date().getFullYear()}</small>
            </a>
          </footer>
        </LogoWrapper>

        <LinksWrapper>
          <h3>Conheça nossas lojas especializadas</h3>

          <ul>
            <li>
              <Link to="/fireshop">
                <img src={fireImg} alt="Fireshop" />
                <span>Fireshop</span>
              </Link>
            </li>

            <li>
              <Link to="/aquashop">
                <img src={waterImg} alt="Aquashop" />
                <span>Aquashop</span>
              </Link>
            </li>

            <li>
              <Link to="/ghostshop">
                <img src={ghostImg} alt="Ghostshop" />
                <span>GhostShop</span>
              </Link>
            </li>

          </ul>
        </LinksWrapper>
      </Content>
    </Container>
  );
}

export default Home;

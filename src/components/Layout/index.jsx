import {useState} from 'react'
import Header from '../Header';
import { PokeCard } from '../PokeCard';
import { Container, ContentWrapper, ProductList } from './styles';


export function Layout({pokemon})  {
  const [catalogPokemon, setCatalogPokemon] = useState([])

  return (
    <>
      <Header  />
      <Container>
        <ContentWrapper>
          <ProductList>
            {pokemon.map((pokemon)=> {
              return(
                <li key={pokemon.name}>
                  <PokeCard pokemonList={pokemon} />
                </li>
              )
            })}
            <h1>lista</h1>
          </ProductList>
        </ContentWrapper>
      </Container>
    </>
  );
}

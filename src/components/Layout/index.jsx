import {useState, useEffect} from 'react'

import {api} from '../../services/api'
import Header from '../Header';
import { PokeCard } from '../PokeCard';
import { SideCart } from '../SideCart';

import { Container, ContentWrapper, ProductList } from './styles';


export function Layout({storeType, pageProps})  {

  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  const [catalogPokemon, setCatalogPokemon] = useState(() => {
    const storagedCart = localStorage.getItem(`@Pokeplace: list`)
    
    if (storagedCart) {
      return JSON.parse(storagedCart);
    }
      return [];
  })

  const toggle = () => setIsOpen(!isOpen)
  

  useEffect( () => {
    async function loadProducts() {
      setLoading(true)

      const response =  await api.get(`/type/${storeType}`)
      
      const pokemonList = response.data.pokemon.map((pokemon)=>{
      const pokemonName = pokemon.pokemon.name
      const pokemonUrl = pokemon.pokemon.url
      const price = pokemonName.length * 150
      const id = pokemon.pokemon.url.split("/", 7).slice(-1).toString()
      const image= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon.url
        .split("/", 7)
        .slice(-1)
        .toString()}.png`

       return(
         {
           id: id,
           name:pokemonName,
           url: pokemonUrl,
           price: price,
           image: image
           
         }
       )
       
      })

      setCatalogPokemon(pokemonList)
      setLoading(false)
      localStorage.setItem('@Pokeplace:list', JSON.stringify(pokemonList))
    
     }

      loadProducts();

  },[])

  useEffect(()=>{
    setFilteredPokemon(
      catalogPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  },[search, catalogPokemon])


  
  return (
    <>
      <Header setSearch={setSearch} toggle={toggle} pageProps={pageProps}  />
      <Container >
        <ContentWrapper isOpen={isOpen} >
          <ProductList>

            {loading ? <h1>loading...</h1> : filteredPokemon.map((pokemon)=> {
              return(
                <li key={pokemon.name}>
                  <PokeCard pokemonList={pokemon} />
                </li>
              )
            }) }
          
          </ProductList>
          <SideCart isOpen={isOpen} toggle={toggle}  />
        </ContentWrapper>
      </Container>
    </>
  );
}

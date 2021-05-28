import {useState, useEffect} from 'react'
import Header from '../Header';
import { PokeCard } from '../PokeCard';
import { Container, ContentWrapper, ProductList } from './styles';
import {api} from '../../services/api'

export function Layout({storeType})  {
  
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [filteredPokemon, setFilteredPokemon] = useState([])

  const [catalogPokemon, setCatalogPokemon] = useState(() => {
    const storagedCart = localStorage.getItem('@Pokeplace:list')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  })

  useEffect( () => {
    async function loadProducts() {
      setLoading(true)
      const response =  await api.get(`/type/${storeType}`)
      
      const pokemonList = response.data.pokemon.map((pokemon)=>{
      const pokemonName = pokemon.pokemon.name
      const pokemonUrl = pokemon.pokemon.url
      const price = pokemonName.length * 150
      
       return(
         {
           name:pokemonName,
           url: pokemonUrl,
           price: price,
           
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
      <Header setSearch={setSearch}  />
      <Container>
        <ContentWrapper>
          <ProductList>
            {loading ? <h1>loading...</h1> : filteredPokemon.map((pokemon)=> {
              return(
                <li key={pokemon.name}>
                  <PokeCard pokemonList={pokemon} />
                </li>
              )
            }) }
         
            
          </ProductList>
        </ContentWrapper>
      </Container>
    </>
  );
}

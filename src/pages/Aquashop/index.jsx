import {useState, useEffect} from 'react'
import { Layout } from '../../components/Layout';
import {api} from '../../services/api'

export default function AquaShop() {

  const storeType = 'water'
  /* const [pokemon, setPokemon] = useState([])


  useEffect( () => {
    async function loadProducts() {
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

      setPokemon(pokemonList)

     }

      loadProducts();
  },[])

 */
  return (

    <>
      <Layout storeType={storeType} />
    </>

  );
};


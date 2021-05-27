import { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { api } from '../../services/api';
import { Container } from './styles';
import {formatPrice} from '../../utils/formatPrice'


export function PokeCard({pokemonList}) {

  const [pokemonImage, setPokemonImage] = useState([])

  function handleAddProduct(id) {
    
  }

  useEffect(()=>{
    async function loadPokemonImage(){
      const response = await api.get(`${pokemonList.url}`)

      const imageUrl = response.data.sprites.front_default
     

      setPokemonImage(imageUrl)
      
    }

    loadPokemonImage()
  },[])

  return (
    <Container>
      <img src={pokemonImage} alt={pokemonList.name} />
      <strong> {pokemonList.name} </strong>
      <span> {formatPrice(pokemonList.price)} </span>
      <button
        type="button"
        onClick={() => handleAddProduct(pokemonList.name)}
      >
        <div>
          <MdAddShoppingCart size={16} color="#FFF" />
        </div>

        <span>Capturar</span>
      </button>
    </Container>
  );
}

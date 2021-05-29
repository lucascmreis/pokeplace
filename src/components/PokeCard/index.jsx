import { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { api } from '../../services/api';
import { Container } from './styles';
import {formatPrice} from '../../utils/formatPrice'
import { useCart } from '../../hooks/useCart';


export function PokeCard({pokemonList}) {

  const [pokemonImage, setPokemonImage] = useState([])
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = {...sumAmount}

    newSumAmount[product.name] = product.amount

    return newSumAmount
  }, {})


  function handleAddProduct(pokemon) {
    addProduct(pokemon)
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
        onClick={() => handleAddProduct(pokemonList)}
      >
        <div>
          <MdAddShoppingCart size={16} color="#FFF" />
          {cartItemsAmount[pokemonList.name] || 0}
        </div>

        <span>Capturar</span>
      </button>
    </Container>
  );
}

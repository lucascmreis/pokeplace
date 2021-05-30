import React, {
  createContext,
  useState,
  useContext,
} from 'react';

import { toast } from 'react-toastify';
 
const CartContext = createContext({});

export const CartProvider = ({ children, onOpenNewModal, onOpenDetailsModal }) => {
  const [pokemon, setPokemon] = useState([]);
  
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('@Pokeplace:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });


  const addProduct = async (pokemonList) => {
    try {
      const updateCart = [...cart];
      const productExists = updateCart.find(product => product.name === pokemonList.name)
      const currentAmount = productExists ? productExists.amount : 0

      
      const stockAmount = 3
      
      const newAmount = currentAmount + 1

      if(newAmount > stockAmount){
        toast.error('Quantidade solicitada fora de estoque')
        return
      }

      if(productExists){
        productExists.amount = newAmount
      } else{
      
        const newProduct = {
          ...pokemonList,
          amount: 1
        }

        updateCart.push(newProduct)
      }

      setCart(updateCart)
      localStorage.setItem('@Pokeplace:cart', JSON.stringify(updateCart))


    } catch {
      toast.error('Erro na adição do produto')
    }
  };

  const removeProduct = (pokemonName) => {
    try {
      const updatedCart = [...cart]

      const productIndex = updatedCart.findIndex(product => product.name===pokemonName)

      if(productIndex >=0 ) {
        updatedCart.splice(productIndex, 1)
        setCart(updatedCart)
        localStorage.setItem('@Pokeplace:cart', JSON.stringify(updatedCart))
      }else {
        throw Error()
      }

    } catch {
      toast.error('Erro na remoção do produto')
    }
  };

  const setEmptyCart = () =>{
    try{
      const emptyCart = []
      setCart(emptyCart)
      localStorage.setItem('@Pokeplace:cart', emptyCart)

    } catch{
      toast.error('Não foi possível esvaziar o carrinho')
    }
  }

  const updateProductAmount = async ({pokemonName, amount}) => {

    try {

      if(amount <=0 ){
        return
      }

      const stockAmount = 3

      if(amount > stockAmount){
        toast.error('Quantidade solicitada fora de estoque')
        return
      }
      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.name === pokemonName)

      if(productExists){
        productExists.amount = amount
        setCart(updatedCart)
        localStorage.setItem('@Pokeplace:cart', JSON.stringify(updatedCart))
      } else{
        throw Error()
      } 

    } catch {
      toast.error('Erro na adição do produto')
    }
  };

  
  const value = { 
    addProduct, 
    updateProductAmount, 
    removeProduct, 
    setEmptyCart,
    pokemon,
    cart, 
    onOpenNewModal,
    onOpenDetailsModal
  }


  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}


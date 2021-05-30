import React,{useState, useEffect} from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdClose
} from 'react-icons/md';
import {toast} from 'react-toastify'

import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/formatPrice';
import { Container, IconWrapper, ProductTable, Total } from './styles';

export const SideCart = ({isOpen, toggle}) =>{
  const { 
    cart, 
    removeProduct, 
    setEmptyCart,
    updateProductAmount, 
    setTotalCashBack,
    onOpenNewModal 
  } = useCart();

  const [cartFormatted, setCartFormatted] = useState([])
  const [total, setTotal] = useState([])

    function loadCart(){
      if(cart){
        const cartFormattedData = cart.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
          subTotal: formatPrice(product.price * product.amount)
        }))
      
        const totalPrice = cart.reduce((sumTotal, product) => {
          return sumTotal + product.price * product.amount
        }, 0)


          setCartFormatted(cartFormattedData)
          setTotal(totalPrice)
      }
    
    }

    function handleProductIncrement(product) {
      const productToIncrement = {
        pokemonName: product.name,
        amount: product.amount + 1
      }
      updateProductAmount(productToIncrement)
    }
      
    function handleProductDecrement(product) {
      const productToDecrement = {
        pokemonName: product.name,
        amount: product.amount - 1
      }
      updateProductAmount(productToDecrement)
    }
  
    function handleRemoveProduct(productName) {
      removeProduct(productName)
    }

    function handleFinishOrder(toggle, total){
      if(cartFormatted.length !== 0) {
        toggle()
        setTotalCashBack(total)
        onOpenNewModal()
        setEmptyCart()
       
      } else {
        toast.warning('Adicione produtos ao carrinho')
        toggle()
      }
      

    }

    useEffect(()=>{
      loadCart()
     
    },[cart])



  return (
    <Container isOpen={isOpen}  >
      <IconWrapper onClick={toggle} >
        <MdClose />
      </IconWrapper>
      
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          { cartFormatted.map(product => (
            <tr key={product.name}  data-testid="product">
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong> {product.name} </strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    data-testid="decrement-product"
                    disabled={product.amount <= 1}
                    onClick={() => handleProductDecrement(product)}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={product.amount}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                    onClick={() => handleProductIncrement(product)}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  data-testid="remove-product"
                onClick={() => handleRemoveProduct(product.name)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ) ) }
        </tbody>
      </ProductTable>

      <footer>
        <button 
          type="button"
          onClick={() => handleFinishOrder(toggle, total)}
        >
          Finalizar pedido
        </button>
        <Total>
          <span>TOTAL</span>
          <strong>{ formatPrice(total)}</strong>
        </Total>
      </footer> 
    
    </Container>
  )
}
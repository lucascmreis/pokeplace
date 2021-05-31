import { MdAddShoppingCart, MdInfoOutline } from 'react-icons/md';
import { Container, InfoIconWrapper } from './styles';
import { formatPrice } from '../../utils/formatPrice';
import { useCart } from '../../hooks/useCart';

export function PokeCard({ pokemonList }) {
  const { addProduct, cart, onOpenDetailsModal } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount };

    newSumAmount[product.name] = product.amount;

    return newSumAmount;
  }, {});

  function handleAddProduct(pokemon) {
    addProduct(pokemon);
  }

  function handleOnOpenModal(pokemonName) {
    onOpenDetailsModal(pokemonName);
  }

  return (
    <Container>
      <InfoIconWrapper onClick={() => handleOnOpenModal(pokemonList.name)}>
        <MdInfoOutline size={24} />
      </InfoIconWrapper>

      <img src={pokemonList.image} alt={pokemonList.name} />
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

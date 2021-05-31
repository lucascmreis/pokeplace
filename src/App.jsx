import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal';

import { ToastContainer } from 'react-toastify';
import { CartProvider } from './hooks/useCart';
import { api } from './services/api';
import Routes from './routes';
import { FinishModal } from './components/FinishModal';
import { DetailsModal } from './components/DetailsModal';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  function handleOpenNewModal() {
    setIsNewModalOpen(true);
  }

  function handleCloseNewModal() {
    setIsNewModalOpen(false);
  }

  async function handleOpenDetailsModal(pokemon) {
    const response = await api.get(`/pokemon/${pokemon}`);

    const { id } = response.data;
    const { abilities } = response.data;
    const { height } = response.data;
    const { weight } = response.data;
    const { types } = response.data;
    const imageUrl = response.data.sprites.front_default;

    const newPokemonDetails = {
      name: pokemon,
      id,
      abilities,
      height,
      weight,
      types,
      imageUrl,
    };

    setPokemon(newPokemonDetails);
    setIsDetailsModalOpen(true);
  }

  function handleCloseDetailsModal() {
    setPokemon('');
    setIsDetailsModalOpen(false);
  }

  return (
    <BrowserRouter>
      <CartProvider
        onOpenNewModal={handleOpenNewModal}
        onOpenDetailsModal={handleOpenDetailsModal}
      >
        <GlobalStyle />
        <Routes />

        <FinishModal
          isOpen={isNewModalOpen}
          onRequestClose={handleCloseNewModal}
        />

        <DetailsModal
          isOpen={isDetailsModalOpen}
          onRequestClose={handleCloseDetailsModal}
          pokemon={pokemon}
        />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

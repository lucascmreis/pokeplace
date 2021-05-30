import { BrowserRouter } from 'react-router-dom';
import {useState} from 'react'
import Modal from 'react-modal'
import { CartProvider } from './hooks/useCart';
import { ToastContainer } from 'react-toastify';
import {GlobalStyle} from './styles/global'
import Routes from './routes'
import {FinishModal} from './components/FinishModal'
import {DetailsModal} from './components/DetailsModal'
import { api } from './services/api'

Modal.setAppElement('#root')

function App() {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [pokemonDetails, setPokemonDetails] = useState([])

  function handleOpenNewModal(){
    setIsNewModalOpen(true)
  }

  function handleCloseNewModal(){
    setIsNewModalOpen(false)
  }

  async function handleOpenDetailsModal(pokemonName) {
    const response = await api.get(`/pokemon/${pokemonName}`)

    const id = response.data.id
    const abilities = response.data.abilities
    const height = response.data.height
    const weight = response.data.weight
    const types = response.data.types
    const imageUrl = response.data.sprites.front_default

    const newPokemonDetails = {
      name: pokemonName,
      id,
      abilities,
      height,
      weight,
      types,
      imageUrl
    }
    setPokemonDetails(newPokemonDetails)
    

    setIsDetailsModalOpen(true)
     
  }

  function handleCloseDetailsModal(){
    setIsDetailsModalOpen(false)
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
          pokemonDetails ={pokemonDetails}
        />
        <ToastContainer autoClose={3000}/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import {useState} from 'react'
import Modal from 'react-modal'
import { CartProvider } from './hooks/useCart';
import { ToastContainer } from 'react-toastify';
import {GlobalStyle} from './styles/global'
import Routes from './routes'
import {FinishModal} from './components/FinishModal'

Modal.setAppElement('#root')

function App() {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false)

  function handleOpenNewModal(){
    setIsNewModalOpen(true)
  }

  function handleCloseNewModal(){
    setIsNewModalOpen(false)
  }

  return (
    <BrowserRouter>
      <CartProvider onOpenNewModal={handleOpenNewModal} >
        <GlobalStyle />
        <Routes /> 
        <FinishModal
          isOpen={isNewModalOpen}
          onRequestClose={handleCloseNewModal}
        />
        <ToastContainer autoClose={3000}/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';
import { ToastContainer } from 'react-toastify';
import {GlobalStyle} from './styles/global'
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyle />
        <Routes /> 
        <ToastContainer autoClose={3000}/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

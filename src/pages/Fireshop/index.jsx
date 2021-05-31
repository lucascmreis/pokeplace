import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { useCart } from '../../hooks/useCart';
import fireTheme from '../../styles/themes/fireTheme';
import fireImg from '../../assets/fire.png';

export default function FireShop() {
  const { setLocalStorageCartStoreName } = useCart();
  const storeType = 'fire';
  const pageProps = {
    title: 'FireShop',
    image: fireImg,
  };

  useEffect(() => {
    setLocalStorageCartStoreName(storeType);
  }, []);

  return (
    <>
      <ThemeProvider theme={fireTheme}>
        <Layout storeType={storeType} pageProps={pageProps} />
      </ThemeProvider>
    </>
  );
}

import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { useCart } from '../../hooks/useCart';

import ghostTheme from '../../styles/themes/ghostTheme';
import ghostImg from '../../assets/ghost.png';

export default function GhostShop() {
  const { setLocalStorageCartStoreName } = useCart();
  const storeType = 'ghost';
  const pageProps = {
    title: 'ghostShop',
    image: ghostImg,
  };
  useEffect(() => {
    setLocalStorageCartStoreName(storeType);
  }, []);

  return (
    <>
      <ThemeProvider theme={ghostTheme}>
        <Layout storeType={storeType} pageProps={pageProps} />
      </ThemeProvider>
    </>
  );
}

import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { useCart } from '../../hooks/useCart';

import waterTheme from '../../styles/themes/waterTheme';
import waterImg from '../../assets/water.png';

export default function AquaShop() {
  const { setLocalStorageCartStoreName } = useCart();
  const storeType = 'water';
  const pageProps = {
    title: 'AquaShop',
    image: waterImg,
  };

  useEffect(() => {
    setLocalStorageCartStoreName(storeType);
  }, []);

  return (
    <>
      <ThemeProvider theme={waterTheme}>
        <Layout storeType={storeType} pageProps={pageProps} />
      </ThemeProvider>
    </>
  );
}

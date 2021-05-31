import { Layout } from '../../components/Layout';

import {ThemeProvider} from 'styled-components'
import fireTheme from '../../styles/themes/waterTheme'
import fireImg from '../../assets/fire.png'

export default function FireShop() {
  const storeType = 'fire'
  const pageProps = {
    title: 'FireShop',
    image: fireImg
  }
  
  return (

    <>
      <ThemeProvider theme={fireTheme} >
       <Layout storeType={storeType} pageProps={pageProps} />
      </ThemeProvider>
    </>

  );
};


import { Layout } from '../../components/Layout';

import {ThemeProvider} from 'styled-components'
import ghostTheme from '../../styles/themes/waterTheme'
import ghostImg from '../../assets/ghost.png'

export default function GhostShop() {
  const storeType = 'ghost'
  const pageProps = {
    title: 'ghostShop',
    image: ghostImg
  }
  
  return (

    <>
      <ThemeProvider theme={ghostTheme} >
       <Layout storeType={storeType} pageProps={pageProps} />
      </ThemeProvider>
    </>

  );
};


import { Layout } from '../../components/Layout';

import {ThemeProvider} from 'styled-components'
import  waterTheme from '../../styles/themes/waterTheme'
import waterImg from '../../assets/water.png'

export default function AquaShop() {
  const storeType = 'water'
  const pageProps = {
    title: 'AquaShop',
    image: waterImg
  }

  return (

    <>
      <ThemeProvider theme={waterTheme} >
       <Layout storeType={storeType} pageProps={pageProps} />
      </ThemeProvider>
    </>

  );
};


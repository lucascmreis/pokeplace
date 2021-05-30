import { Layout } from '../../components/Layout';

import {ThemeProvider} from 'styled-components'
import  waterTheme from '../../styles/themes/waterTheme'

export default function AquaShop() {
  const storeType = 'water'
  
  return (

    <>
      <ThemeProvider theme={waterTheme} >
       <Layout storeType={storeType} />
      </ThemeProvider>
    </>

  );
};


import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ContentWrapper = styled.div`
  display: flex;
  max-width: 1024px;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  transition: all 0.2s;
 
  
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  padding: 1rem 3rem;
  height: 100vh;
  overflow: auto;


  li {
    max-height: 340px;
    
    
  }

  @media screen and (max-width: 920px){
    grid-template-columns: repeat(2, 1fr);
    li{
      min-width: 280px;
    }
  }
  @media screen and (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);

  }

`;

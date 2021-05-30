import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.font.fontFamily };


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

::-webkit-scrollbar {
 width: 12px;
 height: 13px;
}
::-webkit-scrollbar-thumb {
 background: ${props => props.theme.colors.secondary};
 border-radius: 9px;
}
::-webkit-scrollbar-thumb:hover{
 background:  ${props => props.theme.colors.primary};
}
::-webkit-scrollbar-track{
 background: #ffffff;
 border-radius: 0px;
 box-shadow: inset 7px 10px 12px #f0f0f0;
}


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

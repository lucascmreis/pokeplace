import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;


`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  max-width: 1024px;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
  }
`;

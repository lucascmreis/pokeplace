import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`

  background: var(--header-background);

`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem 2rem 3rem ;

  a {
    display: flex;
    align-items: center;
    transition: opacity 0.2s;

    h1{
      color: var(--text-title);
      margin-left: 1rem;
    }

    &:hover {
      opacity: 0.7;
    }
  }


`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

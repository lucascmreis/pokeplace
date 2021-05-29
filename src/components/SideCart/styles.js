import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 50%;
  height: 100% ;
  background: #fff;
  display: grid;
  align-items: center;
  padding: 2rem;
  top: 0;
  opacity:  ${({isOpen}) => (isOpen ?  '100%' : '0')};
  right: ${({isOpen}) => isOpen ? '0' : '-100%'};
  transition: 0.3s ease-in-out;
  box-shadow: -5px 5px 21px -4px rgba(0,0,0,0.46);
    -webkit-box-shadow: -5px 5px 21px -4px rgba(0,0,0,0.46);
    -moz-box-shadow: -5px 5px 21px -4px rgba(0,0,0,0.46);
  
  @media screen and (max-width: 768px){
    width: 100%;
    height: 100vh;
  }



  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
      background: var(--button);
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }
    }
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor:pointer;

  transition: all 0.2s ease-in-out;
  &:hover{
    color: var(--blue-light);
  }
`

export const ProductTable = styled.table`
  width: 100%;
  margin-top: 1rem;
 
  thead{
    display: flex;
    flex: 1;
    align-items: center;
   
  }

  tbody{
  display: block;
  overflow-y: scroll;
  height: 50vh;
  }

  thead th {
    flex:1;
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 64px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #7159c1;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#7159c1')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#7159c1')};
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

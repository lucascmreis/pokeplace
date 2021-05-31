import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 80%;
  max-width: 720px ;
  height: 100% ;
  background: #fff;
  display: grid;
  align-items: center;
  padding: 2rem;
  top: 0;
  opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transition: 0.3s ease-in-out;
  box-shadow: -5px 5px 21px -4px rgba(0,0,0,0.46);
    -webkit-box-shadow: -5px 5px 21px -4px rgba(0,0,0,0.46);
    -moz-box-shadow: -5px 5px 21px -4px rgba(0,0,0,0.46);


  @media screen and (min-width: 1024px){
  width: 60%;

  }

  @media screen and (max-width: 920px){
    width: 100%;
    height: 100%;
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;


    button {
      background: ${(props) => props.theme.colors.button};
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 1rem 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: ${(props) => props.theme.colors.buttonSecondary};
        transform: scale(1.02);
      }
    }

    @media screen and (max-width: 9208px){
      flex-direction: column-reverse;
      justify-content: center;
      margin-bottom: 1rem;

      button{
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 100%;
      }
    }
  }

`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 3rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor:pointer;
  color: ${(props) => props.theme.colors.primary};

  transition: all 0.2s ease-in-out;
  &:hover{
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ProductTable = styled.table`
  display: flex ;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;



  thead{
    display: block;
    justify-content: space-between;
    align-items: center;

  }

  tbody{
    display: block;
    width: 100%;
    margin: 0 auto;
    overflow-y: scroll;
    height: 50vh;



    ::-webkit-scrollbar {
      width: 12px;
      height: 13px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.secondary};
      border-radius: 9px;
    }
    ::-webkit-scrollbar-thumb:hover{
      background:  ${(props) => props.theme.colors.primary};
    }
    ::-webkit-scrollbar-track{
      background: #ffffff;
      border-radius: 0px;
      box-shadow: inset 7px 10px 12px #f0f0f0;
    }
  }

  thead th {

    color: #999;
    text-align: left;
    padding: 1rem 2rem;

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
      color: ${(props) => props.theme.colors.button};
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${(props) => props.theme.colors.buttonSecondary};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#7159c1')};
        cursor: not-allowed;
      }
    }
  }

  @media screen and (max-width: 600px) {

    thead{
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 3px solid #ccc;
      display: block;
      margin-bottom: .625em;

    }

    tbody td {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .8em;
      text-align: right;

     & > strong{
        font-size: 1.5em;
      }

    }

     td::before {
      /*
      * aria-label has no advantage, it won't be read inside a table
      content: attr(aria-label);
      */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    td:first-child {
      border-bottom: 0;
      justify-content: center;

    }

    td:nth-child(2)  {
      text-transform: uppercase;
      display: block;
      align-items: center;
      justify-items: center;

      strong{
        text-align: left;
        align-items: center;

      }

    }

     td:last-child {
      border-bottom: 0;
      justify-content: center;
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
    color: ${(props) => props.theme.colors.secondary};
    font-size: 28px;
    margin-left: 5px;
  }

`;

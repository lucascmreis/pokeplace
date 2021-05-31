import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.backgroundHeader};
  font-family: ${(props) => props.theme.font.fontFamily};
  display: block;
  justify-content: center;
  align-items: center;
  margin: 0 auto;



`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem 2rem 0;

  a {
    display: flex;
    align-items: center;
    transition: opacity 0.2s;
    margin-left: 2rem;

    h1{
      color: ${(props) => props.theme.colors.textTitleLight};
      margin-left: 1rem;
      margin-right: 1rem;

    }
    img{
      width: 20%;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  @media screen and (max-width:475px){
    h1{
      font-size: 1.5rem;
    }

  }

  @media screen and (max-width:375px){
    h1{
      font-size: 1.2rem;
    }

  }

`;

export const InputWrapper = styled.div`
  display: flex;
  margin: 1rem auto;
  align-items: center;
  justify-items: center;
  max-width: 1024px;
  padding: 1.5rem 3rem ;


  input{
    border: 0;
    border-bottom: 1px solid black;
    width: 100%;
    padding: 0 20px;
    height: 50px;
    margin-right: 1rem;
    border-radius: 5px;
  }


`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin-right: 2rem;

  div {
    text-align: right;
    margin-right: 0.6rem;

    strong {
      display: block;
      color: #fff;

      @media screen and (max-width:768px){
      display:none;

      }
    }

    span  {
      font-size: 1rem;
      color: #ccc;
    }

    .mobile-cart{
     visibility: hidden;
    }

  }

  @media screen and (max-width:475px){
    flex-direction: row-reverse;
    margin-right: 2rem;

    div{
      position: relative;
    }

    span.mobile-cart{
      visibility: visible;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.secondary};
      width: 1.2rem ;
      height: 1.2rem ;
      margin-left: -10px;
      color: ${(props) => props.theme.colors.shape};
      font-size: 0.8rem;
      font-weight: 600;

    }

    .cart{
      display: none;
    }






  }

`;

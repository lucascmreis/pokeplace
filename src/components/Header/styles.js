import styled from 'styled-components';


export const Container = styled.header`
  background: ${props => props.theme.colors.backgroundHeader};
  font-family: ${props => props.theme.font.fontFamily };

`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  justify-items: center;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem 2rem 3rem ;



  a {
    display: flex;
    align-items: center;
    transition: opacity 0.2s;

    h1{
      color: ${props => props.theme.colors.textTitleLight};
      margin-left: 1rem;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  div{
    display: flex;
  }

  @media screen and (max-width:768px){
      grid-template-columns: 1fr;

      a{
        margin-bottom: 2rem;
      }
  }

`;

export const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0 5rem;
  align-items: center;
 

  

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

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;

      @media screen and (max-width:768px){
      display:none;
    
      }
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }


`;

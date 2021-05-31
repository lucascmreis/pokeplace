import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;


  h2{
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  ul{
    list-style: none;
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
  }

`;

export const ImageWrapper = styled.div`
  display: flex;
  padding: 1rem;
  width: 60%;
  max-width: 320px;
  justify-content: center;
  align-items: center;

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-width: max-content;
    padding: 1rem;
    background: var(--shape);
    box-shadow: 1px 4px 8px 2px rgba(0,0,0,0.2) ;

    img{
      width:80%;

    }

    h3{
      color: var(--text-body);
      font-size: 1.5rem;
      padding: 1rem 0;
    }

  }

`;

export const ContentWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: baseline;
 padding: 2rem;
 flex-direction: column;

 div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 4rem;

 }


  h3{
    color: var(--primary-color);
    font-size: 1.5rem;

  }

  p{
    color: var(--text-body);
    font-size: 1rem;
  }

  @media screen and (max-width: 768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
    h3{
      font-size: 1rem;
    }
    p{
      font-size: 0.8rem;
    }
  }

`;

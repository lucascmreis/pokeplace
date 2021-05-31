import styled from 'styled-components'

export const Container = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 60% 40%) ;
  
  h2{
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  ul{
    list-style: none;
  }
  
`

export const ImageWrapper = styled.div`
  display: flex;
  padding: 1rem;

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 320px;
    background: var(--shape);
    box-shadow: 1px 4px 8px 2px rgba(0,0,0,0.2) ;
    
    

    img{
      width: 80%;
    }

    h3{
      color: var(--text-body);
      font-size: 1.5rem;
      padding: 1rem 0;
    }

  }
  
`

export const ContentWrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 justify-content: center;
 align-items: center;
 padding: 2rem;


  h3{
    color: var(--primary-color);
    font-size: 1.5rem;
    padding: 1rem 0;
  }

  p{
    color: var(--text-body);
    font-size: 1rem;
  }

`



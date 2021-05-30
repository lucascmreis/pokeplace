import styled from 'styled-components'
import {darken, transparentize} from 'polished'

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
    background: rgb(51,147,221);
    background: linear-gradient(180deg, 
      rgba(51,147,221,1) 46%, 
      rgba(51,  147,221,0.06235997817095584) 86%);
    
    

    img{
      width: 100%;
    }

    h3{
      color: var(--blue-light);
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
`



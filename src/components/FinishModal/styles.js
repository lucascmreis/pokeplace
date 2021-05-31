import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    color: var(--green) ;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    p{
      font-size: 1.2rem;
      text-align: center;
      padding: 0.5rem;
    }

    strong{
      color:var(--green);
      padding: 1rem;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }


  }

`

export const LinksWrapper = styled.div`
  display: flex;
  width: 100%;


  h3{
    padding: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  ul{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    list-style: none;
  }

  li{
    transition: 0.2s ease-in-out;

    a{
      display: flex;
      flex-direction: column;
      padding: 0.4rem;
      justify-content: center;
      align-items: center;

      img{
        width: 4rem;
        margin-bottom: 0.5rem;
      }

      span{
        font-weight: 600;
        
      }
    }

    &:hover{
      opacity: 0.9;
      transform: scale(1.02);
    }
  }

`




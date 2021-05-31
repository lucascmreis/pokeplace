import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background:#f6f4f5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    height: 100vh;
    ::before {
      content: '';
      position:absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.4) 100%
        ), linear-gradient(
            180deg, rgba(0, 0, 0, 0.5) 0%, transparent 100%
            );
      z-index: 2;
    }
`;

export const BackgroundWrapper = styled.div`

  display: flex;

 img{
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    object-fit: cover;
    -o-object-fit: cover;
    overflow: hidden;
    z-index: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width:80vw;
  width:100%;
  height:100%;
  position: absolute;
  padding: 8px 24px;

  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: #f6f4f5;
  z-index:3;


  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

`;
export const LogoWrapper = styled.div`

  height: 80%;
  justify-content: center;
  align-items: center;

  img{
    width: 24rem;
    -webkit-filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
    -moz-filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
    -ms-filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
    -o-filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
    filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
  }

  h2{
    font-weight: 300;
    font-size: 2rem;
    padding: 0.5rem;
    color: var(--yellow);


    -webkit-filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
    -moz-filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
    -ms-filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
    -o-filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
    filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
  }

  footer{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35%;
      margin: 0 auto;


    a{
      display: flex;
      justify-items: center;
      align-items: center;

      width: 100%;
      padding: 1rem;
      margin: 0 auto;

      img{
      width: 15%;
      margin-right: 0.5rem;
      }
    }

    &:hover{
      color: ${darken(0.25, '#fff')}
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;
    h2{
      font-size:1.5rem;
    }
    img{
      width: 18rem;
    }
  }

  @media screen and (max-width: 480px) {
    h2{
      font-size:1.2rem;
    }
    img{
      width: 16rem;
    }
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;


  h3{
    font-size: 1.2rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 300;
    width: 80%;
    text-align: center;
  }

  ul{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    list-style: none;
  }

  li{
    padding: 1.2rem;
    transition: 0.2s ease-in-out;

    a{
      display: flex;
      flex-direction: column;
      padding: 0.4rem;
      justify-content: center;
      align-items: center;



      img{
        width: 5.5rem;
        margin-bottom: 0.5rem;
        border: 2px solid #fff;
        border-radius: 50%;
        transition: all 0.1s ease-in-out ;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);

        &:hover{
          box-shadow: 0 14px 28px rgba(0,0,0,0.32), 0 10px 10px rgba(0,0,0,0.24);
        }
      }

      span{
        font-weight: 600;
        font-size: 1.2rem;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        -webkit-filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
        -moz-filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
        -ms-filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
        -o-filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
        filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));


        &:hover{
          box-shadow: 0 14px 28px rgba(0,0,0,0.32), 0 10px 10px rgba(0,0,0,0.22);

        }
      }
    }

    &:hover{
      transform: translateY(2px) scale(1.04);
    }
  }

  @media screen and (max-width: 768px) {
      li{
        a{
          img{
          width: 4rem;
         }

         span{
          font-weight: 400;
         }
        }
      }

  }

  @media screen and (max-width: 480px) {

    li{
      padding: 1rem;
    }
  }

`;

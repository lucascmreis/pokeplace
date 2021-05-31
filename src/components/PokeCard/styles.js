import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 1.5rem;

    transition: all 0.1s ease-in-out ;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover{
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }


  img {
    align-self: center;
    max-width: 320px;
  }

  > strong {
    font-size: 1.5rem;
    line-height: 20px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
    color: ${(props) => props.theme.colors.secondary};
  }

  button {
    background: ${(props) => props.theme.colors.buttonSecondary};
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;
    transition:  0.3s;



    &:hover {
     filter: brightness(1.15) ;
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: ${(props) => props.theme.colors.button};

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 475px){
    width:80%;
  }

  @media screen and (max-width: 320px){
    width:70%;
    padding: 1.5rem;
  }

`;

export const InfoIconWrapper = styled.div`
display: flex;
margin-bottom: 1rem;
justify-content: flex-end;
cursor: pointer;
color: ${(props) => props.theme.colors.secondary};

transition: all 0.2s ease-in-out;
&:hover{

  filter: brightness(0.5)
}
`;

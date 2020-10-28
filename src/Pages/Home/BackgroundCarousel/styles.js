import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {keyframes} from 'styled-components'

export const Div = styled.div `
    width: 100%;
    height: 100%;
    margin: 0;
`

export const CarouselDiv = styled.div `
    width: 70%;
    position: relative;
`

const animate = keyframes`
  from {
    font-size: 120px;
  }

  to {
    font-size: 85px;
  }

  @media only screen and (max-width: 500px) {
      from {
          font-size: 50px;
      }

      t0 {
          font-size: 35px;
      }
  }

  @media only screen and (min-width: 501px) and (max-width: 900px) {
      from {
          font-size: 75px;
      }

      t0 {
          font-size: 50px;
      }
  }
`;

export const H1 = styled.h1 `
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${animate} 3s linear;
    font-size: 85px;
    text-align: center;
    color: white;
    opacity: 0.2;
    font-family: ${props => props.theme.fontFamily.Lato};
    font-weight: 200;

    @media only screen and (max-width: 500px) {
        font-size: 30px;
        top: 25%;
    }

    @media only screen and (min-width: 501px) and (max-width: 900px) {
        font-size: 50px;
        top: 25%;
    }
`

export const H2 = styled.h2 `
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 66px;
    text-align: center;
    color: white;
    font-family: ${props => props.theme.fontFamily.Montserrat};
    font-weight: 800;

    @media only screen and (max-width: 500px) {
        font-size: 20px;
        top: 15%;
    }

    @media only screen and (min-width: 501px ) and (max-width: 900px) {
        font-size: 35px;
        top: 15%;
    }
`

export const Img = styled.img `
    width: 100%;
    display: block;
    filter: brightness(60%);
`

export const Button = styled(Link) `
    text-decoration: none;
    position: absolute;
    color: white;
    font-family: ${props => props.theme.fontFamily.Montserrat};
    font-weight: 300;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.color}; 
    font-weight: 800;
    border: none;
    padding: 12px 27px;
    line-height: 27px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.backgroundColor.white}; 
        color: ${props => props.theme.color.darkCharcoal};
    };

    @media only screen and (max-width: 500px) {
        font-size: 10px;
        padding: 5px 10px;
        top: 75%;
    }

    @media only screen and (min-width: 500px) and (max-width: 900px) {
        font-size: 15px;
        padding: 12px 27px;
        top: 60%;
    }
`
    
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div `
    flex: 25%;
    margin: 50px 10px;
    font-family: ${props => props.theme.fontFamily.Montserrat};

    @media only screen and (max-width: 500px) {
        margin: 30px;
    }
`

export const CheckOut = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,0.1);
    font-family: ${props => props.theme.fontFamily.Montserrat}
`
export const Button = styled(Link) `
    text-decoration: none;
    color: ${props => (props.theme.color.white)};
    background-color: ${props => (props.color)};
    font-size: ${props => (props.theme.fontSize.xxxsmall)};
    line-height: ${props => (props.theme.lineHeight.medium)};
    letter-spacing: ${props => (props.theme.letterSpacing.small)};
    font-weight: ${props => (props.theme.fontWeight.mediumBold)};
    font-family: ${props => (props.theme.fontFamily.Montserrat)};
    border: 2px solid ${props => (props.color)};
    text-align: center;
    padding: 12px 24px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    width: 100px;
    margin: 20px;
    &:hover {
        color: ${props => (props.theme.color.darkCharcoal)};
    background-color: ${props => (props.theme.backgroundColor.white)};
    }
`
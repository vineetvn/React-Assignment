import { Link } from 'react-router-dom'
import styled from 'styled-components'

import background from '../../../Assets/Images/shopImage.jpg'

export const Div = styled.div `
    width: 100%;
    height: 350px;
    text-align: center;
    background: url('${background}');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    position: relative;
`

export const Strong = styled.strong `
    display: block;
    color: ${props => (props.theme.color.white)};
    font-size: ${props => (props.theme.fontSize.seasonSale)};
    line-height: ${props => (props.theme.lineHeight.seasonSale)};
    font-weight: ${props => (props.theme.fontWeight.bold)};
    font-family: ${props => (props.theme.fontFamily.Montserrat)};
    text-align: center;
    padding: 100px 0px 25px 0;

    @media only screen and (max-width: 500px) {
        font-size: ${props => (props.theme.fontSize.large)};
        padding-bottom: 15px;
    }
`

export const Span = styled.span `
    display: block;
    color: ${props => (props.theme.color.white)};
    opacity: 0.8;
    font-size: ${props => (props.theme.fontSize.xlarge)};
    line-height: ${props => (props.theme.lineHeight.h2)};
    font-weight: ${props => (props.theme.fontWeight.light)};
    font-family: ${props => (props.theme.fontFamily.Lato)};
    letter-spacing: ${props => (props.theme.letterSpacing.xsmall)};
    text-align: center;
    padding-bottom: 50px;
`

export const StyledButton = styled(Link)`
    text-decoration: none;
    color: ${props => (props.theme.color.white)};
    background-color: ${props => (props.color)};
    font-size: ${props => (props.theme.fontSize.xxxsmall)};
    line-height: ${props => (props.theme.lineHeight.medium)};
    letter-spacing: ${props => (props.theme.letterSpacing.small)};
    font-weight: ${props => (props.theme.fontWeight.mediumBold)};
    font-family: ${props => (props.theme.fontFamily.Montserrat)};
    padding: 12px 24px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    width: 150px;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover {
        color: ${props => (props.theme.color.darkCharcoal)};
    background-color: ${props => (props.theme.backgroundColor.white)};
    }
`;
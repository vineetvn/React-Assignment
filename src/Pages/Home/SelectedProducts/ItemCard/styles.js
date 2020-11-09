import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai'

export const Li = styled.li `
    display: flex;
    width: 100%;

    @media only screen and (max-width: 900px) {
        width: 75%;
    }
    
`
export const Star = styled(AiFillStar) `
    color: #ffbf00;
    font-size: 20px;

    @media only screen and (max-width: 350px) {
        font-size: 14px;
    }
`
export const Img = styled.img `
    flex: 0.3;
    width: 80px;
    height: 80px;
    border: 1px solid ${props => props.theme.color.gray};
    margin: 10px;
    @media only screen and (max-width: 900px) {
        display: block;
        width: 80px;
        height: 100px;
    }
`

export const Div = styled.div `
    flex: 0.7;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        width: 60%;
    }
`

export const A = styled(Link) `
    text-decoration: none;
    font-family: ${props => props.theme.fontFamily.Montserrat};
    color: ${props => props.theme.color.gray};
    font-size: ${props => props.theme.fontSize.small};
    line-height: ${props => props.theme.lineHeight.normal};
    letter-spacing: ${props => props.theme.letterSpacing.xsmall};
    font-weight: ${props => props.theme.fontWeight.mediumBold};
`


import styled from 'styled-components';
import {HiShoppingCart} from 'react-icons/hi'

export const Div = styled.div `
    margin: 15px;
    display: flex;
    flex-direction: column;
    height: 320px;
    width: 250px;
    border: 1px solid ${props => props.theme.color.silverGrey};
    font-family: ${props => props.theme.fontFamily.Montserrat};
    box-sizing: border-box;
    text-align: center;
    position: relative;

    @media only screen and (max-width: 1000px) {
        height: 320px;
        width: 180px;
    } 

    @media only screen and (max-width: 685px) {
        height: 300px;
        width: 70%;
        margin: 15px auto;
    } 

    @media only screen and (max-width: 450px) {
        height: 300px;
        width: 90%;
        margin: 15px auto;
    }
`

export const ShoppingCart = styled(HiShoppingCart) `
    color: white;
    background-color: black;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 190px;
`
export const Img = styled.img `
    height: 225px;
    width: 100%;
    display: block;
`

export const ImageDetails = styled.div `
    height: 50px;
    box-sizing: border-box;
    font-family: ${props => props.theme.fontFamily.Montserrat}
`

export const H4 = styled.h4 `
    margin: 15px;
    text-align: center;
    box-sizing: border-box;
`

export const Price = styled.span `
    margin: 15px;
    text-align: center;
    box-sizing: border-box;
    margin-left: 5px;
`

export const OfferPrice = styled.span `
    margin: 15px;
    text-decoration: line-through;
    text-align: center;
    box-sizing: border-box;
`
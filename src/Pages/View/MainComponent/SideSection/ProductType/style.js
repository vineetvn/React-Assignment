import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Div = styled.div `
    flex:25%auto;
    margin: 130px 50px 0 50px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: ${props => props.theme.color.silverGrey};
    color: ${props => props.theme.color.darkCharcoal};
    font-size: ${props => props.theme.fontSize.productName};
    font-family: ${props => props.theme.fontFamily.Montserrat};
    padding: 30px 10px 10px 10px;

    @media only screen and (max-width: 1000px) {
        margin: 25px;
        flex: 25%;

    }
`

export const StyledLink = styled(Link) `
    text-decoration: none;
    color: ${props => props.theme.color.red};
    font-weight: ${props => props.theme.fontWeight.bold};
    padding-bottom: 20px;
`
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

export const H3 = styled.h3 `
    font-family: ${props => props.theme.fontFamily.Montserrat};
`
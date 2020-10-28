import styled from 'styled-components';

export const Div = styled.div `
    width: 50%;
    height: auto;
    font-family: ${props => props.theme.fontFamily.Montserrat};
`

export const H2 = styled.h2 `
    font-family: ${props => props.theme.fontFamily.Montserrat};
    margin: 20px;
`

export const P = styled.p `
    color: ${props => props.theme.color.darkCharcoal};
    font-family: ${props => props.theme.fontFamily.Montserrat};
    margin: 20px;
`
export const Span = styled.span `
    display: block;
    text-align: center;
    font-family: ${props => props.theme.fontFamily.Montserrat};
    padding-bottom: 50px;
`

import styled from 'styled-components';

export const SliderWrapper = styled.div `
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    text-align: center;
    color: ${props => props.theme.color.darkCharcoal};
`

export const Div = styled.div `
`

export const Img = styled.img `
    width: 100%;
`

export const Price = styled.span `
    background-color: ${props => props.theme.backgroundColor.yellow};
`

export const Span = styled.span `
    text-decoration: line-through;
    padding: 2px;
    color: ${props => props.theme.color.price}
    background-color: ${props => props.theme.backgroundColor.white}
`
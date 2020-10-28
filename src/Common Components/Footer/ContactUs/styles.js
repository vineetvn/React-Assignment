import styled from 'styled-components';

const Div = styled.div `
    flex: 25%;
    color: ${props => props.theme.color.footerColor};
    font-family: ${props => (props.theme.fontFamily.Lato)};
`
const Div2 = styled.div `
    display: flex;
    flex-direction: column;
    line-height: ${props => (props.theme.lineHeight.medium)};
    font-weight: ${props => (props.theme.fontWeight.regular)};
    font-size: ${props => (props.theme.fontSize.small)};
`
const Span = styled.span `
    color: ${props => (props.theme.color.shadowWhite)};
`
export {Div, Div2, Span};
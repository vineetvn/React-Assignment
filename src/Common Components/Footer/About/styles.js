import styled from 'styled-components';

const Div = styled.div`
    flex: 40%;
`
const P = styled.p`
    font-size: ${props => (props.theme.fontSize.small)};
    font-weight: ${props => (props.theme.fontWeight.regular)};
    line-height: ${props => (props.theme.lineHeight.large)};
    color: ${props => (props.theme.color.footerColor)};
    font-family: ${props => (props.theme.fontFamily.Lato)};
`
export { Div, P };
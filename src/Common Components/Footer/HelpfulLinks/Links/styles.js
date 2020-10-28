import styled from 'styled-components'

const Li = styled.li `
    list-style: none;
    color: ${props => (props.theme.color.footerColor)};
    display: flex;
    align-items: center;
    line-height: ${props => (props.theme.lineHeight.medium)};
`
const A = styled.a `
    text-decoration: none;
    color: ${props => (props.theme.color.footerColor)};
    font-size: ${props => (props.theme.fontSize.small)};
    font-family: ${props => (props.theme.fontFamily.Lato)};
`
export {Li, A};
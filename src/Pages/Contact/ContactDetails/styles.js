import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div `
    flex: 33.34%;
    color: ${props => (props.theme.color.lightGray)};
    width: 100%;
`
const H3 = styled.h3 `
    color: ${props => (props.theme.color.darkCharcoal)};
    font-size: ${props => (props.theme.fontSize.large)};
    line-height: ${props => (props.theme.lineHeight.xlarge)};
    letter-spacing: ${props => (props.theme.letterSpacing.xsmall)};
    font-weight: ${props => (props.theme.fontWeight.medium)};
    font-family: ${props => (props.theme.fontFamily.Montserrat)};
`

const P = styled.p `
    font-size: ${props => (props.theme.fontSize.small)};
    line-height: ${props => (props.theme.lineHeight.large)};
    font-weight: ${props => (props.theme.fontWeight.regular)};
    font-family: ${props => (props.theme.fontFamily.Lato)};
    padding-right: 50px;

    @media only screen and (max-width: 900px) {
        padding-right: 0;
    }
`

const Ul = styled.ul `
    padding: 0;
    list-style: none;
    font-size: ${props => (props.theme.fontSize.small)};
    line-height: ${props => (props.theme.lineHeight.large)};
    font-weight: ${props => (props.theme.fontWeight.regular)};
    font-family: ${props => (props.theme.fontFamily.Lato)};
`

const Li = styled.li `
    display: flex;
    padding: 10px 10px 10px 0;
    display: flex;
    align-items: center;
`

const Span = styled.span `
    margin-right: 30px;
    font-size: ${props => (props.theme.fontSize.large)};
`

const A = styled(Link) `
    text-decoration: none;
    color: ${props => (props.color)};
    &:hover {
        color: ${props => (props.theme.color.lightGray)};
    }
`
export {Div, H3, P, Ul, Li, Span, A};
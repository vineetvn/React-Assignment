import styled from 'styled-components';

export const Div1 = styled.div `
    display: flex;
    width: 100%;
    position: relative;
`
export const H3 = styled.h3 `
    color: ${props => (props.theme.color.darkCharcoal)};
    font-size: ${props => (props.theme.fontSize.large)};
    line-height: ${props => (props.theme.lineHeight.xlarge)};
    letter-spacing: ${props => (props.theme.letterSpacing.xsmall)};
    font-weight: ${props => (props.theme.fontWeight.medium)};
    font-family: ${props => (props.theme.fontFamily.Montserrat)};
    text-align: center;
    margin-top: 2.5em;
`

export const Div = styled.div `
    height: 100%;
`

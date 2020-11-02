
import styled from 'styled-components';
import InputElement from '../../../Common Components/Input/Input';

const Div = styled.div `
    flex: 66.66%;
`
const H3 = styled.h3 `
    color: ${props => (props.theme.color.darkCharcoal)};
    font-size: ${props => (props.theme.fontSize.large)};
    line-height: ${props => (props.theme.lineHeight.xlarge)};
    letter-spacing: ${props => (props.theme.letterSpacing.xsmall)};
    font-weight: ${props => (props.theme.fontWeight.medium)};
    font-family: ${props => (props.theme.fontFamily.Montserrat)};
    margin-left: 20px;

    @media only screen and (max-width: 900px) {
        margin-left: 0
    }
`
const Div2 = styled.div `
    width: 100%;
    display: flex;
    flex: 50%;
    box-sizing: border-box;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`
const Div3 = styled.div `
    width: 30%;
    margin: 0 20px 20px 20px;
    box-sizing: border-box;
`

const Input = styled(InputElement)`
    color: ${props => (props.theme.color.gray)};
    font-size: ${props => (props.theme.fontSize.xsmall)};
    line-height: ${props => (props.theme.lineHeight.medium)};
    font-weight: ${props => (props.theme.fontWeight.medium)};
    font-family: ${props => (props.theme.fontFamily.Lato)};
`

const StyledButton = styled.button `
    text-decoration: none;
    color: ${props => (props.color)};
    background-color: ${props => (props.theme.backgroundColor.white)};
    font-size: ${props => (props.theme.fontSize.xxxsmall)};
    line-height: ${props => (props.theme.lineHeight.medium)};
    letter-spacing: ${props => (props.theme.letterSpacing.small)};
    font-weight: ${props => (props.theme.fontWeight.mediumBold)};
    font-family: ${props => (props.theme.fontFamily.Montserrat)};
    border: 2px solid ${props => (props.color)};
    padding: 12px 24px;
    white-space: nowrap;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;

    @media only screen and (max-width: 500px) {
        letter-spacing: 0;
    }
`

export {Div, H3, Div2, Div3, Input, StyledButton};
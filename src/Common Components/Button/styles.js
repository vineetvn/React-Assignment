import styled from 'styled-components';


const Button = styled.button `
    line-height: ${props => (props.theme.lineHeight.medium)};
    vertical-align: baseline;
    letter-spacing: 1px;
    margin: 12px 6px 0px 0px;
    font-size: 12px;
    font-weight: 600;
    border: none;
    background-color: ${props => (props.theme.backgroundColor.fbButton)};
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    color: ${props => (props.theme.color.white)};
    &:hover {
        color: ${props => (props.theme.color.darkCharcoal)}; 
        background-color: ${props => (props.theme.backgroundColor.white)};
    }

`

const P = styled.p `
    color: ${props => (props.theme.color.red)};

`
export {Button, P};
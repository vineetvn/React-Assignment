import styled from 'styled-components';

const FooterWrap = styled.div`
    background-color: ${props => (props.theme.backgroundColor.footer)};
`
const Wrapper = styled.div`
    display: flex;
    padding: 65px 65px 0 65px;
    box-sizing: border-box;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`
const H4 = styled.h4`
    color: ${props => (props.theme.color.white)};
    font-family: ${props => (props.theme.fontFamily.Montserrat)};
    font-size: ${props => (props.theme.fontSize.xxsmall)};
    line-height: ${props => (props.theme.lineHeight.small)};
`

const FooterBottom = styled.div `
    color: ${props => (props.theme.color.footerBottom)};
    text-align: center;
    line-height: ${props => (props.theme.lineHeight.medium)};
    font-size: ${props => (props.theme.fontSize.small)};
    margin: 65px 65px 0 65px;
    padding: 40px;
    border-top: 1px solid ${props => (props.theme.color.footerBottom)};
`
export {Wrapper, H4, FooterBottom, FooterWrap}


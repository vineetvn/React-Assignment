import styled from 'styled-components';

export const Li = styled.li `
    display: flex;
    width: 100%;

    @media only screen and (max-width: 900px) {
        width: 75%;
    }
    
`

export const Img = styled.img `
    flex: 0.3;
    width: 100px;
    height: 100px;

    @media only screen and (max-width: 900px) {
        display: block;
        width: 80px;
        height: 100px;
    }
`

export const Div = styled.div `
    flex: 0.7;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        width: 60%;
    }
`

export const A = styled.a `
    text-decoration: none;
    font-family: ${props => props.theme.fontFamily.Montserrat};
    color: ${props => props.theme.color.gray};
    font-size: ${props => props.theme.fontSize.small};
    line-height: ${props => props.theme.lineHeight.normal};
    letter-spacing: ${props => props.theme.letterSpacing.xsmall};
    font-weight: ${props => props.theme.fontWeight.mediumBold};
`


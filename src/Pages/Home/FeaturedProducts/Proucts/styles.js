import styled from 'styled-components';


export const Div = styled.div `
    height: ${props => props.type ? '100%' : '40%'};
    width: ${props => props.type ? '100%' : '45%'};
    position: relative;
    margin: 0px 20px 12px 12px;
    box-sizing: border-box;
    overflow: hidden;

    @media only screen and (max-width: 1200px) {
        margin: 10px;
    }

    @media only screen and (max-width: 830px) {
        width: 100%;
        height: 100%;
    }
`

export const Img = styled.img `
    width:100%;
    height: 100%;
    display: block;
    transition: transform .5s;
    &:hover {
        transform: scale(1.2)
    }
`

export const Name = styled.div `
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 12px 20px;
    box-sizing: border-box;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    background-color: ${props => props.theme.backgroundColor.white};
    font-size: ${props => props.theme.fontSize.small};
    font-family: ${props => props.theme.fontFamily.Montserrat};
    line-height: ${props => props.theme.lineHeight.medium};
    font-weight: ${props => props.theme.fontWeight.mediumBold};
    &:hover {
        background-color: ${props => props.theme.backgroundColor.black};
        color: ${props => props.theme.backgroundColor.white};
    }

    @media only screen and (max-width: 1200px) {
        padding: 10px;      
        font-size: ${props => props.theme.fontSize.xxsmall};
    }
`
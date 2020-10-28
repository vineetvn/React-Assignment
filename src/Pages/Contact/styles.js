import styled from 'styled-components';
import OfficeImg from '../../Assets/Images/our office.jpg'
export const Div = styled.div `
    display: flex;
    margin: 50px 100px;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        margin: 50px 70px;;
    }
`

export const Location = styled.div `
    display: flex;
    width: 100%;
    height: 300px;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        height: 500px;
    }
`

export const Office = styled.div `
    background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${OfficeImg}');
    background-position: center;
    flex: 30%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        flex: 50%;
    }
`

export const LocImage = styled.img `
    flex: 70%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;

    @media only screen and (max-width: 900px) {
        flex: 50%;
    }
`

export const H3 = styled.h3 `
    font-family: ${props => props.theme.fontFamily.Montserrat};
    font-size: ${props => props.theme.fontSize.large};
    line-height: ${props => props.theme.lineHeight.xlarge};
    color: ${props => props.theme.color.white};
    font-weight: ${props => props.theme.fontWeight.bold};
`

export const Li = styled.li `
    list-style: none;
    font-family: ${props => props.theme.fontFamily.Lato};
    font-size: ${props => props.theme.fontSize.productName};
    line-height: ${props => props.theme.lineHeight.xlarge};
    color: ${props => props.theme.color.white};
    font-weight: ${props => props.theme.fontWeight.regular};
    text-align: center;
`
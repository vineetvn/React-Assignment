import styled from 'styled-components'
import Input from '../../Common Components/Input/Input'

export const AuthWrapper = styled.div `
    display: flex;
    height: auto;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Image = styled.div `
    flex: 60%;
    height: auto;

    @media only screen and (max-width: 768px) {
        height: 400px;
    }
`
export const Img = styled.img `
    width: 100%;
    height: 100%;
`

export const Form = styled.div `
    flex: 40%;
    margin: 1em;
    box-sizing: border-box;
    font-family: ${props => props.theme.fontFamily.Lato};
`

export const StyledInput = styled(Input) `
    border-bottom: 1px solid black;
`
export const Label = styled.div `
    color: ${props => props.theme.color.footerColor};
    font-size: ${props => props.theme.fontSize.productName};
    line-height: ${props => props.theme.lineHeight.auth};
    font-family: ${props => props.theme.fontFamily.Montserrat};
    font-weight: ${props => props.theme.fontWeight.bold};
    padding: 15px 0 15px 20px;
`

export const Div = styled.div `
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
`
export const ShowPassword = styled.div `
    float: right;
    color: ${props => props.theme.backgroundColor.green};

`

export const Button = styled.button `
    outline: none;
    border: none;
    padding: 20px 50px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    background-color: ${props => props.theme.backgroundColor.green};

    @media only screen and (max-width: 500px) {
        padding: 20px;
    }
`

export const A = styled.div `
    padding: 20px 50px;
    border-radius: 30px;
    background-color: ${props => props.theme.backgroundColor.lightGrey};
`
import styled from 'styled-components';

export const OuterDiv = styled.div `
    flex: 70%;
    width: 100%;
    height: auto;
    display: flex;

    @media only screen and (max-width: 500px) {
        flex: 100%;
    }
`

export const MainSection = styled.div `
    flex: 75%;
`

export const Range = styled.div `
    margin: 15px 0;
    width: 100%;
    font-family: ${props => props.theme.fontFamily.Montserrat};
    display: flex;
    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }
`

export const P = styled.p `
    margin: 50px;
    font-family: ${props => props.theme.fontFamily.Montserrat};
`

export const Filter = styled.div `
    margin: 0 20px;
    @media only screen and (max-width: 1000px) {
        margin: 25px 0;
    }

`

export const Div = styled.div `
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin: 20px;

    @media only screen and (max-width: 500px) {
        flex-wrap: nowrap;
        flex-direction: column;
    }
`

export const Div1 = styled.div `
    width: 100%;
`

export const Span = styled.span `
    margin: 0 20px 0 40px;

    @media only screen and (max-width: 700px) {
        margin: 0 40px;
    }
    @media only screen and (max-width: 350px) {
        display: none;
    }
`

export const Input = styled.input `
    -webkit-appearance: none;
    background: grey; 
    outline: none;
    height: 5px;
    margin: 0 20px;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        background: black;
        cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
        margin: 0 15px;
    }

    @media only screen and (max-width: 350px) {
        margin: 0 30px;
    }

`

export const Search = styled.input `
    border: 1px solid black;
    height: 20px;
    font-family: ${props => props.theme.fontFamily.Lato};

    @media only screen and (max-width: 700px) {
        margin: 0 0 0 15px;
    }

    @media only screen and (max-width: 350px) {
        margin: 0 30px;
    }

`
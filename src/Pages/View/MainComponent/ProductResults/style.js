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
    font-family: ${props => props.theme.fontFamily.Montserrat}
`

export const P = styled.p `
    margin: 50px;
    font-family: ${props => props.theme.fontFamily.Montserrat}
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

export const Span = styled.span `
    margin: 0 50px;
`

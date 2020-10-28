import styled from 'styled-components';

const Div = styled.div `
    flex: 35%;
    display: flex;
    flex-direction: column;
`
const Div2 = styled.div `
    display: flex;
    padding-right: 60px;

    @media only screen and (max-width: 450px) {
        flex-direction: column;
    }
`
const Div3 = styled.div `
    flex: 30%;
    display: flex;
    flex-direction: column;
`

export {Div, Div2, Div3};
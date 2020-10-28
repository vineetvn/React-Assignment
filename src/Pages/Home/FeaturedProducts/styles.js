import styled from 'styled-components';



export const Div = styled.div `
    display: flex;
    height: 100%;
    margin: 2em 4em 6em 4em;
    box-sizing: border-box;

    @media only screen and (max-width: 830px) {
        flex-direction: column;
        height: 100%;
        margin-left: 1em;
    }

    @media only screen and (max-width: 500px) {
        margin-left: 1em
    }
`
export const Div1 = styled.div `
    flex: 60%;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    margin: 15px;
    box-sizing: border-box;

    @media only screen and (max-width: 830px) {
        flex-direction: column;
        flex-wrap: nowrap;
        flex: 100%;
        width: 100%;
    }
`

export const Div2 = styled.div `
    flex: 40%;
    height: auto;
    margin: 15px 15px 30px 15px;
    box-sizing: border-box;

    @media only screen and (max-width: 830px) {
        flex-direction: column;
        width: 100%;
    }
`


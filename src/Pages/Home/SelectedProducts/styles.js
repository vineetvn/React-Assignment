import styled from 'styled-components';

export const Div = styled.div `
    display: flex;
    margin: 4em;
    width: 100%;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        margin: 50px 100px;
    }

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        margin: 50px 50px;
    }

`
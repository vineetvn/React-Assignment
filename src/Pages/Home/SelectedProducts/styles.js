import styled from 'styled-components';

export const Div = styled.div `
    display: flex;
    margin-top: 6em;
    padding: 2em 4em 4em 4em;
    width: 100%;
    background-color: #f8f8f8;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        margin-top: 25px;
        padding: 25px 100px 50px 100px;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        margin-top: 25px;
        padding: 25px 50px 50px 50px;
    }

`
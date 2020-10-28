import styled from 'styled-components';

export const Div = styled.div `
    display: flex;
    height: auto;
    width: 100%;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`
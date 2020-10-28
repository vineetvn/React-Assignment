import styled from 'styled-components';

import Woman from '../../../../Assets/Images/Woman.jpg';

export const ImageWrapper = styled.div `
    background: url('${Woman}');
    flex: 75%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%auto;
    margin: 50px;

    @media only screen and (max-width: 1000px) {
        margin: 25px;
        flex: 75%;
        height: 100%;
    }    
`

export const Div = styled.div `
    display: flex;
    flex-direction: column;
    flex: 30%;

    @media only screen and (max-width: 1000px) {
        margin-top: 100px;
    } 
`
import styled from 'styled-components';

import background from '../../../Assets/Images/shopImage.jpg';

export const Div = styled.div `
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${background}');
    background-size: cover;
    background-position: center;
    position: relative;
    height: 500px;
`

export const ImageHeading = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.theme.color.white};
    font-size: ${props => props.theme.fontSize.large};
    font-family: ${props => props.theme.fontFamily.Montserrat};
    text-align: center;
`
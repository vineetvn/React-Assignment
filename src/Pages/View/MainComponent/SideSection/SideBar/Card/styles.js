import styled from 'styled-components';

export const Div = styled.div `
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2)
`
export const Img = styled.img `
    flex: 25%;
    width: 100px;
`
export const Details = styled.div `
    flex: 75%;
    padding-left: 20px;
    font-family: ${props => props.theme.fontFamily.Montserrat};
`
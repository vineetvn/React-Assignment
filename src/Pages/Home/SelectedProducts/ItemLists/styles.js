import styled from 'styled-components';

export const Ul = styled.ul `
    margin: 0;
    padding:0;
    width: 33%;

    @media only screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
    }
`

export const H3 = styled.h3 `
    color: ${props => props.theme.color.darkCharcoal};
    font-size: ${props => props.theme.fontSize.medium};
    font-family: ${props => props.theme.fontFamily.Montserrat};
    line-height: ${props => props.theme.lineHeight.normal};
    font-weight: ${props => props.theme.fontWeight.mediumBold};
    margin: 25px 35px 25px 0;
    padding: 0 25px 25px 0;
    border-bottom: 1px solid ${props => props.theme.color.darkCharcoal};
`



import styled from 'styled-components';

const Inputelement = styled.input `
    padding: 12px 18px;
    line-height: ${props => (props.theme.lineHeight.medium)};
    font-size: ${props => (props.theme.fontSize.mall)};
    font-weight: ${props => (props.theme.fontWeight.medium)};
    font-family: ${props => (props.theme.fontFamily.Lato)};

`
const Textarea = styled.textarea `
    height: 200px;
    padding: 12px 18px;
`

const Div = styled.div `
    max-width: 100%;
    flex: 0.5;
    display: flex;
    flex-direction: column;
    margin: 0 20px 20px 20px;
    box-sizing: border-box;

    @media only screen and (max-width: 900px) {
        margin: 20px 0;
    }
`

const P = styled.p `
    color: ${props => (props.theme.color.red)};

`

export {Inputelement, Div, Textarea, P};
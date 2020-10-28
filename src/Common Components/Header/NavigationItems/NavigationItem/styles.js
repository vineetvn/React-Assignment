import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Li = styled.li`
    margin: 0;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    align-items: center;
    line-height: 27px;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`

const StyledLink = styled(Link) `
    text-decoration: none;
    height: 100%;
    box-sizing: border-box;
    display: block;
    padding: 26px 10px;
    color: ${props => (props.theme.color.darkCharcoal)};
    font-size: ${props => (props.theme.fontSize.xxxsmall)};
    font-weight: ${props => (props.theme.fontWeight.bold)};
    letter-spacing: ${props => (props.theme.letterSpacing.small)};
    &:hover {
        border-bottom: 2px solid ${props => props.color};
    }
`

export {Li, StyledLink};


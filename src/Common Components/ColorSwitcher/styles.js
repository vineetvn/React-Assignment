import styled from 'styled-components';
import {FiSettings} from 'react-icons/fi';

export const Settings = styled(FiSettings) `
    font-size: ${props => props.theme.fontSize.medium};
    line-height: ${props => props.theme.lineHeight.normal};
    position: absolute;
    top: 0;
    left: 0;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.backgroundColor.black};
    padding: 10px;
`

export const SettingsDiv = styled.div `
    line-height: ${props => props.theme.lineHeight.normal.h2};
    position: fixed;
    background-color: ${props => props.theme.backgroundColor.black};
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    color: ${props => props.theme.color.white};
    top: 20%;
    left: 0;
    z-index: 200;
`

export const H2 = styled.h2 `
    padding-top: 20px;
`

export const Switchers = styled.span `
    background-color: ${props => props.color};
    padding: 3px 10px;
    flex: 12%;
    margin: 1px;
`

export const Div = styled.div `
    padding: 0;
    margin: 2px;
    overflow: hidden;
`
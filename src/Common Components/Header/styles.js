import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background-color: white;
    box-shadow: rgba(0,0,0,0.3);
    z-index: 100;
    position: relative;
`

const Logo = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    flex: 20%;
    display: flex;
    align-items: center;
    padding-left: 100px;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        margin: 20px;
        padding-left: 0;
    }
`

const SearchBar = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
`

const SearchInput = styled.input `
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    text-align: center;
`

const SideMenu = styled.div `
    position: absolute;
    top: 50px;
    right: 0;
    width: 150px;
    height: 220px;
    text-align: center;
    z-index: 200;
    background-color: white;

    @media only screen and (min-width: 901px) {
        height: 100px;
    }
`

const SideBarNav = styled.div `
    z-index: 210;
    flex-direction: column;
    display: none;
    margin-bottom: 20px;
    @media only screen and (max-width: 900px) {
        display: flex;
    }
`

const StyleLink = styled(Link) `
    text-decoration: none;
    display: block;
    padding: 10px;
    margin: 0 20px;
    color: ${props => (props.theme.color.darkCharcoal)};
    font-size: ${props => (props.theme.fontSize.xxxsmall)};
    font-weight: ${props => (props.theme.fontWeight.bold)};
    letter-spacing: ${props => (props.theme.letterSpacing.small)};
    border-bottom: 1px solid ${props => (props.theme.color.headerBorder)};
`

const Button = styled(Link) `
    display: block;
    text-decoration: none;
    padding: 10px;
    margin: 20px;
    color: ${props => (props.theme.color.darkCharcoal)};
    font-size: ${props => (props.theme.fontSize.xxxsmall)};
    font-weight: ${props => (props.theme.fontWeight.bold)};
    letter-spacing: ${props => (props.theme.letterSpacing.small)};
    border: 1px solid ${props => (props.theme.color.headerBorder)};
    cursor: pointer;
    background-color: white;
`
export {Wrapper, Logo, SearchBar, SearchInput, SideMenu, SideBarNav, StyleLink, Button};
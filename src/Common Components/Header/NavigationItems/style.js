import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {MdLocalGroceryStore} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    padding-right: 100px;
    list-style: none;
    flex: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height:100%;
    font-family: ${props => (props.theme.fontFamily.Montserrat)};
    font-weight: ${props => (props.theme.fontWeight.bold)};

    @media only screen and (max-width: 900px) {
        margin: 20px;
        padding-right: 0;
    }

`

export const SearchIcon = styled(FaSearch) `
    font-size: ${props => (props.theme.fontSize.small)};
    line-height: ${props => (props.theme.fontSize.small)};
`
export const StoreIcon = styled(MdLocalGroceryStore) `
    font-size: ${props => (props.theme.fontSize.small)};
    line-height: ${props => (props.theme.fontSize.small)};
`

export const Menu = styled(CgProfile) `
    font-size: ${props => (props.theme.fontSize.medium)};
    line-height: ${props => (props.theme.fontSize.small)};
    display: flex;
`

export const Div = styled.div `
    position: relative;
    margin-left: 20px;
    cursor: pointer;
    line-height: 27px;
`

export const Badge = styled.span `
    position: absolute;
    top: -13px;
    right: -15px;
    width: 25px;
    height: 25px;
    padding: 0 0 10 0px;
    border-radius: 50%;
    background-color: ${props => props.color};
    color: ${props => (props.theme.color.white)};
    text-align: center;
`
export {Ul};

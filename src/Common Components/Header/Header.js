import React, { Component } from 'react'

import logo from '../../Assets/Images/logo.png';
import {Wrapper, Logo, SearchBar, SearchInput, SideMenu, SideBarNav, StyleLink, Button} from './styles';
import NavigationItems from './NavigationItems/NavigationItems';

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             clicked: false,
             menuClicked: false
        }
    }
    

    clickHandler = (e) => {
        e.preventDefault();
        this.setState({clicked: !(this.state.clicked)})
    }

    clickHandle = (e) => {
        e.preventDefault();
        this.setState({menuClicked: !(this.state.menuClicked)})
    }

    logOut() {
        localStorage.clear()
    }

    render() {
        let wrapper = null;
        let modal = null;
        if(this.state.clicked) {
            wrapper = <SearchBar><SearchInput placeholder= 'search your products here'/></SearchBar>
        }
        if(this.state.menuClicked) {
            modal = <SideMenu>
                        <SideBarNav>
                            <StyleLink to='/home'>HOME</StyleLink>
                            <StyleLink to='/view'>SHOP</StyleLink>
                            <StyleLink to='/contact'>CONTACT</StyleLink>
                            <StyleLink to='/profile'>PROFILE</StyleLink>
                        </SideBarNav>
                        <Button to='/' onClick={this.logOut}>Log Out</Button>
                    </SideMenu>
        }
        return (
            <Wrapper>
                {wrapper}
                <Logo to='/home'><img src={logo} alt=''></img></Logo>
                <NavigationItems clicked= {this.clickHandler} click= {this.clickHandle}/>
                {modal}
            </Wrapper>
        )
    }
}

export default Header;

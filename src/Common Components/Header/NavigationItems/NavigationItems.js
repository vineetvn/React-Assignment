import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'; 
import {Ul, Div, Menu} from './style';
import {connect} from 'react-redux'

function NavigationItems(props) {
    return (
        <Ul>
            <NavigationItem link="/home">HOME</NavigationItem>
            <NavigationItem link="/view">SHOP</NavigationItem>
            <NavigationItem link="/contact">CONTACT</NavigationItem>
            <NavigationItem link="/profile">PROFILE</NavigationItem>
            <Div><Menu onClick={props.click}/></Div>
        </Ul>
    )
}
const mapStateToProps = state => {
    return {
        color: state.color.color
    }
}

export default connect(mapStateToProps, null)(NavigationItems)
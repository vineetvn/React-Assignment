import React from 'react'
import {connect} from 'react-redux';

import {Li, StyledLink} from './styles';

function NavigationItem(props) {
    return (
    <Li><StyledLink to={props.link} color={props.color}>{props.children}</StyledLink></Li>
    )
}

const mapStateToProps = state => {
    return {
        color: state.color.color
    }
}

export default connect(mapStateToProps, null)(NavigationItem)

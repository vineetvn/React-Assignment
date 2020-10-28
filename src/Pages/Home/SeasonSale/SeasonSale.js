import React from 'react'

import {Div, Strong, Span, StyledButton} from './styles'
import {connect} from 'react-redux'

function SeasonSale(props) {
    return (
        <Div>
            <Strong>End Of Season Sale</Strong>
            <Span>Up To 50% Off Jeans Collection</Span>
            <StyledButton to="/view" color={props.color}>VIEW COLLECTION</StyledButton>
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        color: state.color.color
    }
}

export default connect(mapStateToProps, null)(SeasonSale)

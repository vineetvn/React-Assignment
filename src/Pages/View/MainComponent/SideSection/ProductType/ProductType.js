import React from 'react'
import { Div, StyledLink } from './style'
import {connect} from 'react-redux'

function ProductType(props) {
    let name;
    let product = props.relatedProducts.filter(prod => {
        if(prod.id == 0) name = prod.name;
    })

    console.log(name)
    return (
        <Div>
            <h2>Welcome To The Shop Section</h2>
            {props.locationState + 1 ? <h3>{name} Section</h3> : null}
            <p>Return back to  <StyledLink href='/home'>Home</StyledLink></p>
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        relatedProducts: state.view.relatedProducts,
        locationState: state.view.locationState
    }
}

export default connect(mapStateToProps, null)(ProductType)

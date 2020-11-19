import React, { Component } from 'react'
import { Div, H3 } from './styles'
import { connect } from 'react-redux'
import Card from './Card/Card';

export class SideBar extends Component {

    render() {
        let products = this.props.relatedProducts.filter(prod => {
            if(prod.id < 4) return true;
            else return false;
        })

        let popular = products.map(prod => {
            return <Card key={prod.id} img={prod.url} name={prod.name} price={prod.price} />
        })

        return (
            <Div>
                <H3>Popular Products</H3>
                {popular}
            </Div>
        )
    }
}

const mapStateToProps = state => {
    return {
        relatedProducts: state.view.relatedProducts,
        productId: state.prod.clicked,
        color: state.color.color
    }
}

export default connect(mapStateToProps, null)(SideBar)

import React, { Component } from 'react'
import { Div } from './styles'
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
                <div>
                    <h3>Popular Products</h3>
                    {popular}
                </div>
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

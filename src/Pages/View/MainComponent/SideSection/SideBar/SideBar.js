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
            return <Card img={prod.url} name={prod.name} price={prod.price} />
        })

        console.log(this.props.productId)

        /*let cart = products.filter(prod => {
            for(let id in this.props.productId) {
                if(prod.id == id) {
                    return true;
                }else return false;
            }
            return 0;
        })

        let cartProducts = cart.map(prod => {
            return <Card img={prod.url} name={prod.name} price={prod.price} cart />
        })
        let prices = cart.map(prod => {
            return (prod.price)
        })

        let price = prices.reduce(function(x,y) {
            return x+y;
        }, 0)*/

        return (
            <Div>
                {/*<CheckOut>
                    <span>Count: {this.props.productId.length}</span>
                    {cartProducts}
                    <Button to='/cart' color={this.props.color}>CheckOut</Button>
                </CheckOut>*/}
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

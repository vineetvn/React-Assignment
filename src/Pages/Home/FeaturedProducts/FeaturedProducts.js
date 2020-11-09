import React ,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Product from './Proucts/Products';
import {Div, Div1, Div2} from './styles'

export class FeaturedProducts extends Component {

    clickHandler(id) {
        this.props.history.push({pathname:'/view', state:id})
    }

    render() {
        const products = this.props.homeProducts.map((product) => {
            return <Product image={product.url} name={product.name} key= {product.id}
            type={ product.id === 0 ? 'main' : null} clicked={() => this.clickHandler(product.id)}/>
        });
        return (
            <Div>
                <Div2>{products[0]}</Div2>
                <Div1>
                {products.slice(1,5)}
                </Div1>
            </Div>
        )
    }
}

const mapStateToProps = state => {
    return {
        homeProducts: state.home.homeProducts
    }
}

export default connect(mapStateToProps, null)(withRouter(FeaturedProducts))
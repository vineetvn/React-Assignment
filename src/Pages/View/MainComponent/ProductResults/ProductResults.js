import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

import {Div, OuterDiv, Range, Span, P} from './style';
import ProductCard from './ProductCard/ProductCard';
import {setId} from './actions'

class ProductResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 200,
            filteredProducts: null,
            clicked: []
        }
    }
    sliderChangeHandler(e) {
        let filtered;
        this.setState({value: e.target.value}, () => {
            filtered = this.props.relatedProducts.filter(prod => {
                if(prod.price <= this.state.value) {
                    return true;
                }else return false;
            })
        this.setState({filteredProducts: filtered})
        })
    }

    clickHandler(id) {
        console.log('a')
        this.setState({clicked: this.state.clicked.concat([id])}, () => {
            console.log(this.state.clicked)
            this.props.setId(id)
        })
    }

    render() {
        let products;
        if(this.state.filteredProducts) {
            products = this.state.filteredProducts.map((prod) => {
                return <ProductCard key= {prod.id} image={prod.url} name={prod.name} price= {prod.price} clicked={() => this.clickHandler(prod.id)}/>
            })
        }else products = this.props.relatedProducts.map((prod) => {
            return <ProductCard key= {prod.id} image={prod.url} name={prod.name} price= {prod.price} discount = {prod.offerprice} clicked={() => this.clickHandler(prod.id)}/>
        })

        return (
            <OuterDiv>
                <Div> 
                    <div>
                    <P>Showing 1-{this.props.relatedProducts.length} of 23 results</P>
                    {!(this.props.locationState + 1) ? <Range>
                                                    <Span>Filter your Products</Span>
                                                    <input type="range" min="1" max="200" 
                                                    value= {`${this.state.value}`} 
                                                    onChange= {(e) =>this.sliderChangeHandler(e)}/>
                                                    <span>${this.state.value}</span>
                                                </Range> : null}
                    </div>
                    <Div>
                        {products}
                    </Div>
                </Div>
            </OuterDiv>
            )
    }
}

const mapStateToProps = state => {
    return {
        relatedProducts: state.view.relatedProducts,
        locationState: state.view.locationState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setId: (data) => dispatch(setId(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductResults))

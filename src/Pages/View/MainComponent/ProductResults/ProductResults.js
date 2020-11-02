import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

import {Div, OuterDiv, Range, Span, P, Input} from './style';
import ProductCard from './ProductCard/ProductCard';
import {setId} from './actions'

function ProductResults(props) {
    
    /*constructor(props) {
        super(props)
        this.state = {
            value: 200,
            filteredProducts: null,
            clicked: []
        }
    }*/

    const [value, setValue] = useState(200);
    const [filteredProducts, setFilteredproducts] = useState(null);
    const [filtered , setFiltered] = useState(null);

    useEffect(() => {
        let filter = props.relatedProducts.filter(prod => {
            if(prod.price <= value) {
                return true;
            }else return false;
        })
        setFiltered(filter)
    }, [props.relatedProducts, value])

    const sliderChangeHandler = (e) => {
        setValue(e.target.value)
        setFilteredproducts(filtered)
    }

    /*const clickHandler = (id) => {
        let clickedArray = clicked.concat([id])
        setClicked(clickedArray)
        props.setId(id)
    }*/

    let products;
    if(filteredProducts) {
        products = filteredProducts.map((prod) => {
            return <ProductCard key= {prod.id} image={prod.url} name={prod.name} price= {prod.price} />
        })
    }else products = props.relatedProducts.map((prod) => {
        return <ProductCard key= {prod.id} image={prod.url} name={prod.name} price= {prod.price} discount = {prod.offerprice} />
    })

    return (
        <OuterDiv>
            <Div> 
                <div>
                <P>Showing 1-{props.relatedProducts.length} of 23 results</P>
                {!(props.locationState + 1) ? <Range>
                                                <Span>Filter your Products</Span>
                                                <Input type="range" min="1" max="200" 
                                                value= {`${value}`} 
                                                onChange= {(e) =>sliderChangeHandler(e)} />
                                                <span> Price: $0 to ${value}</span>
                                            </Range> : null}
                </div>
                <Div>
                    {products}
                </Div>
            </Div>
        </OuterDiv>
        )
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

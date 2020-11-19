import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

import {Div, OuterDiv, Range, Span, P, Input, Search, Filter, Div1} from './style';
import ProductCard from './ProductCard/ProductCard';
import {setId} from './actions'

export function ProductResults(props) {

    const [value, setValue] = useState(200);
    const [filteredProducts, setFilteredproducts] = useState(null);
    const [filtered , setFiltered] = useState(null);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        let filter = props.relatedProducts.filter(prod => {
            if(prod.price <= value) {
                return true;
            }else return false;
        })
        setFiltered(filter)
    }, [props.relatedProducts, value])

    useEffect(() => {
        let searchFilter = props.relatedProducts.filter(prod => {
            let name = prod.name.toLowerCase();
            name = name.trim();
            if(name.includes(searchValue)) {
                return true;
            }else return false;
        })
        setFiltered(searchFilter)
    }, [props.relatedProducts, searchValue])

    const sliderChangeHandler = (e) => {
        setValue(e.target.value)
        setFilteredproducts(filtered)
    }

    const changeHandler = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value.toLowerCase().trim())
        if(e.target.value) {
            setFilteredproducts(filtered)
        }else setFilteredproducts(props.relatedProducts)

    }

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
            <Div1> 
                <Div1>
                <P>Showing 1-{products.length} of 23 results</P>
                {!(props.locationState + 1) ? <Range>
                                                <Filter>
                                                    <Span>Filter :</Span>
                                                    <Input type="range" min="1" max="200" 
                                                    value= {`${value}`} 
                                                    onChange= {(e) =>sliderChangeHandler(e)} />
                                                    <span>$0 to ${value}</span>
                                                </Filter>
                                                <div>
                                                    <Span>Search :</Span>
                                                    <Search type='input' 
                                                    placeholder='Search your Products'
                                                    value={`${searchValue}`}
                                                    onChange={(e) => changeHandler(e)} />
                                                </div>
                                            </Range> : null}
                </Div1>
                <Div>
                    {products}
                </Div>
            </Div1>
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

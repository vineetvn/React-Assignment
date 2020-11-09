import React, { Component } from 'react'
import MainComponent from './MainComponent/MainComponent';
import axios from 'axios';
import {connect} from 'react-redux'

import ShopBackground from './ShopBackground/ShopBackground';
import Header from '../../Common Components/Header/Header';
import Footer from '../../Common Components/Footer/Footer';

import {setRelatedProducts, getLocationState} from './actions'
import ColorSwitcher from '../../Common Components/ColorSwitcher/ColorSwitcher';

class View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            relatedProducts: [],
            locationState: this.props.location.state
        }
    }
    

    componentDidMount () {
        let products;
        axios.get('https://react-sphene-app-80aae.firebaseio.com/.json')
            .then(response => {
                if(this.props.location.state + 1) {
                    products = response.data.HomeProducts[this.props.location.state].relatedProducts;
                } 
                else {
                    products = response.data.ShopProducts;
                }
                this.setState({relatedProducts: products}, () => {
                    this.props.setRelatedProducts(this.state.relatedProducts)
                    this.props.getLocationState(this.state.locationState)
                });
            });
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div>
                <ColorSwitcher />
                <ShopBackground />
                <MainComponent />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setRelatedProducts: (product) => dispatch(setRelatedProducts(product)),
        getLocationState: (data) => dispatch(getLocationState(data))
    }
}

export default connect(null, mapDispatchToProps)(View);
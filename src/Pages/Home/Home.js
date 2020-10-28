import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux';

import SelectedProducts from './SelectedProducts/SelectedProducts'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'
import SeasonSale from './SeasonSale/SeasonSale'

import {Div, Div1, H3} from './styles';
import BackgroundCarousel from './BackgroundCarousel/BackgroundCarousel';
import ProductCarousel from './ProductCarousel/ProductCarousel'
import { setProducts } from './actions'
import Header from '../../Common Components/Header/Header';
import Footer from '../../Common Components/Footer/Footer';
import ColorSwitcher from '../../Common Components/ColorSwitcher/ColorSwitcher'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homeProducts: []
        }
    }

    componentDidMount () {
        axios.get('https://react-sphene-app-80aae.firebaseio.com/.json')
            .then(response => {
                const products = response.data.HomeProducts;
                this.setState({homeProducts: products}, () => {
                    this.props.setProducts(this.state.homeProducts)
                });
            });
        window.scrollTo(0,0)
    }
    



    render() {
        return (
            <Div>
                <Header />
                <BackgroundCarousel />
                
                <ColorSwitcher />
                <H3>Featured Categories</H3>
                <FeaturedProducts />
                <SeasonSale />
                <H3>New Arrivals</H3>
                <ProductCarousel />
                <Div1>
                <SelectedProducts />
                </Div1>
                <Footer />
            </Div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProducts: (product) => dispatch(setProducts(product))
    }
}

export default connect(null, mapDispatchToProps)(Home);
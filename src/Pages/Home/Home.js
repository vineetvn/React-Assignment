import React, { Component } from 'react'
import {connect} from 'react-redux';

import SelectedProducts from './SelectedProducts/SelectedProducts'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'
import SeasonSale from './SeasonSale/SeasonSale'

import {Div, Div1, H3} from './styles';
import BackgroundCarousel from './BackgroundCarousel/BackgroundCarousel';
import ProductCarousel from './ProductCarousel/ProductCarousel'
import { getProducts } from './actions'
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
        this.props.getProducts();
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
        getProducts: () => dispatch(getProducts())
    }
}

export default connect(null, mapDispatchToProps)(Home);
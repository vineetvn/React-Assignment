import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {Div, CarouselDiv, Img, H1, H2, Button} from './styles'
import './Background.css'

import carouselOne from '../../../Assets/Images/slide-shop-01.jpg';
import carouselTwo from '../../../Assets/Images/slide-shop-02.jpg';

class BackgroundCarousel extends Component {

    clickHandler(e) {
        e.preventDefault()

    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            easing: 'linear',
            fade: true
          };
        return (
            <Div>
                <Slider {...settings}>
                    <CarouselDiv>
                        <Img src={carouselOne} alt='' />
                        <H1>Every Cut And Colour</H1>
                        <H2>Urban Style</H2>
                        <Button to='/view' color={this.props.color}>SHOP THE COLLECTION</Button>
                    </CarouselDiv>
                    <CarouselDiv>
                        <Img src={carouselTwo} alt='' />
                        <H1>New pants And T-Shirts</H1>
                        <H2>Men's Casual</H2>
                        <Button to='/view' color={this.props.color}>SHOP THE COLLECTION</Button>
                    </CarouselDiv>
            </Slider>
            </Div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        color: state.color.color
    }
}

export default connect(mapStateToProps, null)(withRouter(BackgroundCarousel))

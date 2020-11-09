import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import image1 from '../../../Assets/Images/cap-slider.jpg'
import image2 from '../../../Assets/Images/watch-slider.jpg'
import image3 from '../../../Assets/Images/specs-slider.jpg'
import image4 from '../../../Assets/Images/wallet-slider.jpg'
import image5 from '../../../Assets/Images/shirt-slider.jpg'
import image6 from '../../../Assets/Images/t-shirt-slider.jpg'

import {Img, SliderWrapper, Span, Price, Div} from './styles'
import './styles.css'

class ProductCarousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            easing: 'linear',
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                    breakpoint: 500,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: false
                    }
                  }
            ]
          };
        return (
            <SliderWrapper>
                <Slider {...settings}>
                    <Div className='slide'>
                        <Img src={image1}></Img>
                        <div>Cap</div>
                        <div><Span>$10</Span> <Price>$6</Price></div>
                    </Div>
                    <Div className='slide'>
                        <Img src={image2}></Img>
                        <div>Watch</div>
                        <div><Price>$179</Price></div>
                    </Div>
                    <Div className='slide'>
                        <Img src={image3}></Img>
                        <div>SunGlasses</div>
                        <div><Span>$29</Span> <Price>$25</Price></div>
                    </Div>
                    <Div className='slide'>
                        <Img src={image4}></Img>
                        <div>Wallet</div>
                        <div><Span>$79</Span> <Price>$69</Price></div>
                    </Div>
                    <Div className='slide'>
                        <Img src={image5}></Img>
                        <div>Shirt</div>
                        <div><Price>$19</Price></div>
                    </Div>
                    <Div className='slide'>
                        <Img src={image6}></Img>
                        <div>T-Shirt</div>
                        <div><Span>$19</Span> <Price>$14</Price></div>
                    </Div>
                </Slider>
            </SliderWrapper>
        )
    }
}

export default ProductCarousel;

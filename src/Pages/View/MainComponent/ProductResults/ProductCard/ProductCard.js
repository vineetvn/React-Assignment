import React from 'react'

import {Div, ImageDetails, H4, Price, Img, OfferPrice, ShoppingCart} from './style'

function ProductCard(props) {
    return (
        <Div onClick={props.clicked}>
            <Img src= {require(`../../../../../Assets/Images/${props.image}`)}></Img>
            <ShoppingCart />
            <ImageDetails>
            <H4>{props.name}</H4>
            {props.discount ? <OfferPrice>${props.discount}</OfferPrice>: null}<Price>${props.price}</Price>
            </ImageDetails>
        </Div>
    )
}

export default ProductCard

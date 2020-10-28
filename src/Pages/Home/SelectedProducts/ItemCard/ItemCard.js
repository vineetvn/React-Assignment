import React from 'react'

import {Li, Div, Img, A} from './styles'

export const ItemCard = (props) => {
    return (
        <Li>
            <Img src={props.src} ></Img>
            <Div>
                <A href="#">{props.name}</A>
                <span>{props.price}</span>
            </Div>
        </Li>
    )
}

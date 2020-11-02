import React from 'react'
import {Li, Div, Img, A, Star} from './styles'

export const ItemCard = (props) => {
    return (
        <Li>
            <Img src={props.src} ></Img>
            <Div>
                <A to="#">{props.name}</A>
                <span>{props.price}</span>
                {props.star ? <span><Star /><Star /><Star /><Star /></span> : null}
            </Div>
        </Li>
    )
}

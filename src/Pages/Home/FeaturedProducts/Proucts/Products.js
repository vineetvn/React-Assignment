import React from 'react'

import {Div, Img, Name} from './styles'

function Products(props) {
    return (
        <Div type={props.type} onClick={props.clicked}>
            <Img src={require(`../../../../Assets/Images/${props.image}`)}></Img>
            <Name>{props.name}</Name>
        </Div>
    )
}

export default Products

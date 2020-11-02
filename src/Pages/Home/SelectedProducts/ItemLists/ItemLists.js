import React from 'react'

import {ItemCard} from '../ItemCard/ItemCard';
import {Ul, H3} from './styles';

export const ItemLists = (props) => {
    return (
        <Ul>
            <H3>{props.heading}</H3>
            <ItemCard src={props.image1} price={props.price1} name={props.name1} star={props.star}></ItemCard>
            <ItemCard src={props.image2} price={props.price2} name={props.name2} star={props.star}></ItemCard>
            <ItemCard src={props.image3} price={props.price3} name={props.name3} star={props.star}></ItemCard>
        </Ul>
    )
}

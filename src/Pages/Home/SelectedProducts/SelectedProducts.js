import React from 'react'
import image1 from '../../../Assets/Images/shop-widget-01.jpg';
import image2 from '../../../Assets/Images/shop-widget-02.jpg';
import image3 from '../../../Assets/Images/shop-widget-03.jpg';
import image4 from '../../../Assets/Images/shop-widget-04.jpg';
import image5 from '../../../Assets/Images/shop-widget-05.jpg';
import image6 from '../../../Assets/Images/shop-widget-06.jpg';

import {ItemLists} from './ItemLists/ItemLists';
import {Div} from './styles'
export default function SelectedProducts() {
    return (
        <Div>
            <ItemLists image1={image1} price1="$79" name1="Casual Shoes"
            image2={image2} price2="$49 $39" name2="Red Bagpack"
            image3={image3} price3="$29 $25" name3="Sunglasses"
            heading="Best Sellers"/>
            <ItemLists image1={image4} price1="$9" name1="Blue Cap"
            image2={image5} price2="$9" name2="Tie"
            image3={image6} price3="$99 $75" name3="Leather Handbag" 
            heading="Top Rated" star/>
            <ItemLists image1={image6} price1="$99 $75" name1="Leather Handbag"
            image2={image3} price2="$29 $25" name2="Sunglasses"
            image3={image2} price3="$49 $39" name3="Red Bagpack" 
            heading="On Sale"/>
        </Div>
    )
}

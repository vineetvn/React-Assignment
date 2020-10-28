import React from 'react'

import ProductResults from './ProductResults/ProductResults';
import SideSection from './SideSection/SideSection'
import {Div} from './style';

function MainComponent() {
    return (
        <Div>
            <ProductResults/>
            <SideSection />
        </Div>
    )
}

export default MainComponent

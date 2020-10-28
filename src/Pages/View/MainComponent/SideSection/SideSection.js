import React from 'react'
import { connect } from 'react-redux';

import ProductType from './ProductType/ProductType';
import SideBar from './SideBar/SideBar';
import {ImageWrapper, Div} from './style';

function SideSection(props) {
    return (
        props.locationState + 1 ? <Div>
            <ProductType />
            <ImageWrapper />
        </Div> : <SideBar />
    )
}

const mapStateToProps = state => {
    return {
        locationState: state.view.locationState
    }
}

export default connect(mapStateToProps, null)(SideSection)

import React, { Component } from 'react'
import Header from '../../Common Components/Header/Header'
import Footer from '../../Common Components/Footer/Footer'
import { connect } from 'react-redux'
import { P } from './styles'

export class Cart extends Component {
    render() {
        console.log(this.props.productId)
        return (
            <div>
                <Header />
                <P>Thank You !! Your Order will be delievered by 31-10-2020</P>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        productId: state.prod.clicked
    }
}

export default connect(mapStateToProps, null)(Cart)

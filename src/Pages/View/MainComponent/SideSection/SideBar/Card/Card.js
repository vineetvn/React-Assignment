import React, { Component } from 'react'
import { Details, Div, Img } from './styles'

export default class Card extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             clicked: false
        }
    }
    
    clickHandler() {
        this.setState({clicked: true})
    }
    render() {
        return (
            <Div>
                <Img src= {`../../../../../../Assets/Images/${this.props.img}`}></Img>
                <Details>
                    <h4>{this.props.name}</h4>
                    <p>$ {this.props.price}</p>
                </Details>
            </Div>
        )
    }
}

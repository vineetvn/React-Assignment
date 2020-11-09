import React, { Component } from 'react'
import { switchColor } from './actions'
import { connect } from 'react-redux'
import {Div, Settings, SettingsDiv, Switchers, H2} from './styles'
import {withTheme} from 'styled-components';

class ColorSwitcher extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             color: 'rgb(227,55,55)',
             clicked: false
        }
    }
    
    clickHandler = (e) => {
        e.preventDefault();
        this.setState({clicked: !(this.state.clicked)})
    }

    colorSwitch = (color) => {
        this.setState({color: color}, () => {
            this.props.switchColor(this.state.color)
        })
    }


    render() {
        let switcher = null;

        if(this.state.clicked) {
            switcher =
                            <div>
                            <H2>Color Switcher</H2>
                            <div>
                                <Div>
                                    <Switchers color='rgb(7, 103, 201)' onClick={() => this.colorSwitch('rgb(7, 103, 201)')}/>
                                    <Switchers color='rgb(68, 178, 114)' onClick={() => this.colorSwitch('rgb(68, 178, 114)')}/>
                                    <Switchers color='rgb(250, 91, 15)' onClick={() => this.colorSwitch('rgb(250, 91, 15)')}/>
                                    <Switchers color='rgb(73, 93, 127)' onClick={() => this.colorSwitch('rgb(73, 93, 127)')}/>
                                    <Switchers color='rgb(255, 180, 0)' onClick={() => this.colorSwitch('rgb(255, 180, 0)')}/>
                                    <Switchers color='rgb(252, 171, 85)' onClick={() => this.colorSwitch('rgb(252, 171, 85)')} />
                                    <Switchers color='rgb(191, 169, 128)' onClick={() => this.colorSwitch('rgb(191, 169, 128)')}/>
                                    <Switchers color='rgb(145, 122, 233)' onClick={() => this.colorSwitch('rgb(145, 122, 233)')}/>
                                </Div>
                                <Div>
                                    <Switchers color='rgb(116, 174, 161)' onClick={() => this.colorSwitch('rgb(116, 174, 161)')}/>
                                    <Switchers color='rgb(214, 67, 145)' onClick={() => this.colorSwitch('rgb(214, 67, 145)')}/>
                                    <Switchers color='rgb(227,55,55)' onClick={() => this.colorSwitch('rgb(227, 55, 55)')}/>
                                    <Switchers color='rgb(120, 78, 61)' onClick={() => this.colorSwitch('rgb(120, 78, 61)')}/>
                                    <Switchers color='rgb(145, 25, 56)' onClick={() => this.colorSwitch('rgb(145, 25, 56)')}/>
                                    <Switchers color='rgb(55, 182, 189)' onClick={() => this.colorSwitch('rgb(55, 182, 189)')}/>
                                    <Switchers color='rgb(85, 85, 85)' onClick={() => this.colorSwitch('rgb(85, 85, 85)')}/>
                                    <Switchers color='rgb(179, 194, 17)' onClick={() => this.colorSwitch('rgb(179, 194, 17)')}/>
                                </Div>
                            </div>
                        </div>

        }

        return (
            <SettingsDiv>
                <Settings onClick={this.clickHandler} />
                {switcher}
            </SettingsDiv>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchColor: (data) => dispatch(switchColor(data))
    }
}

export default connect(null, mapDispatchToProps)(withTheme(ColorSwitcher))

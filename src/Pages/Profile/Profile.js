import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Label, StyledInput} from '../Authentication/styles'
import { Div, H2, P} from './styles'
import Header from '../../Common Components/Header/Header';
import Footer from '../../Common Components/Footer/Footer';

export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            submitForm: {
                UserName: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: localStorage.getItem('userName') || 'User Name'
                    },
                    value: ''
                },
                Email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: localStorage.getItem('email')
                    },
                    value: ''
                }
            } 
        }
    }
    render() {
        const formArray = [];
        for(let key in this.state.submitForm) {
            formArray.push({
                id: key,
                config: this.state.submitForm[key]
            })
        }
        console.log(this.props.submitDetails)
        
        let form = formArray.map(ele => {
            return <div key={ele.id}>
                        <Label>{ele.id}</Label>
                        <StyledInput
                        key={ele.id}
                        elementType= {ele.config.elementType} 
                        elementConfig= {ele.config.elementConfig} 
                        value= {ele.value} />
                    </div>
        })
        return (
            <div>
                <Header />
                <H2>Welcome {localStorage.getItem('userName')}</H2>
                <Div>
                    {form}
                </Div>
                <H2>Feedback:</H2>
                {this.props.submitDetails.name ? 
                <Div>
                    <P>Name: {this.props.submitDetails.name}</P>
                    <P>Email: {this.props.submitDetails.email}</P>
                    <P>Subject: {this.props.submitDetails.sub}</P>
                    <P>Message: {this.props.submitDetails.msg}</P>
                </Div> :
                <P>You havent submitted feedbacks reagrding products !!</P>}
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authDetails: state.auth,
        submitDetails: state.submit
    }
}
export default connect(mapStateToProps, null)(Profile);

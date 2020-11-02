import React, {Component} from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {getName, getMail, getSub, getMsg, getDetails} from '../actions'

import { Div, H3, Div2, Div3, Input, StyledButton} from './styles';

class ContactForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contactForm: {
                username: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: '',
                    validate: {
                        required: true
                    },
                    valid: false,
                    filled: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Email'
                    },
                    value: '',
                    validate: {
                        required: true,
                        email: true
                    },
                    valid: false,
                    filled: false
                },
                subject: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Subject'
                    },
                    value: '',
                    validate: {
                        required: true
                    },
                    valid: false,
                    filled: false
                },
                message: {
                    elementType: 'textarea',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Message'
                    },
                    value: '',
                    validate: {
                        required: true
                    },
                    valid: false,
                    filled: false
                },
                isFormValid: false
            },
            data: []
        }
    }

    checkValidation(value, rules) {
        let isValid = true;
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.email ) {
            const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            isValid = pattern.test( value ) && isValid
        }
        return isValid;
    }
    
    inputHandler = (e, id) => {
        const updatedData = {
            ...this.state.contactForm
        }
        const formElement = {
            ...updatedData[id]
        }
        formElement.value = e.target.value;
        formElement.valid = this.checkValidation(formElement.value, formElement.validate);
        formElement.filled = true;
        updatedData[id] = formElement;

        let formValidity = true;
        for(let id in updatedData) {
            formValidity = updatedData[id].valid && formValidity;
        }
        this.setState({contactForm: updatedData, isFormValid: formValidity})
    }

    submitHandler = (e) => {
        e.preventDefault();
        let data = {
            name: this.state.contactForm.username.value,
            email: this.state.contactForm.email.value,
            sub: this.state.contactForm.subject.value,
            msg: this.state.contactForm.message.value
        }

        this.setState({data: data})
        this.props.getDetails(data.name, data.email, data.sub, data.msg)

        /*this.props.getName(data.name);
        this.props.getMail(data.email);
        this.props.getSub(data.sub);
        this.props.getMsg(data.msg);

        axios.post('https://foodrecipejson.firebaseio.com/.json', data)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })*/
    }

    render() {
        const formArray = [];
        for(let key in this.state.contactForm) {
            formArray.push({
                id: key,
                config: this.state.contactForm[key]
            })
        }

        const inputs = formArray.map(ele => {
            return <Input key = {ele.id}
            elementType= {ele.config.elementType} 
            elementConfig= {ele.config.elementConfig} 
            value= {ele.value}
            invalid = {!ele.config.valid}
            shouldValidate= {ele.config.validate}
            filled = {ele.config.filled}
            change= {(event) => this.inputHandler(event, ele.id)} />
        })
        return (
            <Div>
                <H3>Contact Form</H3>
                <form onSubmit= {(e) => this.submitHandler(e)}>
                    <Div2>
                        {inputs[0]}
                        {inputs[1]}
                    </Div2>
                    {inputs[2]}
                    {inputs[3]}
                    <Div3><StyledButton type='submit' 
                    color={this.props.color}>Send Message</StyledButton></Div3>
                </form>
            </Div>
        )
    }  
}

const mapStateToProps = state => {
    return {
        color: state.color.color
    }
}

const mapDisptchToProps = dispatch => {
    return {
        getName: (data) => dispatch(getName(data)),
        getMail: (data) => dispatch(getMail(data)),
        getSub: (data) => dispatch(getSub(data)),
        getMsg: (data) => dispatch(getMsg(data)),
        getDetails: (name, mail, sub, msg) => dispatch(getDetails(name, mail, sub, msg))
    }
}

export default connect(mapStateToProps, mapDisptchToProps)(withRouter(ContactForm))

import React, { Component } from 'react'
import image from '../../Assets/Images/Authentication.jpg'
import axios from 'axios'
import {AuthWrapper, Image, Form, Img, Label, StyledInput, Button, Div} from './styles'
import { withRouter } from 'react-router'

class Authentication extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            authForm: {
                userName: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'UserName'
                    },
                    value: '',
                    validate: {
                        required: true,
                    },
                    valid: false,
                    filled: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
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
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Password'
                    },
                    value: '',
                    validate: {
                        required: true,
                        minLength: 6
                    },
                    valid: false,
                    filled: false
                },
                confirmPassword: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Confirm Password'
                    },
                    value: '',
                    validate: {
                        required: true
                    },
                    valid: false,
                    filled: false
                }
            },
            isSignedUp: true,
            token: null,
            userId: null,
            error: false
        }
    }

    checkValidation(value, rules) {
        let isValid = true;
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if ( rules.email ) {
            const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }
    
    inputHandler = (e, name) => {
        const updatedData = {
            ...this.state.authForm,
            [name]: {
                ...this.state.authForm[name],
                value: e.target.value,
                valid: this.checkValidation(e.target.value, this.state.authForm[name].validate),
                touched: true
            }
        }
        this.setState({authForm: updatedData})
        
    }

    submitHandler = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.authForm.email.value,
            password: this.state.authForm.password.value,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBfd2HjJmstw4eqJzmzOmkOluVKNqs6yZc';
        axios.post(url, data)
            .then(response => {
                console.log(response)
                this.setState(state => ({
                    ...state,
                    token: response.data.idToken, 
                    userId: response.data.localId
                }), () => {
                    localStorage.setItem('user', response)
                    localStorage.setItem('userName', this.state.authForm.userName.value)
                    localStorage.setItem('email', this.state.authForm.email.value)
                    if(this.state.token !== null) {
                        this.props.history.push('/login')
                    }
                }
            )
            })
            .catch(err => {
                if(err) {
                    this.setState({error: true})
                }
            })
    }  

    clickHandler() {
        this.props.history.push('/login')
    }

    componentDidMount() {
        window.scrollTo(0,0)
    }
    
    render() {
        const formArray = [];
        for(let key in this.state.authForm) {
            formArray.push({
                id: key,
                config: this.state.authForm[key]
            })
        }

        let error = null;
        if(this.state.error) {
            error = <p>Please enter valid email and password(minimum 6 digits)</p>
        }
        let form = formArray.map(ele => {
            console.log(ele.config.valid)
            return <div key={ele.id}>
                        <Label>{ele.config.elementConfig.placeholder}</Label>
                        <StyledInput
                        key={ele.id}
                        elementType= {ele.config.elementType} 
                        elementConfig= {ele.config.elementConfig} 
                        value= {ele.value}
                        invalid = {!ele.config.valid}
                        shouldValidate= {ele.config.validate}
                        filled = {ele.config.filled}
                        change= {(event) => this.inputHandler(event, ele.id)} />
                    </div>
        })

        
        return (
            <AuthWrapper>
                <Image>
                    <Img src={image} />
                </Image>
                <Form>
                    <form onSubmit = {this.submitHandler}>
                        {form}
                        {error}
                        <Div>
                            <Button type='submit'>Submit</Button>
                            <Button onClick={() => this.clickHandler()}>Log In</Button>
                        </Div>
                    </form>  
                </Form>
            </AuthWrapper>
            
        );
    }
};

export default (withRouter(Authentication));

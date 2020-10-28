import React from 'react'

import {Inputelement, Div, Textarea, P} from './style';

export default function Input(props) {
    let InputElement = null;
    
    switch(props.elementType) {
        case ('input') : 
            InputElement = <Inputelement {
                ...props.elementConfig} 
                value={props.value}
                onChange= {props.change} />;
            break;
        case ('textarea') :
            InputElement = <Textarea 
            {...props.elementConfig} 
            value={props.value}
            onChange= {props.change} />;
            break;
        default : 
            InputElement = <Inputelement 
            {...props.elementConfig} 
            value={props.value}
            onChange= {props.change} />;
    }
    let error = null;
    if(props.invalid && props.filled) {
        error = <P>Please enter a valid value!</P>
    }else error = null;

    return (
        <Div>
            {InputElement}
            {error}
        </Div>
    )
}

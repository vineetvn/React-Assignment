import React from 'react'
import { Button, P } from './styles'

export default function Buttons(props) {
    let error = null;
    if(props.disabled) {
        error = <P>Please Fill the Form Correctly</P>
    }
    return (
        <div>
        <Button type={props.type} disabled= {props.disabled}>{props.children}</Button>
        {error}
        </div>
    );
}

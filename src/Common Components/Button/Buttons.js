import React from 'react'
import { Button, P } from './styles'

export function Buttons(props) {
    let error = null;
    if(props.disabled) {
        error = <P>Please Fill the Form Correctly</P>
    }
    return (
        <>
        <Button type={props.type} disabled= {props.disabled}>{props.children}</Button>
        {error}
        </>
    );
}

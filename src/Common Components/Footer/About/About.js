import React from 'react'

import {H4} from '../Styles';
import {Div, P} from './styles';
import Buttons from '../../Button/Buttons'
import {AiFillFacebook} from 'react-icons/ai'

export default function About() {
    return (
        <Div>
            <H4>ABOUT</H4>
            <P>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros.
                    Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</P>
            <Buttons><AiFillFacebook /> LIKE US ON FACEBOOK</Buttons>
        </Div>
    )
}

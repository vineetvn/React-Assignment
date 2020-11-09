import React, { Component } from 'react'

import ContactForm from './ContactForm/ContactForm';
import ContactDetails from './ContactDetails/ContactDetails';
import locationImage from '../../Assets/Images/contact location.jpg'
import Header from '../../Common Components/Header/Header';
import Footer from '../../Common Components/Footer/Footer';

import {Div, Location, LocImage, Office, H3, Li} from './styles';
import ColorSwitcher from '../../Common Components/ColorSwitcher/ColorSwitcher';

export default class Contact extends Component {
    
    render() {
        return (
            <div>
                <ColorSwitcher />
                <Location>
                    <LocImage src={locationImage} alt=''></LocImage>
                    <Office>
                        <H3>Our Office</H3>
                        <Li>45 Park Avenue,Apt. 303</Li>
                        <Li>New York,NY 10016</Li>
                        <Li>Phone (123) 123-456</Li>
                    </Office>
                </Location>
                <Div>
                    <ContactDetails />
                    <ContactForm />
                </Div>
            </div>
        )
    }
}

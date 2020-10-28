import React from 'react'

import {Wrapper, FooterBottom, FooterWrap} from '../Footer/Styles';
import {Span} from './ContactUs/styles';
import HelpfulLinks from './HelpfulLinks/HelpfulLinks';
import ContactUs from './ContactUs/ContactUs';
import About from './About/About';

export default function Footer() {
    return (
        <FooterWrap>
        <Wrapper>
            <About />
            <HelpfulLinks />
            <ContactUs />
        </Wrapper>
        <FooterBottom>© Copyright 2016 by <Span>Sphene.</Span> All Rights Reserved.</FooterBottom>
        </FooterWrap>
    )
}


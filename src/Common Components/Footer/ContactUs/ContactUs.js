import React from 'react';
import { Div, Div2, Span } from './styles';
import { H4 } from '../Styles';

export default function ContactUs() {
    return (
        <Div>
            <H4>CONTACT US</H4>
            <Span>12345 Little Lonsdale St, Melbourne</Span>
            <Div2>
                <span>Phone: <Span>(123) 123-456</Span></span>
                <span>Fax: <Span>(123) 123-456</Span></span>
                <span>E-Mail: <Span>office@example.com</Span></span>
            </Div2>
        </Div>
    )
}

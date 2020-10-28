import React from 'react'

import { Div, Div2, Div3 } from './styles'
import { H4 } from '../Styles'
import Link from './Links/Links'

export default function HelpfulLinks() {
    return (
        <Div>
            <H4>HELPFUL LINKS</H4>
            <Div2>
                <Div3>
                    <Link> About Us</Link>
                    <Link> Press Releases</Link>
                    <Link> Careers</Link>
                    <Link> Services</Link>
                    <Link> Projects</Link>
                </Div3>
                <Div3>
                    <Link> In the News</Link>
                    <Link> Our Blog</Link>
                    <Link> Testimonials</Link>
                    <Link> Contact</Link>
                </Div3>
            </Div2>

        </Div>
    )
}

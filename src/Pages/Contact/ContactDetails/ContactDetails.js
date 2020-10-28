import React from 'react'

import {Div, H3, P, Ul, Li, Span, A} from './styles';
import {FiPhoneCall} from 'react-icons/fi'
import {FaFax} from 'react-icons/fa'
import {AiOutlineGlobal} from 'react-icons/ai'
import {BsEnvelope} from 'react-icons/bs'
import {connect} from 'react-redux'

function ContactDetails(props) {
    return (
        <Div>
            <H3>Find Us There</H3>
            <div>
                <P>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable
                metrics whereas proactive e-services.</P>
                <Ul>
                    <Li>
                        <Span><FiPhoneCall /></Span>
                        <div>
                            <strong>Phone:</strong>
                            <div>(123) 123-456</div>
                        </div>
                    </Li>
                    <Li>
                        <Span><FaFax /></Span>
                        <div>
                            <strong>Fax:</strong>
                            <div>(123) 123-456</div>
                        </div>
                    </Li>
                    <Li>
                        <Span><AiOutlineGlobal /></Span>
                        <div>
                            <strong>Web:</strong>
                            <div><A to="/contact" color={props.color}>www.example.com</A></div>
                        </div>
                    </Li>
                    <Li>
                        <Span><BsEnvelope /></Span>
                        <div>
                            <strong>E-Mail:</strong>
                            <div><A to="/contact" color={props.color}>ofice@example.com</A></div>
                        </div>
                    </Li>
                </Ul>
            </div>
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        color: state.color.color
    }
}

export default connect(mapStateToProps, null)(ContactDetails)

import React from 'react'

import { FaAngleRight } from 'react-icons/fa';
import {Li, A} from './styles'

export default function Links(props) {
    return (
        <Li><FaAngleRight /><A href="#">{props.children}</A></Li>
    )
}

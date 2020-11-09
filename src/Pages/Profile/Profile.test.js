import React from 'react'

import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import { Profile } from './Profile';
import { P, Div } from './styles';

configure({adapter: new Adapter()});

describe('profile', () => {
    it('should render a div with feedback details', () => {
        const wrapper = shallow(<Profile submitDetails/>)
        expect(wrapper.find(Div));
    })

    it('should render a paragraph with no feedback details', () => {
        const wrapper = shallow(<Profile submitDetails/>)
        expect(wrapper.find(P));
    })
})

    
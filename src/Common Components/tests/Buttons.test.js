import React from 'react'

import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import { Button, P } from '../Button/styles';
import {Buttons} from '../Button/Buttons';
import { shallowRender } from '../../testUtils';

configure({adapter: new Adapter()});

describe('Common Component - Button', () => {
    let wrapper;

    // const props = {
    //     type: 'submit',
    //     disabled: false,
    //     children: 'test'
    // }

    beforeEach(() => {
        wrapper = shallowRender(Buttons);
    })

    it('should render the component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should render a button', () => {
        expect(wrapper.find(Button));
    })

    it('should render error message', () => {
        wrapper.setProps({disabled: true})
        expect(wrapper.find(P));
    })
})
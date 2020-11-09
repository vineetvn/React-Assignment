import React from 'react'

import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import Header from './Header';
import { SideMenu } from './styles';

configure({adapter: new Adapter()});

describe('Header', () => {
    it('should render a modal when the hamburg menu is clicked', () => {
        const wrapper = shallow(<Header menuClicked/>)
        expect(wrapper.find(SideMenu));
    })
})
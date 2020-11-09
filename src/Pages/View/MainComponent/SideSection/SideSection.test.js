import React from 'react'

import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';

import { SideBar } from './SideBar/SideBar';
import {SideSection} from './SideSection';
import ProductType from './ProductType/ProductType';



configure({adapter: new Adapter()});

describe('SideView', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SideSection />);
    })

    it('should render a sideBar with products when navigated to the shop directly', () => {
        expect(wrapper.find(SideBar));
    })

    it('should render a sidebar with image when clicked on the products', () => {
        wrapper.setProps({locationState: true})
        expect(wrapper.find(ProductType));
    })
})
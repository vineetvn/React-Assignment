import React from 'react'

import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
import { configureMockStore, mountRenderWithRouter, shallowRender } from '../../../testUtils';
import {SideSection as SS} from '../MainComponent/SideSection/SideSection'
import SideSection  from '../MainComponent/SideSection/SideSection'
import { SideBar } from '../MainComponent/SideSection/SideBar/SideBar';
import ProductType from '../MainComponent/SideSection/ProductType/ProductType';



configure({adapter: new Adapter()});

describe('SideView', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowRender(SS);
    })

    it('should render the component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should render a sideBar with products when navigated to the shop directly', () => {
        expect(wrapper.find(SideBar));
    })

    it('should render a sidebar with image when clicked on the products', () => {
        wrapper.setProps({locationState: true})
        expect(wrapper.find(ProductType));
    })
})

describe('SideSection deep render', () => {
    let initialState = {
        view: {
            relatedProducts: [
                {
                    id: 0,
                    url: 'bagpack.jpg',
                    name: 'backpack',
                    price: '$10'
                }
            ],
            locationState: 0
        }
    }

    let props = {
        relatedProducts: [
            {
                id: 0,
                url: 'bagpack.jpg',
                name: 'backpack',
                price: '$10'
            }
        ],
        locationState: 0,
        img: 'Backpack.jpg',
        name: 'BackPack',
        price: '$10'
    }

    let store = configureMockStore(initialState)
    let wrapper;

    beforeEach(() => {
        wrapper = mountRenderWithRouter(SideSection, store, props)
    })

    it('should render deeply', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
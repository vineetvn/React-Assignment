import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
import { shallowRender } from '../../../testUtils';

import Card from '../MainComponent/SideSection/SideBar/Card/Card';
import { SideBar } from '../MainComponent/SideSection/SideBar/SideBar';
import { H3 } from '../MainComponent/SideSection/SideBar/styles';

configure({adapter: new Adapter()});

describe('SideBar', () => {
    let wrapper;
    let props = {
        relatedProducts: [
            {
                id: 0,
                url: 'bagpack.jpg',
                name: 'backpack',
                price: '$10'
            },
            {
                id: 1,
                url: 'bagpack.jpg',
                name: 'backpack',
                price: '$10'
            },
            {
                id: 2,
                url: 'bagpack.jpg',
                name: 'backpack',
                price: '$10'
            },
            {
                id: 3,
                url: 'bagpack.jpg',
                name: 'backpack',
                price: '$10'
            },
        ]
    }
    beforeEach(() => {
        wrapper = shallowRender(SideBar, false, props);
    })
    
    it('should render the component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should render 4 product cards', () => {
        expect(wrapper.find(Card)).toHaveLength(4)
    })

    it('should render the heading', () => {
        expect(wrapper.find(H3))
    });
});
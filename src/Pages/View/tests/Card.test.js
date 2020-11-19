import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
import { shallowRender } from '../../../testUtils';
import Card from '../MainComponent/SideSection/SideBar/Card/Card';
import { Details, Img } from '../MainComponent/SideSection/SideBar/Card/styles';

configure({adapter: new Adapter()});

describe('SideBar Card', () => {
    let wrapper;

    let props = {
        img: 'Backpack.jpg',
        name: 'BackPack',
        price: '$10'
    }

    beforeEach(() => {
        wrapper = shallowRender(Card, false, props);
    })

    it('should render component', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('should find img component', () => {
        expect(wrapper.find(Img))
    });

    it('should render details of the card', () => {
        expect(wrapper.find(Details))
    });
});
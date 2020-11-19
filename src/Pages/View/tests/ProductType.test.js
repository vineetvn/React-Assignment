import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
import { shallowRender } from '../../../testUtils';
import {ProductType} from '../MainComponent/SideSection/ProductType/ProductType';
import { StyledLink } from '../MainComponent/SideSection/ProductType/style';

configure({adapter: new Adapter()});

describe('ProductType', () => {
    let wrapper;
    let props = {
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

    beforeEach(() => {
        wrapper = shallowRender(ProductType, false, props)
    })

    it('should render the component', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('should ssimulate the link', () => {
        expect(wrapper.find(StyledLink).simulate('click'))
    })
});
import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
import { shallowRender } from '../../../testUtils';
import ProductCard from '../MainComponent/ProductResults/ProductCard/ProductCard';
import { H4, ImageDetails, Img, OfferPrice, Price, ShoppingCart } from '../MainComponent/ProductResults/ProductCard/style';

configure({adapter: new Adapter()});

describe('ProductCard', () => {
    let props = {
        clicked: false,
        image: 'backpack.jpg',
        name: 'backpack',
        discount: 0,
        price: '$10'
    }
    let wrapper

    beforeEach(() => {
        wrapper = shallowRender(ProductCard, false, props)
    })
    it('should render the component', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('should render the image', () => {
        expect(wrapper.find(Img))
    });

    it('should render the image details', () => {
        expect(wrapper.find(ImageDetails))
    });

    it('should render the product name', () => {
        expect(wrapper.find(H4))
    });

    it('should not render the discount price when discount is zero', () => {
        expect(wrapper.find(OfferPrice)).toHaveLength(0)
    });

    it('should render the discount price when the discount is greater than 0', () => {
        props.discount = '$10'
        expect(wrapper.find(OfferPrice))
    });

    it('should render the price', () => {
        expect(wrapper.find(Price))
    });

    it('should render the shopping cart icon', () => {
        expect(wrapper.find(ShoppingCart))
    });
});
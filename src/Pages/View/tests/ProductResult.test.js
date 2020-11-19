import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
import { configureMockStore, mountRenderWithRouter, shallowRender } from '../../../testUtils';
import {ProductResults as ProdResult} from '../MainComponent/ProductResults/ProductResults';
import ProductResults from '../MainComponent/ProductResults/ProductResults'
import { Filter, P, Range, Search } from '../MainComponent/ProductResults/style';
import ProductCard from '../MainComponent/ProductResults/ProductCard/ProductCard';

configure({adapter: new Adapter()});

describe('ProductResult', () => {
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
        ],
        locationState: 0
    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallowRender(ProdResult, false, props)
    })

    it('should render the component', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('should render the filter component when locationstate is null', () => {
        props.locationState = null;
        expect(wrapper.find(Filter))
    });

    it('should render the search component when locationstate is null', () => {
        props.locationState = null;
        expect(wrapper.find(Search))
    });

    it('should not render the search and filter components when related products are shown', () => {
        expect(wrapper.find(Range)).toHaveLength(0)
    });

    it('should render the paragraph showing number of results dynamically', () => {
        expect(wrapper.find(P))
    });

    it('should render 4 Product cards', () => {
        expect(wrapper.find(ProductCard)).toHaveLength(4)
    });
});

describe('Product Result should render deeply', () => {
    let initialState = {
        view: {
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
        ],
        locationState: 0,
        clicked: false,
        image: 'backpack.jpg',
        name: 'backpack',
        discount: 0,
        price: '$10'
    };

    let store = configureMockStore(initialState);
    let wrapper;

    beforeEach(() => {
        wrapper = mountRenderWithRouter(ProductResults, store, props)
    })

    it('should render deeply', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
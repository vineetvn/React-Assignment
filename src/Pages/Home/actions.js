import * as actionType from '../../Store/Actions';

export const setProducts = (data) => {
    return {
        type: actionType.SET_PRODUCTS,
        data: data
    }
}

export const getProducts = () => {
    return {
        type: actionType.GET_PRODUCTS
    }
}
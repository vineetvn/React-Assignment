import * as actionType from '../../Store/Actions';

export const setProducts = (data) => {
    return {
        type: actionType.SET_PRODUCTS,
        data: data
    }
}
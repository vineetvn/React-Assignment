import * as actionType from '../../Store/Actions';

export const setRelatedProducts = (data) => {
    return {
        type: actionType.SET_RELATED_PRODUCTS,
        data: data
    }
}

export const getLocationState = (data) => {
    return {
        type: actionType.GET_LOCATION_STATE,
        data: data
    }
}
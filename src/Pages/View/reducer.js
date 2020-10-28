import * as actionType from '../../Store/Actions';

const initialState = {
    relatedProducts: [],
    locationState: null
}

export const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_RELATED_PRODUCTS : 
            return {
                ...state,
                relatedProducts: action.data
            }
        case actionType.GET_LOCATION_STATE : 
            return {
                ...state,
                locationState: action.data
            }
        default: return state
    }
}
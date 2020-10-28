import * as actionTypes from '../../Store/Actions';

const initalState = {
    homeProducts: []
}

export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS : 
            return {
                ...state,
                homeProducts: action.data
            }
    
        default: return state
    }
}
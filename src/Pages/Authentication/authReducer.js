import * as actionTypes from '../../Store/Actions'

const initialState = {
    userName: '',
    token: '',
    email: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_AUTH_DETAILS:
            return {
                ...state,
                userName: action.data.userName,
                token: action.data.token,
                email: action.data.email
            }
    
        default: return state;
    }
}
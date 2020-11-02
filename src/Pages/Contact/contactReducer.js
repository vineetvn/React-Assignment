import * as actions from '../../Store/Actions'

const initialState = {
    name: null,
    email: null,
    sub: null,
    msg: null
}

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_SUBMIT_NAME:
            return {
                ...state,
                name: action.data
            }
        case actions.GET_SUBMIT_EMAIL:
            return {
                ...state,
                email: action.data
            }
        case actions.GET_SUBMIT_SUB:
            return {
            ...state,
            sub: action.data
            }
        case actions.GET_SUBMIT_MSG:
            return {
            ...state,
            msg: action.data
            }
        case actions.GET_SUBMIT_DETAILS: 
            return {
                ...state,
                name: action.name,
                email: action.email,
                sub: action.sub,
                msg: action.msg
            }
        default: return state;
    }
}
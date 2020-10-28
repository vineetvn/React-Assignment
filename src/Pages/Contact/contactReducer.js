const initialState = {
    data: []
}

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SUBMIT_DETAILS':
            return {
                ...state,
                data: action.data
            }
    
        default: return state;
    }
}
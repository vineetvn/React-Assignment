const initialState = {
    color: 'rgb(227,55,55)'
}

export const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_COLOR' : 
            return {
                ...state,
                color: action.data
            };
    
        default: return state;
    }
}
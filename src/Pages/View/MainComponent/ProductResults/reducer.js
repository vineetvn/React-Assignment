
const initialState = {
    clicked: []
}

export const prodReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ID' : 
            return {
                ...state,
                clicked: state.clicked.concat([action.data])
            }
        default: return state
    }
}
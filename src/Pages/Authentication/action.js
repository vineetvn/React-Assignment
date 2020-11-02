import * as actionTypes from '../../Store/Actions';

export const setAuth = (email, password, userName) => {
    return {
        type: actionTypes.SET_AUTH,
        email: email,
        password: password,
        userName: userName
    }
}

export const getAuthDetails = (details) => {
    return {
        type: actionTypes.GET_AUTH_DETAILS,
        data: details
    }
}
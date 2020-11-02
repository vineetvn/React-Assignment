import * as actions from '../../Store/Actions'

export const getDetails = (name, email, sub, msg) => {
    return {
        type: actions.GET_SUBMIT_DETAILS,
        name: name,
        email: email,
        sub: sub,
        msg: msg
    }
}

export const getName = (data) => {
    return {
        type: actions.GET_SUBMIT_NAME,
        data: data
    }
}

export const getMail = (data) => {
    return {
        type: actions.GET_SUBMIT_EMAIL,
        data: data
    }
}

export const getSub = (data) => {
    return {
        type: actions.GET_SUBMIT_SUB,
        data: data
    }
}

export const getMsg = (data) => {
    return {
        type: actions.GET_SUBMIT_MSG,
        data: data
    }
}
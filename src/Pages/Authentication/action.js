import * as actionTypes from '../../Store/Actions';

export const getAuthDetails = (details) => {
    return {
        type: actionTypes.GET_AUTH_DETAILS,
        data: details
    }
}
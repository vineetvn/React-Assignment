import {takeEvery} from 'redux-saga/effects';
import { getSubmitDetails } from '../Pages/Contact/sagas';
import { getProducts } from '../Pages/Home/sagas';

import * as actions from '../Store/Actions'

export function* formSubmit() {
    yield takeEvery(actions.GET_SUBMIT_DETAILS, getSubmitDetails);
}

export function* homeproducts() {
    yield takeEvery(actions.GET_PRODUCTS, getProducts);
}
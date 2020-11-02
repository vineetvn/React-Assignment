import axios from 'axios'
import {put} from 'redux-saga/effects'
import { setProducts } from './actions'

export function* getProducts(action) {

    try {
        const response = yield axios.get('https://react-sphene-app-80aae.firebaseio.com/.json');
        yield put(setProducts(response.data.HomeProducts))
    }catch(err) {
        yield console.log(err)
    }
}
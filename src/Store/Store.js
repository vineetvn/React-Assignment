import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { getProducts } from '../Pages/Home/sagas';

import {globalReducer} from '../Reducer/globalReducer'
import { formSubmit } from '../Sagas/Sagas';

const saga = createSagaMiddleware();
export const store = createStore(globalReducer, applyMiddleware(saga))

saga.run(formSubmit)
saga.run(getProducts)
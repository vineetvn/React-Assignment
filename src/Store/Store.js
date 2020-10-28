import {createStore} from 'redux';


import {globalReducer} from '../Reducer/globalReducer'

export const store = createStore(globalReducer)
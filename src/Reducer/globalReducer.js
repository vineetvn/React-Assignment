import {combineReducers} from 'redux';

import {reducer} from '../Pages/Home/reducer'
import {viewReducer} from '../Pages/View/reducer'
import {authReducer} from '../Pages/Authentication/authReducer'
import {colorReducer} from '../Common Components/ColorSwitcher/reducer'
import { prodReducer } from '../Pages/View/MainComponent/ProductResults/reducer';
import { contactReducer } from '../Pages/Contact/contactReducer';

export const globalReducer = combineReducers({
    home: reducer,
    view: viewReducer,
    auth: authReducer,
    color: colorReducer,
    prod: prodReducer,
    submit: contactReducer
})
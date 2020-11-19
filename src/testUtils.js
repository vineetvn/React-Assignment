import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store'
import { ThemeProvider } from 'styled-components';
import {theme} from './Theme/Theme'

export const shallowRender = (
    Component,
    withRouter = false,
    props = {},
    dive = false
) => {
    if(!Component) return;

    let wrapperComponent = !withRouter ? shallow(<Component {...props} />)
    : shallow(<Component.WrappedComponent {...props} />);

    if(dive) {
        return wrapperComponent.dive();
    }else return wrapperComponent;
}


export const configureMockStore = (initialState = {}) => {  
    const mockStore = configureStore();
  
    const store = mockStore(initialState);
  
    return store;
};

export const mountRenderWithRouter = (MyComponent, store, props) => {
    return mount(
        <BrowserRouter>
            <ThemeProvider theme = {theme}>
                <Provider store = {store}>
                    <MyComponent {...props} />
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    );
  };

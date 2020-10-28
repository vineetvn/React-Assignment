import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import Home from '../Pages/Home/Home';
import View from '../Pages/View/View';
import Contact from '../Pages/Contact/Contact';
import Profile from '../Pages/Profile/Profile'
import Authentication from '../Pages/Authentication/Authentication'
import Login from '../Pages/Authentication/Login'
import Cart from '../Pages/Cart/Cart';

export default function Router() {
    return (
        <>
            
            <Route path="/" exact component={Authentication} />  
            <Route path="/login" exact component={Login} />          
            {localStorage.user ? <>
            <Route path="/view" exact component={View} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/contact" exact component={Contact} />
            <Route path= '/home' exact component={Home} />
            <Route path="/cart" exact component={Cart} />
            </> : <Redirect path="/" exact component={Authentication} />}
        </>
    )
}

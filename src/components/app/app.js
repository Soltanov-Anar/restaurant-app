import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom';

import './app.scss';
const App = () => {

    return (
        <div className="app">
            <AppHeader/>
            <Switch>
                <Route
                    path="/"
                    component= {MainPage}
                    exact />
                <Route
                    path="/cart"
                    component= {CartPage}
                    exact />
                <Route
                    path="/cart"
                    component= {ItemPage}/> 
            </Switch>
        </div>
    )
}

export default App;
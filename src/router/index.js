import React from 'react';
import { Route, Switch } from 'react-router';
import ContactUs from '../views/ContactUs';
import Home from '../views/Home';
import Shop from '../views/Shop';

function Router(props) {
    return (
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/shop'>
                    <Shop/>
                </Route>
                <Route path='/contact-us'>
                    <ContactUs/>
                </Route>
            </Switch>
    );
}

export default Router;
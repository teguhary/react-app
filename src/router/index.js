import React from 'react';
import { Route, Switch } from 'react-router';
import ContactUs from '../views/ContactUs';
import Home from '../views/Home';
import Shop from '../views/Shop';
import NotFound from '../views/errors/NotFound';
import Navbar from '../components/Navbar';

function Router(props) {
    return (
            <Switch>
                <Route exact path='/'>
                    <Navbar>
                        <Home/>
                    </Navbar>
                </Route>
                <Route path='/shop'>
                    <Navbar>
                        <Shop/>
                    </Navbar>
                </Route>
                <Route path='/contact-us'>
                    <Navbar>
                        <ContactUs/>
                    </Navbar>
                </Route>
                <Route path="*" component={NotFound} />
            </Switch>
    );
}

export default Router;
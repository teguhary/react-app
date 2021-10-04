import React from 'react';
import { Route, Switch } from 'react-router';
import ContactUs from '../views/ContactUs';
import Home from '../views/Home';
import Shop from '../views/Shop';
import UsersIndex from '../views/Users/Index';
import UsersShow from '../views/Users/Show';
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
                <Route exact path='/shop'>
                    <Navbar>
                        <Shop/>
                    </Navbar>
                </Route>
                <Route exact path='/contact-us'>
                    <Navbar>
                        <ContactUs/>
                    </Navbar>
                </Route>
                <Route exact path='/users'>
                    <Navbar>
                        <UsersIndex/>
                    </Navbar>
                </Route>
                <Route exact path='/users/:identifier'>
                    <Navbar>
                        <UsersShow/>
                    </Navbar>
                </Route>
                <Route path="*" component={NotFound} />
            </Switch>
    );
}

export default Router;
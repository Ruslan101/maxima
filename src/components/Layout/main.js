import React from 'react';
import Nawigation from '../Layout/navigation';
import Footer from './footer';
import SignUp from '../Registration/sigUp';
import Home from './home';
import Users from '../Users/users';
import Error_404 from '../404';
import SignIn_w from '../wrapComponents/signIn_w';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {

    return (
        <Router>
            <Nawigation />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/signUp">
                    <SignUp />
                </Route>
                <Route path="/signIn">
                    <SignIn_w />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="*">
                   <Error_404 />
                 </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default Main;
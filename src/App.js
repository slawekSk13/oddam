import React from 'react';
import './App.css';
import {Home} from "./views/Home";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Login} from "./views/Login";
import {Register} from "./views/Register";
import {Menu} from "./views/Menu";
import {Logout} from "./views/Logout";

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/logowanie"><Login /></Route>
                <Route exact path="/rejestracja"><Register /></Route>
                <Route exact path="/wylogowano"><Logout /></Route>
                <Route>
                    <Redirect to='/'/>
                </Route>
            </Switch>
        </BrowserRouter>

    );
}

export default App;

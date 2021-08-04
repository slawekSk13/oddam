import React from 'react';
import './App.css';
import {Home} from "./views/Home";
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Login} from "./views/Login";
import {Register} from "./views/Register";

function App() {
    return (
        <HashRouter>
            <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/logowanie"><Login/></Route>
            <Route exact path="/rejestracja"><Register/></Route>
            <Route>
                <Redirect to='/'/>
            </Route>
            </Switch>
        </HashRouter>

    );
}

export default App;

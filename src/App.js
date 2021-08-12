import React from 'react';
import './App.css';
import {Home} from "./views/Home";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Login} from "./views/Login";
import {Register} from "./views/Register";
import {Menu} from "./views/Menu";
import {Logout} from "./views/Logout";

import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
import {firebaseConfig} from "./utilities/firebaseConfig";

function App() {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const handleRegister = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.uid);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ..
        });
    return (
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/logowanie"><Login /></Route>
                <Route exact path="/rejestracja"><Register handleRegister={handleRegister} /></Route>
                <Route exact path="/wylogowano"><Logout /></Route>
                <Route>
                    <Redirect to='/'/>
                </Route>
            </Switch>
        </BrowserRouter>

    );
}

export default App;

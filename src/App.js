import React, {useEffect, useState} from 'react';
import './App.css';
import {Home} from "./views/Home";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Login} from "./views/Login";
import {Register} from "./views/Register";
import {Menu} from "./views/Menu";
import {Logout} from "./views/Logout";

import firebase from "firebase/app";
import "firebase/auth";
import {firebaseConfig} from "./utilities/firebaseConfig";

import {setCookie, getCookie, deleteCookie} from "./utilities/cookie"

function App() {
    const [activeUser, setActiveUser] = useState(false);
    useEffect(() => {
setActiveUser({uid: getCookie('activeUserUid'), email: getCookie('activeUserEmail')});
    }, [])

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const handleRegister = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setActiveUser({uid: user.uid, email: user.email});
            setCookie('activeUserEmail', user.email, 60*60*3000);
            setCookie('activeUserUid', user.uid, 60*60*3000);
            window.location.href = '/';
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ..
        });

    const handleLogin = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setActiveUser({uid: user.uid, email: user.email});
            setCookie('activeUserEmail', user.email, 60*60*3000);
            setCookie('activeUserUid', user.uid, 60*60*3000);
            window.location.href = '/';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    const handleLogout = () => {
        setActiveUser(false);
        deleteCookie('activeUserEmail');
        deleteCookie('activeUserUid');
    }

    return (
        <BrowserRouter>
            <Menu user={activeUser} handleLogout={handleLogout}/>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/logowanie"><Login handleLogin={handleLogin}/></Route>
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

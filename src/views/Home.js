import React from 'react';
import {Element} from 'react-scroll';
import {Main} from './Main';
import {ThreeColumns} from './ThreeColumns';
import {EasySteps} from "./EasySteps";
import {AboutUs} from "./AboutUs";

const Home = () => {
    const elementStyle = {
        height: '900px'
    }
    return (
        <main>
            <Element name='start'><Main /></Element>
            <ThreeColumns/>
            <Element name='idea'><EasySteps/></Element>
            <Element name='aboutus'><AboutUs /></Element>
            <Element name='organisations'><h1 style={elementStyle}>Fundacje i organizacje</h1></Element>
            <Element name='contact'><h1 style={elementStyle}>Kontakt</h1></Element>
        </main>
    );
};

export {Home};
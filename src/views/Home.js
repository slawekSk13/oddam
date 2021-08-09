import React from 'react';
import {Element} from 'react-scroll';
import {Main} from './Main';
import {ThreeColumns} from './ThreeColumns';
import {EasySteps} from "./EasySteps";
import {AboutUs} from "./AboutUs";
import {Organisations} from "./Organisations";
import {Contact} from "./Contact";

const Home = () => {

    return (
        <main>
            <Element name='start'><Main /></Element>
            <ThreeColumns/>
            <Element name='idea'><EasySteps/></Element>
            <Element name='aboutus'><AboutUs /></Element>
            <Element name='organisations'><Organisations /></Element>
            <Element name='contact'><Contact /></Element>
        </main>
    );
};

export {Home};
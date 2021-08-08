import React from 'react';
import {Element} from 'react-scroll';
import {Main} from './Main';

const Home = () => {
    const style= {
    }
    const elementStyle = {
        height: '900px'
    }
    return (
        <div style={style}>
            <Element name='start'><Main /></Element>
            <Element name='idea'><h1 style={elementStyle}>Idea</h1></Element>
            <Element name='aboutus'><h1 style={elementStyle}>About Us</h1></Element>
            <Element name='organisations'><h1 style={elementStyle}>Fundacje i organizacje</h1></Element>
            <Element name='contact'><h1 style={elementStyle}>Kontakt</h1></Element>
        </div>
    );
};

export {Home};
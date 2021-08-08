import React from 'react';
import {Element} from 'react-scroll'

const Home = () => {
    const style= {
        marginTop: '100px'
    }
    const elementStyle = {
        height: '900px'
    }
    return (
        <div style={style}>
            <Element name='start'><h1 style={elementStyle}>Home</h1></Element>
            <Element name='idea'><h1 style={elementStyle}>Idea</h1></Element>
            <Element name='aboutus'><h1 style={elementStyle}>About Us</h1></Element>
            <Element name='organisations'><h1 style={elementStyle}>Fundacje i organizacje</h1></Element>
            <Element name='contact'><h1 style={elementStyle}>Kontakt</h1></Element>
        </div>
    );
};

export {Home};
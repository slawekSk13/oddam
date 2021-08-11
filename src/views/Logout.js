import {Title} from "../components/Title/Title";
import React, {useEffect} from "react";
import {Center} from "../components/Center/Center";
import {Button} from "../components/Button/Button";
import {Link} from "react-router-dom";

const Logout = () => {

    useEffect(() => {
        const timeout = setTimeout(() => {
window.location.href = '/';
        }, 10000);
        // return clearTimeout(timeout);
    }, [])


    return (
        <Center height='100vh' width='100%' vertical>
            <div style={{width: '30%'}}>
                <Title text='Wylogowanie nastąpiło pomyślnie!' />
                <Link to='/' > <Button text='Strona główna' border/></Link>
            </div>
        </Center>
        )
}
export {Logout}
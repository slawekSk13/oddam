import {Contact} from "./Contact";
import React from "react";
import {HandOverMain} from "./HandOverMain";
import {HandOverFormContainer} from "./HandOverFormContainer";

const HandOver = ({user}) => {
    const email = user.email;
    if (!email) {
        window.location.href = '/logowanie';
        return null
    } else {
        return (
            <>
                <HandOverMain/>
                <HandOverFormContainer/>
                <Contact/>
            </>
        )
    }

}

export {HandOver}
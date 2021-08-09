import {fundations, ngos, organizations} from "../utilities/organizations";
import React, {useEffect, useState} from 'react';
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {Center} from "../components/Center/Center";
import {Paragraph} from "../components/Paragraph/Paragraph";

const Organisations = () => {
    const [localFundations, setLocalFundations] = useState([]);
    const [localNgos, setLocalNgos] = useState([]);
    const [localOrganizations, setLocalOrganizations] = useState([]);

    const [orgType, setOrgType] = useState('fundation');

    useEffect(() => {
        setLocalFundations(fundations);
        setLocalNgos(ngos);
        setLocalOrganizations(organizations);
    }, []);

    return (
        <section>
            <Title text='Komu pomagamy'/>
            <Center width='100%' vertical>
                <Button text='Fundacjom' onClick={() => setOrgType('fundation')} width='14%' medium
                        border={orgType === 'fundation'}/>
                <Button text='Organizacjom pozarządowym' onClick={() => setOrgType('ngo')} width='14%' medium
                        border={orgType === 'ngo'}/>
                <Button text='Lokalnym zbiórkom' onClick={() => setOrgType('local')} width='14%' medium
                        border={orgType === 'local'}/>
            </Center>
            <Center width='100%' vertical>
                <div style={{width: '35%', margin: '2rem 0'}}>
                    {orgType === 'fundation' && <Paragraph medium
                                                           text='W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.'/>}
                    {orgType === 'ngo' && <Paragraph medium
                                                     text='Cras elementum eleifend magna. Phasellus nec blandit lorem. Duis metus elit, malesuada sit amet finibus vel, hendrerit in sapien.'/>}
                    {orgType === 'local' && <Paragraph medium
                                                       text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'/>}
                </div>
                <div style={{width: '80%', height: '500px', backgroundColor: '#2A1D32'}}/>
            </Center>
        </section>
    )
}

export {Organisations}
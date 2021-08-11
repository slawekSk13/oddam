import {fundations, ngos, organizations} from "../utilities/organizations";
import React, {useEffect, useState} from 'react';
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {Center} from "../components/Center/Center";
import {Paragraph} from "../components/Paragraph/Paragraph";
import {OrganizationsList} from "../components/OrganizationsList/OrganizationsList";

import ReactPaginate from 'react-paginate';

const Organizations = () => {
    const [localFundations] = useState([...fundations]);
    const [localNgos] = useState([...ngos]);
    const [localOrganizations] = useState([...organizations]);

    const [toShow, setToShow] = useState([...fundations.slice(0, 3)]);

    const [orgType, setOrgType] = useState('fundation');
    const perPage = 3;
    const pageCount = orgType === 'fundation' ? (Math.ceil(localFundations.length / perPage)) : (orgType === 'ngo' ? Math.ceil(ngos.length / perPage) : Math.ceil(localOrganizations.length / perPage));

    const handlePageChange = (data) => {
        let selected;
        if (typeof data === 'number') {
            selected = data;
        } else {
            selected = data.selected;
        }
        const showNext = () => {
            if (orgType === 'fundation') {
                return [...localFundations.slice(selected * perPage, selected * perPage + perPage)]
            } else if (orgType === 'ngo') {
                return [...localNgos.slice(selected * perPage, selected * perPage + perPage)]
            } else if (orgType === 'local') {
                return [...localOrganizations.slice(selected * perPage, selected * perPage + perPage)]
            }
        }
        setToShow(showNext())
    };

    const handleCategoryChange = (category) => {
        setOrgType(category);
    }

    useEffect(()=> {
        handlePageChange(0);
    }, [orgType])

    return (
        <section>
            <Title text='Komu pomagamy'/>
            <Center width='100%' vertical>
                <Button text='Fundacjom' onClick={() => handleCategoryChange('fundation')} width='14%' medium
                        border={orgType === 'fundation'}/>
                <Button text='Organizacjom pozarządowym' onClick={() => handleCategoryChange('ngo')} width='14%' medium
                        border={orgType === 'ngo'}/>
                <Button text='Lokalnym zbiórkom' onClick={() => handleCategoryChange('local')} width='14%' medium
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
                <div style={{width: '70%'}}>
                    <OrganizationsList orgs={toShow} />
                    {pageCount > 1 && <ReactPaginate key={orgType}
                                                     pageCount={pageCount}
                                                     pageRangeDisplayed={2}
                                                     marginePagesDisplayer={1}
                                                     onPageChange={handlePageChange}
                                                     containerClassName={'pagination'}
                                                     activeClassName={'active'}
                                                     previousLinkClassName={'hidden'}
                                                     nextLinkClassName={'hidden'}
                                                     initialPage={0}
                    />}
                </div>
            </Center>
        </section>
    )
}

export {Organizations}
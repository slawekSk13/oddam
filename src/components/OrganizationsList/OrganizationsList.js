import {OrganizationsListItem} from './OrganizationsList.styles';
import {ColorTheme} from '../../utilities/ColorTheme';
import propTypes from 'prop-types';
import {organizations} from "../../utilities/organizations";

const OrganizationsList = ({orgs}) => {
    return (<ul style={{margin: '2rem 0 3rem'}}>
        <ColorTheme.Consumer>
            {colors => orgs.map((org, i) => <>
                <OrganizationsListItem key={i} colors={colors}>
                <div style={{textAlign: 'left'}}>
                    <h3>{org.name}</h3>
                    <h6>Cel i misja: {org.goal}</h6>
                </div>
                <p>{org.needs}</p>
            </OrganizationsListItem>
                {orgs.length > i + 1 && <hr style={{margin: '2rem 0'}}/>}
            </>)}

        </ColorTheme.Consumer>
    </ul>)
}

OrganizationsList.propTypes = {
    /** array of objects with keys: name, goal, needs; all values are strings */
    orgs: propTypes.array
}

OrganizationsList.defaultProps = {
    orgs: organizations
}

export {OrganizationsList}
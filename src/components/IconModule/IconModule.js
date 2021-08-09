import {IconModuleStyled} from "./IconModule.styles";
import {CounterHeader} from "../CounterHeader/CounterHeader";
import {Paragraph} from "../Paragraph/Paragraph";
import propTypes from 'prop-types';

import icon1 from '../../assets/Icon-1.svg';

const IconModule = ({icon, headerText, paragraphText}) => {
    return (
        <IconModuleStyled>
        <img src={icon} />
            <CounterHeader text={headerText} />
            <hr style={{width: '40%', margin: '0 0 1rem'}}/>
            <Paragraph text={paragraphText} />
        </IconModuleStyled>
    )
}

IconModule.propTypes = {
    /** icon to show on top */
    icon: propTypes.string,
    /** text to show in header */
    headerText: propTypes.string,
    /** text to show in paragraph */
    paragraphText: propTypes.string,
}

IconModule.defaultProps = {
    icon: icon1,
    headerText: 'Header text',
    paragraphText: 'paragraph text'
}

export {IconModule}
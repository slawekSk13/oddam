import {CounterHeaderStyled} from './CounterHeader.styles';
import {ColorTheme} from '../../utilities/ColorTheme';
import propTypes from 'prop-types';


const CounterHeader = ({text, up}) => {
    return (
        <ColorTheme.Consumer>
            {colors => <CounterHeaderStyled colors={colors} up={up}>{text}</CounterHeaderStyled>}
        </ColorTheme.Consumer>
    )
}

CounterHeader.propTypes = {
    /** text to show */
    text: propTypes.string,
    /** decides, if text is uppercased */
    up: propTypes.bool
}

export {CounterHeader}
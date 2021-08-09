import {CounterHeaderStyled} from './CounterHeader.styles';
import {ColorTheme} from '../../utilities/ColorTheme';
import propTypes from 'prop-types';


const CounterHeader = ({text}) => {
    return (
        <ColorTheme.Consumer>
            {colors => <CounterHeaderStyled colors={colors}>{text}</CounterHeaderStyled>}
        </ColorTheme.Consumer>
    )
}

CounterHeader.propTypes = {
    /** text to show */
    text: propTypes.string
}

export {CounterHeader}
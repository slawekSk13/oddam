import {CounterStyled} from './Counter.styles';
import {ColorTheme} from '../../utilities/ColorTheme';
import propTypes from 'prop-types';


const Counter = ({number}) => {
    return (
        <ColorTheme.Consumer>
            {colors => <CounterStyled colors={colors}>{number}</CounterStyled>}
        </ColorTheme.Consumer>
    )
}

Counter.propTypes = {
    /** number to show */
    number: propTypes.number
}

export {Counter}
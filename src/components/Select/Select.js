import {SelectStyled} from './Select.styles';
import {ColorTheme} from '../../utilities/ColorTheme';
import propTypes from 'prop-types';

const Select = ({cta, name, options, label}) => {
    return (
        <ColorTheme.Consumer>
            {colors => <SelectStyled colors={colors}>
                {label}
                <select name={name} id={name}>
                {cta && <option value=''>{cta}</option>}
                {options.map(option => <option value={option}>{option}</option>)}
                </select>
            </SelectStyled>}
        </ColorTheme.Consumer>
    )
}

Select.propTypes = {
    /** first (void) option text */
    cta: propTypes.string,
    /** name & id */
    name: propTypes.string,
    /** options array */
    options: propTypes.array
}

Select.defaultProps = {
    label: 'Liczba 60l worków:',
    cta: '— wybierz —',
    name: 'test',
    options: ['1', '2', '3']
}

export {Select}
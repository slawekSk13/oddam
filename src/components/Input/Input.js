import {InputStyled, TextAreaStyled} from './Input.styles';
import {ColorTheme} from '../../utilities/ColorTheme';
import propTypes from 'prop-types';

const Input = ({placeholder, name, value, area}) => {
    return (<ColorTheme.Consumer>
            {colors => area ? <InputStyled colors={colors} name={name} placeholder={placeholder} value={value}/> :
                <TextAreaStyled colors={colors} name={name} placeholder={placeholder} value={value} rows={4}/>}
        </ColorTheme.Consumer>
    )
}

Input.propTypes = {
    /** text for placeholder */
    placeholder: propTypes.string,
    /** text for name */
    name: propTypes.string,
    /** value */
    value: propTypes.string,
    /** changes tag type to textarea */
    area: propTypes.bool
}

Input.defaultProps = {
    placeholder: 'Placeholder',
    name: 'name',
    value: '',
    area: false
}

export {Input}
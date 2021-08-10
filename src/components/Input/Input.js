import {InputStyled, TextAreaStyled} from './Input.styles';
import {ColorTheme} from '../../utilities/ColorTheme';
import propTypes from 'prop-types';

const Input = ({placeholder, name, value, onChange, onBlur, type, error, area}) => {
    console.log(error);
    return (<ColorTheme.Consumer>
            {colors => area ? <TextAreaStyled colors={colors} id={name} name={name} placeholder={placeholder} value={value} error={error} rows={4} onChange={onChange} onBlur={onBlur}/> :
                <InputStyled colors={colors} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} error={error} type={type}/>}
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
    area: propTypes.bool,
    /** error message */
    error: propTypes.string
}

Input.defaultProps = {
    placeholder: 'Placeholder',
    name: 'name',
    value: '',
    area: false,
    error: ''
}

export {Input}
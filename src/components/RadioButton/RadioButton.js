import {Input, Indicator, Label} from './RadioButton.styles';
import {ColorTheme} from '../../utilities/ColorTheme';
import propTypes from 'prop-types'


const RadioButton = ({name, label, checked, onChange}) => {
    return (<ColorTheme.Consumer>
        {colors =><Label htmlFor={label} colors={colors}>
            {label}
            <Input id={label} type="radio" name={name} value={label} checked={checked} onChange={onChange} />
            <Indicator colors={colors} />
        </Label>}
    </ColorTheme.Consumer>)
}

RadioButton.propTypes = {
    /** group name */
    name: propTypes.string,
    /** label text */
    label: propTypes.string,
    /** decides if checked */
    checked: propTypes.bool,
    /** function to handle change */
    onChange: propTypes.func
}

RadioButton.defaultProps = {
    name: 'type',
    label: 'ubrania, które nadają się do ponownego użycia',
    checked: false,
    onChange: e => console.log(e)
}

export {RadioButton}
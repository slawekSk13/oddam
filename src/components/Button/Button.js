import {ButtonStyled} from "./Button.styles";
import {ColorTheme} from "../../utilities/ColorTheme";
import propTypes from 'prop-types';

const Button = ({big, medium, small, text, width}) => {
    return (
        <ColorTheme.Consumer>
            {colors =>
                (
                    <ButtonStyled width={width} big={big} medium={medium} small={small} colors={colors}>{text}</ButtonStyled>
                )}</ColorTheme.Consumer>)
}

Button.propTypes = {
    /** text to show on button */
    text: propTypes.string,
    /** styling props */
    big: propTypes.bool,
    /** styling props */
    medium: propTypes.bool,
    /** styling props */
    small: propTypes.bool,
    /** custom width value */
    width: propTypes.string
}

Button.defaultProps = {
    text: 'Button',
    big: false,
    medium: false,
    small: false,
    width: ''
}

export {Button}
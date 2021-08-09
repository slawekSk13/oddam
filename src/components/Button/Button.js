import {ButtonStyled} from "./Button.styles";
import {ColorTheme} from "../../utilities/ColorTheme";
import propTypes from 'prop-types';

const Button = ({big, medium, small, text, width, onClick, border}) => {
    return (
        <ColorTheme.Consumer>
            {colors =>
                (
                    <ButtonStyled width={width} big={big} medium={medium} small={small} colors={colors} onClick={onClick} border={border}>{text}</ButtonStyled>
                )}</ColorTheme.Consumer>)
}

const defaultFunc = (e) => {
    console.log(e.target.innerText);
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
    width: propTypes.string,
    /** function triggered on click */
    onClick: propTypes.func,
    /** condition to render border if button should be consider active */
    border: propTypes.bool
}

Button.defaultProps = {
    text: 'Button',
    big: false,
    medium: false,
    small: false,
    width: '',
    onClick: (e) => defaultFunc(e),
    border: false
}

export {Button}
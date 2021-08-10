import {LabelStyled} from './Label.styles';
import {ColorTheme} from '../../utilities/ColorTheme';
import propTypes from 'prop-types';

const Label = ({text, id}) => {
    return (
        <ColorTheme.Consumer>
            {colors => <LabelStyled colors={colors} htmlFor={id}>{text}</LabelStyled>}
        </ColorTheme.Consumer>
    )
}

Label.propTypes = {
    /** text of label */
    text: propTypes.string
};

Label.defaultProps = {
    text: 'Label'
}

export {Label}
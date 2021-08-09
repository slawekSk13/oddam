import {ParagraphStyled} from './Paragraph.styles';
import {ColorTheme} from '../../utilities/ColorTheme';
import propTypes from 'prop-types';


const Paragraph = ({text}) => {
    return (
        <ColorTheme.Consumer>
            {colors => <ParagraphStyled colors={colors}>{text}</ParagraphStyled>}
        </ColorTheme.Consumer>
    )
}

Paragraph.propTypes = {
    /** text to show */
    text: propTypes.string
}

export {Paragraph}
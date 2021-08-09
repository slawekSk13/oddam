import {ParagraphStyled} from './Paragraph.styles';
import {ColorTheme} from '../../utilities/ColorTheme';
import propTypes from 'prop-types';


const Paragraph = ({text, regular, big, medium}) => {
    return (
        <ColorTheme.Consumer>
            {colors => <ParagraphStyled colors={colors} regular={regular} big={big} medium={medium} >{text}</ParagraphStyled>}
        </ColorTheme.Consumer>
    )
}

Paragraph.propTypes = {
    /** text to show */
    text: propTypes.string,
    /** true - font change */
    regular: propTypes.bool,
    /**  true - font size*2 */
    big: propTypes.bool,
    /**  true - font size*1.5 */
    medium: propTypes.bool
}

export {Paragraph}
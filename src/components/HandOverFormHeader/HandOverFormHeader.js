import {HandOverFormHeaderStyled} from "./HandOverFormHeader.styles";
import {ColorTheme} from "../../utilities/ColorTheme";
import propTypes from 'prop-types';

const HandOverFormHeader = ({header, text}) => {
    return (
        <ColorTheme.Consumer>
            {colors => <HandOverFormHeaderStyled colors={colors}>
                <h3>{header}</h3>
                <p>{text}</p>
            </HandOverFormHeaderStyled>}
        </ColorTheme.Consumer>
    )
}

HandOverFormHeader.propTypes = {
    /** header text */
    header: propTypes.string,
    /** paragraph text */
    text: propTypes.string
}

HandOverFormHeader.defaultProps = {
    header: 'Ważne!',
    text: 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'
}


export {HandOverFormHeader}
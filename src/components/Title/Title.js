import {TitleStyled} from './Title.styles';
import {ColorTheme} from "../../utilities/ColorTheme";
import image from '../../assets/Decoration.svg';
import propTypes from 'prop-types';

const Title = ({text, anotherText}) => {
    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const imgStyle = {
        width: '250px',
        margin: '1rem'
    }
    return (
        <ColorTheme.Consumer>
            {colors => (<div style={divStyle}>
                <TitleStyled colors={colors}>{text}</TitleStyled>
                <TitleStyled colors={colors}>{anotherText}</TitleStyled>
                <img style={imgStyle} src={image} alt='decoration'/>
            </div>)}
        </ColorTheme.Consumer>
    )
}

Title.propTypes = {
    /** text to show on first line */
    text: propTypes.string,
    /** text to show on second line */
    AnotherText: propTypes.string
}

export {Title}
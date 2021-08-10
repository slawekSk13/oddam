import fb from '../assets/Facebook.svg'
import instagram from '../assets/Instagram.svg'
import {ColorThemeObj} from '../utilities/ColorTheme'

const Footer = () => {
    const style =  {
        color: ColorThemeObj.fontColor,
        width: '60%',
        display: 'flex',
        padding: '2rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0',
        right: '0'
    }
    const imgStyle = {
        margin: '0 .2rem',
        width: '30px'
    }
    return (
        <footer style={style}>
            <span>
                Copyright by Coders Lab
            </span>
            <div>
            <img src={fb} alt="Facebook" style={imgStyle} />
            <img src={instagram} alt="Instagram" style={imgStyle} />
            </div>
        </footer>
    )
}

export {Footer}
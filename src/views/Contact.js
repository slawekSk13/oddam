import background from '../assets/Background-Contact-Form.jpg'
import {Title} from "../components/Title/Title";
import {Footer} from "./Footer";
import {ContactForm} from "./ContactForm";

const Contact = () => {
    const style = {
        width: '100%',
        height: '930px',
        position: 'relative',
        overflow: 'hidden'
    }
    const imgStyle = {
        position: 'absolute',
        zIndex: '-2',
        width: '100%',
        opacity: '20%'
    }
    const formStyle = {
        width: '30%',
        margin: '180px 0 0 1050px'
    }
    return (
        <div style={style}>
            <img src={background} style={imgStyle} alt='' />
            <div style={formStyle} >
            <Title text='Skontaktuj się z nami' />
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export {Contact}
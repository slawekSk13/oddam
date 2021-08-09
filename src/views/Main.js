import {Title} from '../components/Title/Title'
import {Button} from "../components/Button/Button";
import {Link} from "react-router-dom";
import heroImage from '../assets/Home-Hero-Image.jpg'

const Main = () => {
    const style = {
        width: '50%',
        height: '963px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '48%',
    }
    const imageStyle = {
        position: 'absolute',
        zIndex: '-1',
        left: '-550px'
    }
    return (
        <section>
            <img src={heroImage} alt='hero' style={imageStyle} />
        <div style={style}>
            <Title text='Zacznij pomagać!' anotherText=' Oddaj niechciane rzeczy w zaufane ręce'/>
            <div style={{textAlign: 'center'}}>
                <Link to="/logowanie"><Button text='oddaj rzeczy' big/></Link>
                <Link to="/logowanie"><Button text='Zorganizuj zbiórkę' big/></Link>
            </div>
        </div>
        </section>
    )
}

export {Main}
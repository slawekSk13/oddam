import {Center} from '../components/Center/Center';
import {Title} from '../components/Title/Title';
import {Button} from '../components/Button/Button';
import {Link} from 'react-router-dom';

import {ColorThemeObj} from "../utilities/ColorTheme";

const EasySteps = () => {
    const style = {
        backgroundColor: ColorThemeObj.backgroundColor,
        width: '100%',
        height: '400px',
        margin: '2rem 0'
    }
    return (
        <section>
            <Title text='Wystarczą 4 proste kroki'/>
            <div style={style}/>
            <Center width='100%'>
                <Link to="/logowanie">
                    <Button text='oddaj rzeczy' big width='20%'/>
                </Link>
            </Center>
        </section>
    )
}

export {EasySteps}
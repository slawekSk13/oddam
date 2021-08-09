import {Center} from '../components/Center/Center';
import {Title} from '../components/Title/Title';
import {Button} from '../components/Button/Button';
import {Link} from 'react-router-dom';
import {IconModule} from "../components/IconModule/IconModule";

import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';

import {ColorThemeObj} from "../utilities/ColorTheme";

const EasySteps = () => {
    const style = {
        backgroundColor: ColorThemeObj.backgroundColor,
        width: '100%',
        height: '400px',
        margin: '2rem 0',
        padding: '1rem 15%',
        display: 'flex',
        justifyContent: 'space-around'
    }
    return (
        <section>
            <Title text='Wystarczą 4 proste kroki'/>
            <div style={style}>
                <IconModule icon={icon1} headerText='Wybierz rzeczy' paragraphText='ubrania, zabawki, sprzęt i inne' />
                <IconModule icon={icon2} headerText='Spakuj je' paragraphText='skorzystaj z worków na śmieci' />
                <IconModule icon={icon3} headerText='Zdecyduj komu chcesz pomóc' paragraphText='wybierz zaufane miejsce' />
                <IconModule icon={icon4} headerText='Zamów kuriera' paragraphText='kurier przyjedzie w dogodnym terminie' />
            </div>
            <Center width='100%'>
                <Link to="/logowanie">
                    <Button text='oddaj rzeczy' big width='20%'/>
                </Link>
            </Center>
        </section>
    )
}

export {EasySteps}
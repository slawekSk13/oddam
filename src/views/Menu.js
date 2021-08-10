import {Navigation} from "../components/Navigation/Navigation";
import {Button} from "../components/Button/Button";
import {Link, useLocation} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll'


const Menu = () => {
    const style = {
        zIndex: 4,
        width: '100%',
        position: 'fixed',
        right: '0',
        padding: '.5rem 0 0 5rem',
        backgroundColor: 'white'
    }
    const location = useLocation();

    return (<div style={style}>
            <Navigation>
                <Link to="/logowanie"><Button small text='Zaloguj'/></Link>
                <Link to="/rejestracja"><Button small text='Załóż konto'/></Link>
            </Navigation>
            {location.pathname === '/' ? <Navigation>
                <LinkScroll activeClass='active' spy={true} spyThrottle={500} smooth={true} duration={500}
                            offset={-100}
                            hashSpy={true} to="start"><Button text='Start'/></LinkScroll>
                <LinkScroll activeClass='active' spy={true} spyThrottle={500} smooth={true} duration={500}
                            offset={-100}
                            hashSpy={true} to="idea"><Button text='O co chodzi'/></LinkScroll>
                <LinkScroll activeClass='active' spy={true} spyThrottle={500} smooth={true} duration={500}
                            offset={-100}
                            hashSpy={true} to="aboutus"><Button text='O nas'/></LinkScroll>
                <LinkScroll activeClass='active' spy={true} spyThrottle={500} smooth={true} duration={500}
                            offset={-100}
                            hashSpy={true} to="organisations"><Button
                    text='Fundacje i organizacje'/></LinkScroll>
                <LinkScroll activeClass='active' spy={true} spyThrottle={500} smooth={true} duration={500}
                            offset={-100}
                            hashSpy={true} to="contact"><Button text='Kontakt'/></LinkScroll>
            </Navigation> : <Navigation>
                <Link to="/#/"><Button text='Start'/></Link>
            </Navigation>}
        </div>

    )
}

export {Menu}
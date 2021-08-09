import {Navigation} from "../components/Navigation/Navigation";
import {Button} from "../components/Button/Button";
import {Link} from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll'

const Menu = () => {
    const style = {
        width: '100%',
        position: 'fixed',
        right: '0',
        padding: '.5rem 0 0 5rem',
        backgroundColor: 'white'
    }
    return (<div style={style}>
                <Navigation >
                    <Link to="/logowanie"><Button small text='Zaloguj'/></Link>
                    <Link to="/rejestracja"><Button small text='Załóż konto' /></Link>
                </Navigation>
                <Navigation>
                    <LinkScroll activeClass='active' spy={true} spyThrottle={500} smooth={true} duration={500}
                                offset={-100}
                                hashSpy={true} to="start"><Link to='/'><Button text='Start'/></Link></LinkScroll>
                    <LinkScroll activeClass='active' spy={true} spyThrottle={500} smooth={true} duration={500}
                                offset={-100}
                                hashSpy={true} to="idea"><Link to='/'><Button text='O co chodzi'/></Link></LinkScroll>
                    <LinkScroll activeClass='active' spy={true} spyThrottle={500} smooth={true} duration={500}
                                offset={-100}
                                hashSpy={true} to="aboutus"><Link to='/'><Button text='O nas'/></Link></LinkScroll>
                    <LinkScroll activeClass='active' spy={true} spyThrottle={500} smooth={true} duration={500}
                                offset={-100}
                                hashSpy={true} to="organisations"><Link to='/'><Button
                        text='Fundacje i organizacje'/></Link></LinkScroll>
                    <LinkScroll activeClass='active' spy={true} spyThrottle={500} smooth={true} duration={500}
                                offset={-100}
                                hashSpy={true} to="contact"><Link to='/'><Button text='Kontakt'/></Link></LinkScroll>
                </Navigation>
            </div>

    )
}

export {Menu}
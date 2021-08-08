import {NavigationStyled} from './Navigation.styles';
import {Button} from '../Button/Button';

const Navigation = ({children}) => <NavigationStyled>
    {children ? children :
        <>
            <Button text='button' small/>
            <Button text='another button' small/>
        </>}
</NavigationStyled>

export {Navigation}


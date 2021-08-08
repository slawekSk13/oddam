import {NavigationStyled} from './Navigation.styles';
import {Button} from '../Button/Button';

const Navigation = ({children, colors}) => <NavigationStyled colors={colors}>
    {children ? children :
        <>
            <Button text='button' small/>
            <Button text='another button' small/>
        </>}
</NavigationStyled>

export {Navigation}


import {CenterStyled} from './Center.styles';
import propTypes from 'prop-types'

const Center = ({children, width}) => {
      return(
        <CenterStyled width={width}>
            {children}
        </CenterStyled>
    )
}

Center.propTypes = {
    /** width of container*/
    width: propTypes.string,
}

Center.defaultProps = {
    width: '20%'
}

export {Center}
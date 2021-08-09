import {CenterStyled} from './Center.styles';
import propTypes from 'prop-types'

const Center = ({children, width, vertical}) => {
      return(
        <CenterStyled width={width} vertical={vertical} >
            {children}
        </CenterStyled>
    )
}

Center.propTypes = {
    /** width of container */
    width: propTypes.string,
    /** centers content verticaly */
    vertical: propTypes.bool,
}

Center.defaultProps = {
    width: '20%',
    vertical: false
}

export {Center}
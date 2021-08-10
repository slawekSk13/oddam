import {CenterStyled} from './Center.styles';
import propTypes from 'prop-types'

const Center = ({children, width, vertical, height}) => {
      return(
        <CenterStyled width={width} vertical={vertical} height={height}>
            {children}
        </CenterStyled>
    )
}

Center.propTypes = {
    /** width of container */
    width: propTypes.string,
    /** centers content vertically */
    vertical: propTypes.bool,
    /** height value */
    height: propTypes.string
}

Center.defaultProps = {
    width: '20%',
    vertical: false,
    height: ''
}

export {Center}
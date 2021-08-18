import {CustomSelectStyled} from './CustomSelect.styles';
import propTypes from 'prop-types';
import {ColorTheme} from '../../utilities/ColorTheme'
import {useState} from "react";

const CustomSelect = ({values}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('')

    const valueHandle = (valueToSet) => {
        setValue(valueToSet);
    }

    return (<ColorTheme.Consumer>
            {(colors => <CustomSelectStyled colors={colors} open={open} onClick={() => setOpen(prev => !prev)}>
                <div className="select">
                    <div className="select__trigger"><span>{value ? value : '— wybierz —'}</span>
                        <div className="arrow" />
                    </div>
                    {open && <OptionGroup values={values} valueHandle={valueHandle}/>}
                </div>
            </CustomSelectStyled>)}
        </ColorTheme.Consumer>

    )
}

const OptionGroup = ({values, valueHandle}) => {
    return (<div className="custom-options">
        {values.map(value => <span key={value} className="custom-option" onClick={(e) => valueHandle(e.target.innerText)}>{value}</span>)}
    </div>)
}

CustomSelect.propTypes = {
    /** values and names for options */
    values: propTypes.array
}

CustomSelect.defaultProps = {
    values: [1, 2, 3, 4, 5, 6]
}

export {CustomSelect}
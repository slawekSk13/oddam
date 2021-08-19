import {CustomSelectStyled} from './CustomSelect.styles';
import propTypes from 'prop-types';
import {ColorTheme} from '../../utilities/ColorTheme'
import {useState} from "react";

const CustomSelect = ({values, label, field, onChange, error, handleError, big}) => {
    const [open, setOpen] = useState(false);

    window.addEventListener('click', function(e) {
        const select = document.querySelector('.select')
        if (select) {
            if (!select.contains(e.target)) {
                setOpen(false);
            }
        }
    });

    return (<ColorTheme.Consumer>
            {(colors => <CustomSelectStyled big={big} label={label} colors={colors} open={open} onClick={() => {
                setOpen(prev => !prev);
                handleError();
            }}>
                {label}
                <div className="select">
                    <div className="select__trigger"><span>{field.value ? field.value : '— wybierz —'}</span>
                        <div className="arrow" />
                    </div>
                    {open && <OptionGroup values={values} valueHandle={onChange}/>}
                </div>
                {(error && !field.value) && <div className='error'>{error}</div> }
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
    values: propTypes.array,
    /** description of select */
    label: propTypes.string,
    /** field comes from formik and gives access to form state */
    field: propTypes.object,
    /** function to change formik form state */
    onChange: propTypes.func,
    /** errors control */
    error: propTypes.bool,
    /** function to change errors */
    handleError: propTypes.func
}

CustomSelect.defaultProps = {
    values: [1, 2, 3, 4, 5, 6],
    label: '',
    field: {value: 0},
    onChange: x => console.log(x),
    error: false,
    handleError: e => console.log(e)
}

export {CustomSelect}
import {HandOverFormHeader} from "../components/HandOverFormHeader/HandOverFormHeader";
import background from '../assets/Background-Form.jpg';
import {useState} from "react";
import {RadioButton} from "../components/RadioButton/RadioButton";
import {Button} from "../components/Button/Button";

import {Field, Formik} from "formik";
import {CustomSelect} from "../components/CustomSelect/CustomSelect";

const HandOverFormContainer = () => {

    const [page, setPage] = useState(1);
    const [amountError, setAmountError] = useState(false);


    const style = {
        background: `url('${background}') right`,
        height: '750px'
    }
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: page === 1 ? 'center' : 'flex-start',
        alignItems: 'flex-start',
        marginLeft: '7rem',
        height: '90%'
    }
    return (
        <>
            {page === 1 && <HandOverFormHeader/>}
            {page === 2 && <HandOverFormHeader
                text='Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.'/>}
            {page === 3 && <HandOverFormHeader
                text='Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'/>}
            {page === 4 && <HandOverFormHeader text='Podaj adres oraz termin odbioru rzeczy.'/>}
            <div>

            </div>
            <div style={style}>
                <Formik initialValues={{
                    type: 'ubrania, które nadają się do ponownego użycia',
                    amount: 0
                }} onChange={values => console.log(values)}
                >
                    {formik => {
                        const {values, touched, errors} = formik;

                        if (values.amount > 0) {
                            setAmountError(false);
                        }

                        return (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '90%',
                                paddingTop: '2rem'
                            }}>
                                <p style={{marginLeft: "8rem", fontWeight: '100'}}>Krok {page}/4</p>
                                <form style={formStyle}>
                                    {page === 1 && <div style={{textAlign: 'left'}}>
                                        <h2 style={{marginLeft: "1rem"}}>Zaznacz co chcesz oddać:</h2>
                                        <RadioButton name='type' onChange={e => values.type = e.target.value}
                                                     checked={values.type === 'ubrania, które nadają się do ponownego użycia'}/>
                                        <RadioButton name='type' label='ubrania do wyrzucenia'
                                                     onChange={e => values.type = e.target.value}
                                                     checked={values.type === 'ubrania do wyrzucenia'}/>
                                        <RadioButton name='type' label='zabawki'
                                                     onChange={e => values.type = e.target.value}
                                                     checked={values.type === 'zabawki'}/>
                                        <RadioButton name='type' label='książki'
                                                     onChange={e => values.type = e.target.value}
                                                     checked={values.type === 'książki'}/>
                                        <RadioButton name='type' label='inne'
                                                     onChange={e => values.type = e.target.value}
                                                     checked={values.type === 'inne'}/>
                                    </div>}
                                    {page === 2 && <div style={{textAlign: 'left'}}>
                                        <h2 style={{margin: "2rem 0"}}>Podaj liczbę 60l worków, w które spakowałeś/aś
                                            rzeczy:</h2>
                                        <Field name='amount' component={CustomSelect}
                                               onChange={e => values.amount = parseInt(e)} amountError={amountError} handleAmountError={() => setAmountError(true)}/>
                                    </div>}
                                </form>
                                <div style={{marginLeft: "7rem"}}>
                                    {page > 1 && <Button text='Wstecz' width='15%' border
                                                         onClick={() => setPage(prev => prev - 1)}/>}
                                    <Button text='Dalej' width='15%' border onClick={() => {
                                        if (values.amount === 0 && page === 2) {
                                            setAmountError(true);
                                        } else {
                                            setPage(prev => prev + 1);
                                        }
                                    }}/>
                                </div>
                            </div>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
}

export {HandOverFormContainer}
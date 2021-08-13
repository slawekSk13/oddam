import {HandOverFormHeader} from "../components/HandOverFormHeader/HandOverFormHeader";
import background from '../assets/Background-Form.jpg';
import {useState} from "react";

const HandOverFormContainer = () => {

    const [page, setPage] = useState(1);

    const style = {
        background: `url('${background}') right`,
        height: '750px'
    }
    return (
        <>
            {page === 1 && <HandOverFormHeader />}
            {page === 2 && <HandOverFormHeader text='Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.' />}
            {page === 3 && <HandOverFormHeader text='Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.' />}
            {page === 4 && <HandOverFormHeader text='Podaj adres oraz termin odbioru rzeczy.' />}
            
            <div style={style}>

            </div>
        </>
    )
}

export {HandOverFormContainer}
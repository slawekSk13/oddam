import background from '../assets/Form-Hero-Image.jpg'
import {Center} from "../components/Center/Center";
import {Title} from "../components/Title/Title";
import {HandOverSquares} from "../components/HandOverSquares/HandOverSquares";

const HandOverMain = () => {
    return (
        <div>
            <img src={background} alt='background'
                 style={{position: 'absolute', zIndex: '5', left: '0', top: '0', width: '55%'}}/>
            <div style={{
                width: '40%',
                margin: '0 0 0 950px'
            }}>
                <Center width='100%' height='769px' vertical>
                    <Title text='Oddaj rzeczy, których już nie chcesz' anotherText='POTRZEBUJĄCYM'>
                        <h3 className='handOver-title'>Wystarczą 4 proste kroki:</h3>
                        <HandOverSquares />
                    </Title>
                </Center>
            </div>
        </div>
    )
}

export
{
    HandOverMain
}
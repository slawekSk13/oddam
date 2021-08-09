import {Title} from '../components/Title/Title';
import {Paragraph} from '../components/Paragraph/Paragraph';

import {ColorThemeObj} from '../utilities/ColorTheme'

import people from '../assets/People.jpg';
import signature from '../assets/Signature.svg';

const AboutUs = () => {
    const flex = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const width = {
        width: '50%'
    }
    return (
        <div style={{display: 'flex', backgroundColor: ColorThemeObj.backgroundColor}}>
        <div style={{...width, ...flex, padding: '7rem'}}>
            <Title text='O nas' />
            <Paragraph text='Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.' big />
            <img src={signature} alt='signature' style={{margin: '2rem 0 0 60%'}} />
        </div>
            <img style={{...width}} src={people} />
        </div>
    )
}

export {AboutUs}
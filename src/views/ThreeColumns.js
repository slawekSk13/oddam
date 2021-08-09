import {Center} from "../components/Center/Center";
import {Counter} from "../components/Counter/Counter";
import {CounterHeader} from "../components/CounterHeader/CounterHeader";
import {Paragraph} from "../components/Paragraph/Paragraph";

import {ColorThemeObj} from '../utilities/ColorTheme'
import background from '../assets/3 Columns Background@2x.png'

const ThreeColumns = () => {
    const style = {
        display: 'flex',
        width: '100%',
        backgroundColor: ColorThemeObj.accentColor,
        backgroundImage: `url("${background}")`,
        justifyContent: 'space-around'
    }

    return (
        <section style={style}>
            <Center>
                <Counter number={10} />
                <CounterHeader text='oddanych worków' up />
                <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'/>
            </Center>
            <Center>
                <Counter number={5} />
                <CounterHeader text='wspartych organizacji' up />
                <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'/>
            </Center>
            <Center>
                <Counter number={7} />
                <CounterHeader text='zorganizowanych zbiórek' up />
                <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'/>
            </Center>
        </section>
    )
}

export {ThreeColumns}
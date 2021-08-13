import {ColorTheme} from '../../utilities/ColorTheme'
import {HandOverSquareStyled} from './HandOverSquares.styles'

const HandOverSquares = () => {
    return (
        <ColorTheme.Consumer>
            {colors => <div>
            <HandOverSquareStyled colors={colors}>
                <h6>1</h6>
                <p>Wybierz rzeczy</p>
                <div />
            </HandOverSquareStyled>
                <HandOverSquareStyled colors={colors}>
                    <h6>2</h6>
                    <p>Spakuj je w worki</p>
                    <div />
                </HandOverSquareStyled>
                <HandOverSquareStyled colors={colors}>
                    <h6>3</h6>
                    <p>Wybierz fundację</p>
                    <div />
                </HandOverSquareStyled>
                <HandOverSquareStyled colors={colors}>
                    <h6>4</h6>
                    <p>Zamów kuriera</p>
                    <div />
                </HandOverSquareStyled>
            </div>}
        </ColorTheme.Consumer>
    )
}

export {HandOverSquares}
import { useSpring, animated } from 'react-spring'
import { useCardContext } from '../contexts/CardContext'
import Styles from '../styles/ActiveCard.module.scss'

export default ({ order, onClick }) => {
    const {hoverOn, setHoverOn} = useCardContext()

    const row = Math.floor(order / 3)
    const column = order - (row * 3)

    const curtainSpring = useSpring({
        to: {
            opacity: hoverOn ? (hoverOn == order ? 0 : 1) : 0
        },

        config: {
            bounce: 0,
            friction: 10,
            tension: hoverOn ? (hoverOn == order ? 100 : 60) : 100,
        }
    })

    return (
        <div onClick={() => {
            onClick(order)
        }} onMouseEnter={() => {
            setHoverOn(order)
        }} onMouseLeave={() => {
            setHoverOn()
        }} style={{
            column: `${column} / ${column + 1}`,
            row: row + 1,
        }} active={'true'} className={Styles.wrapper}>
            <animated.div style={curtainSpring} className={Styles.curtain}/>

            <div className={Styles.cardName}>
                <p>{`Тестовая #${order}`}</p>
            </div>
        </div>
    )
}
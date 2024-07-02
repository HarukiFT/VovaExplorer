import { useSpring, animated } from 'react-spring'
import { useCardContext } from '../contexts/CardContext'
import Styles from '../styles/ActiveCard.module.scss'

export default ({ order }) => {
    const {hoverOn, setHoverOn} = useCardContext()

    const row = Math.floor(order / 3)
    const column = order - (row * 3)

    const curtainSpring = useSpring({
        to: {
            opacity: hoverOn ? (hoverOn == order ? 0 : 1) : 0
        },

        config: {
            friction: 10,
            tension: hoverOn ? (hoverOn == order ? 60 : 40) : 60,
        }
    })

    return (
        <div onMouseEnter={() => {
            setHoverOn(order)
        }} onMouseLeave={() => {
            setHoverOn()
        }} style={{
            column: `${column} / ${column + 1}`,
            row: row + 1,
        }} active={'true'} className={Styles.wrapper}>
            <animated.div style={curtainSpring} className={Styles.curtain}/>
        </div>
    )
}
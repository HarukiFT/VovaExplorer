import { useSpring, animated } from 'react-spring'
import { useCardContext } from '../contexts/CardContext'
import Styles from '../styles/ActiveCard.module.scss'
import SuccessIcon from '../assets/success-status.svg'
import ErrorIcon from '../assets/error-status.svg'

const getFormattedDate = (date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
}

export default ({ order, onClick }) => {
    const {hoverOn, setHoverOn, cardsData} = useCardContext()

    const cardData = cardsData.find(card => card.order == order)
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
                <p>{cardData.name}</p>
            </div>

            <div className={Styles.description}>
                <p>{cardData.summary}</p>
            </div>

            <div className={Styles.status}>
                <p>{`Обновлено: ${cardData.lastCommit ? getFormattedDate(new Date(cardData.lastCommit)) : '???'}`}</p>
                <img src={cardData.ping ? SuccessIcon : ErrorIcon}/>
            </div>
        </div>
    )
}
import { useSpring, animated } from 'react-spring'
import Styles from '../../styles/Modal/Card.module.scss'
import { useState } from 'react'
import { useAppContext } from '../../contexts/AppContext'


export default ({data}) => {
    const { setModalData } = useAppContext()
    const [isClosed, setClosed] = useState(false)

    const modalSpring = useSpring({
        from: {
            transform: 'scale(50%)',
            opacity: 0,
        },

        to: {
            transform: isClosed ? `scale(50%)` : `scale(100%)`,
            opacity: isClosed ? 0 : 1
        },

        config: {
            tension: isClosed ? 180 : 120, 
            bounce: isClosed ? 0 : undefined,
        },

        onRest: () => {
            if (isClosed) {
                setModalData(null)
            }
        }
    })

    const handleClose = () => {
        setClosed(true)
    }

    return (
        <animated.div style={modalSpring} className={Styles.wrapper}>
            <div className={Styles.cardName}>
                <p>{data.name}</p>
            </div>

            <div className={Styles.description}>
                <p>{data.description}</p>
            </div>

            <div className={Styles.actions}>
                <div>
                    <input type="button" className={Styles.button} onClick={handleClose}  value="Вернуться"/>
                </div>

                <div>
                    <a type="button" href={data.link} className={Styles.button}>Перейти</a>
                </div>
            </div>
        </animated.div>
    )
}
import { useSpring, animated } from 'react-spring'
import Styles from '../../styles/Modal/Card.module.scss'


export default () => {
    const modalSpring = useSpring({
        from: {
            transform: 'scale(50%)',
            opacity: 0,
        },

        to: {
            transform: 'scale(100%)',
            opacity: 1
        },
    })

    return (
        <animated.div style={modalSpring} className={Styles.wrapper}>
            <div className={Styles.cardName}>
                <p>Имя карточки</p>
            </div>

            <div className={Styles.description}>
                
            </div>

            <div className={Styles.actions}>
                <div>
                    <input type="button" className={Styles.button} value="Репозиторий"/>
                </div>

                <div>
                    <input type="button" className={Styles.button} value="Перейти"/>
                </div>
            </div>
        </animated.div>
    )
}
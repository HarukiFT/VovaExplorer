import { useAppContext } from '../../contexts/AppContext'
import Styles from '../../styles/Modal/index.module.scss'
import { useSpring, animated } from 'react-spring'
import CardModal from './CardModal'

export default () => {
    const { modalData } = useAppContext()

    const wrapperSpring = useSpring({
        from: {
            opacity: 0
        },
        
        to: {
            opacity: 1
        }
    })

    if (!modalData) return;
    return (
        <animated.div style={wrapperSpring} className={Styles.wrapper}>
            {modalData.type == 'card' ? <CardModal data={modalData.data}/> : null}
        </animated.div>
    )
}
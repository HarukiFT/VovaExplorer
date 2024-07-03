import Styles from '../styles/CardsHolder.module.scss'
import ActiveCard from './ActiveCard'
import InactiveCard from './InactiveCard'
import { useAppContext } from '../contexts/AppContext'

export default () => {
    const { setModalData } = useAppContext()

    const handleClick = (order) => {
        setModalData({type: 'card'})
    }

    return (
        <div className={Styles.grid}>
            <ActiveCard onClick={handleClick} order={1}/>
            <ActiveCard onClick={handleClick} order={2}/>
            <ActiveCard onClick={handleClick} order={3}/>
            <InactiveCard order={4}/>
            <InactiveCard order={5}/>
            <InactiveCard order={6}/>
        </div>
)
}
import Header from "./Header"
import Styles from '../styles/App.module.scss'
import CardsHolder from "./CardsHolder"
import { CardContextProvider } from "../contexts/CardContext"

export default () => {
    return (
        <div className={Styles.wrapper}>
            <Header />

            <p className={Styles.siteTitle}>Сервисы для <b>VOVA</b></p>
            
            <CardContextProvider>
                <CardsHolder />
            </CardContextProvider>
        </div>
    )
}
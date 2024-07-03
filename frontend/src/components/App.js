import Header from "./Header"
import Styles from '../styles/App.module.scss'
import CardsHolder from "./CardsHolder"
import { CardContextProvider } from "../contexts/CardContext"
import { AppContextProvider, useAppContext } from "../contexts/AppContext"
import Modal from "./Modal"

export default () => {
    const { modalData } = useAppContext()

    return (
        <>
            <div className={`${Styles.wrapper} ${modalData ? Styles.blur : ''}`}>
                <Header />

                <p className={Styles.siteTitle}>Сервисы для <b>VOVA</b></p>

                <CardContextProvider>
                    <CardsHolder />
                </CardContextProvider>
            </div>

            <Modal />
        </>
    )
}
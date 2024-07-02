import Header from "./Header"
import Styles from '../styles/App.module.scss'

export default () => {
    return (
        <div className={Styles.wrapper}>
            <Header />

            <p className={Styles.siteTitle}>Сервисы для <b>VOVA</b></p>
        </div>
    )
}
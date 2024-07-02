import Styles from '../styles/Header.module.scss'
import Logo from '../assets/logo.png'
import GuestIcon from '../assets/guest.svg'

export default () => {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.logoWrapper}>
                <img className={Styles.logo} src={Logo} />
                <p>Explorer</p>
            </div>

            <div className={Styles.actionWrapper}>
                <input className={Styles.actionButton} type='button' value='Войти'/>
                <a className={Styles.userWrapper}>
                    <img src={GuestIcon}/>
                </a>
            </div>
        </div>
    )
}
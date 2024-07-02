import { useState } from 'react'
import Styles from '../styles/CardsHolder.module.scss'
import ActiveCard from './ActiveCard'
import InactiveCard from './InactiveCard'

export default () => {
    return (
        <div className={Styles.grid}>
            <ActiveCard order={1}/>
            <ActiveCard order={2}/>
            <ActiveCard order={3}/>
            <InactiveCard order={4}/>
            <InactiveCard order={5}/>
            <InactiveCard order={6}/>
        </div>
)
}
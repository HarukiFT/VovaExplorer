import Styles from '../styles/CardsHolder.module.scss'
import ActiveCard from './ActiveCard'
import InactiveCard from './InactiveCard'
import { useAppContext } from '../contexts/AppContext'
import { useEffect, useState } from 'react'
import { useCardContext } from '../contexts/CardContext'

export default () => {
    const { setModalData } = useAppContext()
    const { cardsData } = useCardContext()

    const handleClick = (order) => {
        setModalData({type: 'card', data: cardsData.find(card => card.order == order)})
    }

    const cards = []
    const orders = new Array(6).map((_, index) => index + 1)

    for (let i = 0; i < cardsData.length; i++) {
        const order = cardsData[i].order

        cards.push(<ActiveCard order={order} onClick={handleClick} />)
        orders.splice(orders.indexOf(order), 1)
    }

    for (let i = 0; i < orders.length; i++) {
        cards.push(<InactiveCard order={orders[i]}/>)
    }

    return (
        <div className={Styles.grid}>
            {cards}
        </div>
)
}
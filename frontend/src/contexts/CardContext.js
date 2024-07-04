import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";

const CardContext = createContext()

const CardContextProvider = ({ children }) => {
    const [hoverOn, setHoverOn] = useState(null)
    const [cardsData, setCardsData] = useState([])

    useEffect(() => {
        axiosInstance.get('/card/list').then(response => {
            setCardsData(response.data)
        }).catch((err) => {
            toast.error('Ошибка подключения')
        })
    }, [])

    const payload = {
        hoverOn,
        setHoverOn,

        cardsData,
        setCardsData,
    }

    return (
        <CardContext.Provider value={payload}>
            {children}
        </CardContext.Provider>
    )
}

const useCardContext = () => {
    const context = useContext(CardContext)

    return context
}

export {
    CardContextProvider,
    useCardContext
}
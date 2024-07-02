import { createContext, useContext, useState } from "react";

const CardContext = createContext()

const CardContextProvider = ({ children }) => {
    const [hoverOn, setHoverOn] = useState(null)
    
    const payload = {
        hoverOn,
        setHoverOn
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
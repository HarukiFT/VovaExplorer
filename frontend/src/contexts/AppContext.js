import { createContext, useContext, useState } from "react";

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [modalData, setModalData] = useState(false)
    
    const payload = {
        modalData,
        setModalData
    }

    return (
        <AppContext.Provider value={payload}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    const context = useContext(AppContext)

    return context
}

export {
    AppContextProvider,
    useAppContext
}
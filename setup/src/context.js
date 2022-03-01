import React, { useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [showSidebar, setShowSidebar] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const openSidebar = () => {
        setShowSidebar(true)
    }

    const closeSidebar = () => {
        setShowSidebar(false)
    }

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }
    return (
        <AppContext.Provider value={{ openSidebar, closeSidebar, showSidebar, openModal, closeModal, showModal }}>
            {children}
        </AppContext.Provider>
    )
}
export { AppContext, AppProvider }

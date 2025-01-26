import React, { createContext } from 'react'

const MainContext = createContext()
function Main(props) {
    const BackendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL
    const PaymentBaseUrl = import.meta.env.VITE_BACKEND_PAYMENT_URL

    return (
        <MainContext.Provider value={{ BackendBaseUrl, PaymentBaseUrl }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default Main
export { MainContext }


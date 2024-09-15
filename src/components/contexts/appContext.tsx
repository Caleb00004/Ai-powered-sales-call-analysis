import { SnackbarCloseReason } from "@mui/material";
import { createContext, useEffect, ReactNode, SyntheticEvent } from "react";
import { useState } from "react";

interface AppContextProps {
    toastDetails: {open: boolean, duration: number, message: string},
    setToastDetails: React.Dispatch<React.SetStateAction<{open: boolean, duration: number, message: string}>>
    openToast: (duration: number, message: string) => void
    handleToastClose: (event: SyntheticEvent | Event, reason: SnackbarCloseReason) => void
    salesRepData: string[]
}

const appContext = createContext<AppContextProps>({
    toastDetails: {open: false, duration: 3000, message: ""},
    setToastDetails: () => {},
    openToast: () => {},
    handleToastClose: () => {},
    salesRepData: []
})


function ContextProvider({children}: { children: ReactNode }) {
    const [toastDetails, setToastDetails] = useState({
        open: false,
        duration: 3000,
        message: ""
    })
    const salesRepData = ["Angela", "chris", "John", "Elizabeth", "Michael"]

    const handleToastClose = (event: SyntheticEvent | Event, reason: SnackbarCloseReason) => {
        if (reason === "clickaway") {
            return
        }
        else setToastDetails({ open: false, duration: 3000, message: "" })
    }

    const openToast = (duration: number, message: string) => {
        setToastDetails({open: true, duration, message})
    }

    const contextValue: AppContextProps = {
        toastDetails,
        setToastDetails,
        handleToastClose,
        openToast,
        salesRepData
    }

    return(
        <appContext.Provider value={contextValue}>{children}</appContext.Provider>
    )
}

export { appContext, ContextProvider }
import { SnackbarCloseReason } from "@mui/material";
import { createContext, useEffect, ReactNode, SyntheticEvent } from "react";
import { useState } from "react";
import { globalState } from "../../../api-feature/apiSlice";
import { useGetAvailableSkillsListQuery } from "../../../api-feature/apiSlice";
import { TOKEN_NAME } from "../../../api-feature/types";

interface AppContextProps {
    toastDetails: {open: boolean, duration: number, message: string},
    setToastDetails: React.Dispatch<React.SetStateAction<{open: boolean, duration: number, message: string}>>
    openToast: (duration: number, message: string) => void
    handleToastClose: (event: SyntheticEvent | Event, reason: SnackbarCloseReason) => void
    salesRepData: string[]
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    checkedLocalStorage: boolean;
    setCheckedLocalStorage: React.Dispatch<React.SetStateAction<boolean>>;
    saveAuthorizationTokenWithExpiry: (key: typeof TOKEN_NAME, token: string, expiryInMinutes: number) => void
}

const appContext = createContext<AppContextProps>({
    toastDetails: {open: false, duration: 3000, message: ""},
    setToastDetails: () => {},
    openToast: () => {},
    handleToastClose: () => {},
    salesRepData: [],
    loggedIn: false,
    setLoggedIn: () => {},
    checkedLocalStorage: false,
    setCheckedLocalStorage: () => {},
    saveAuthorizationTokenWithExpiry: () => {}
})


function ContextProvider({children}: { children: ReactNode }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkedLocalStorage, setCheckedLocalStorage] = useState(false)
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

    useEffect(() => {
        const item = localStorage.getItem(TOKEN_NAME)
        setCheckedLocalStorage(true)
        if (item) {
            const data = JSON.parse(item);
            if (new Date().getTime() < data.expiry) {

                globalState.authorizationToken = data.token
                setLoggedIn(true)
                // const {token, ...rest} = data
                // globalState.currentUser = {...rest}
            } else {
                localStorage.removeItem(TOKEN_NAME)
                globalState.authorizationToken = ''
            }
        }
    }, []);

    
    const saveAuthorizationTokenWithExpiry = (key: typeof TOKEN_NAME, token: string , expiryInMinutes: number) => {
        const now = new Date();
        const item = {
            token: token,
            expiry: now.getTime() + expiryInMinutes * 60 * 1000 // Convert expiry time to milliseconds
        };
        localStorage.setItem(key, JSON.stringify(item));
        setCheckedLocalStorage(true)
    };

    const contextValue: AppContextProps = {
        toastDetails,
        setToastDetails,
        handleToastClose,
        openToast,
        salesRepData,
        loggedIn,
        setLoggedIn,
        checkedLocalStorage,
        setCheckedLocalStorage,
        saveAuthorizationTokenWithExpiry
    }

    return(
        <appContext.Provider value={contextValue}>{children}</appContext.Provider>
    )
}

export { appContext, ContextProvider }
import { FC, ReactNode, useContext } from "react"
import SideNav from "../secondary/SideNav"
import TopNav from "../secondary/DashboardTopNav"
import { Snackbar } from "@mui/material"
import { appContext } from "../contexts/appContext"

interface props {
    children: ReactNode
}

const DashboardLayout:FC<props> = ({children}) => {
    const {toastDetails, setToastDetails, handleToastClose} = useContext(appContext)

    return (
        <>  
            <Snackbar
                open={toastDetails.open}
                autoHideDuration={toastDetails.duration}
                onClose={handleToastClose}
                message={toastDetails.message}
                anchorOrigin={{vertical: "top", horizontal: "center"}}
                sx={{
                    "& .MuiSnackbarContent-root": {
                        backgroundColor: "white",
                        border: "2px solid #B3387F",
                        color: "black",
                        fontSize: "14px",
                        // marginTop: "50px",
                        // width: "20em"
                    }
                }}

            />

            <div className="flex">
                {/* <div className="flex-col flex-1 "> */}
                <div className="hidden sm:block sm:w-[30vw] mdx2:w-[20vw] ">
                    <SideNav />
                </div>
                {/* <div className="flex flex-1 sm:flex-[2.5] mdx2:flex-[4] flex-col"> */}
                <div className="w-[100vw] sm:w-[70vw] mdx2:w-[80vw]">
                    <TopNav />
                    <main className="bg-[#F8F8FA] h-[90vh] pt-5 px-4 overflow-auto ">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout
import { FC, ReactNode, useContext, useEffect, useState } from "react"
import SideNav from "../secondary/SideNav"
import TopNav from "../secondary/DashboardTopNav"
import { Snackbar } from "@mui/material"
import { appContext } from "../contexts/appContext"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { globalState, BASE_URL } from "../../../api-feature/apiSlice"
import Button from "../primary/Button"
import Link from "next/link"
import Logo2 from "../../../public/svgs/Logo_white.svg"
import { useRouter } from "next/router"
import axios from "axios"

interface props {
    children: ReactNode
}

const DashboardLayout:FC<props> = ({children}) => {
    const {toastDetails, setToastDetails, loggedIn, checkedLocalStorage, handleToastClose} = useContext(appContext)
    const [loadingData, setLoadingData] = useState(true);
    const [errorOccured, setErrorOccured] = useState(false);
    const router = useRouter()

    console.log(globalState)
 
    // const getProfileData = async () => {
    //     try {
    //         console.log(globalState.authorizationToken)
    //         const response = await axios.get(`${BASE_URL}/user`, {
    //             headers: { Authorization: `Bearer ${globalState.authorizationToken}` },
    //         }); 
    //         console.log(response)
    //         setLoadingData(false);
    //         // setUserData(response.data);
    //         globalState.currentUser = {
    //             firstName: response.data.firstName,
    //             lastName: response.data.lastName,
    //             email: response.data.email,
    //             company: response.data.company
    //         };
    //     } catch (error) {
    //         setLoadingData(false);
    //         setErrorOccured(true);
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     getProfileData()
    // },[])
    // useEffect(() => {
    //     if (checkedLocalStorage && globalState.authorizationToken !== "") {
    //         getProfileData();
    //     }
    //     if (checkedLocalStorage && globalState.authorizationToken == "") {
    //         router.push("/onboarding");
    //     }
    // }, [checkedLocalStorage]);

    if(!globalState.authorizationToken) {
        return (
            <div className="flex">
                <div className="hidden sm:block sm:w-[30vw] mdx2:w-[20vw] ">
                    <div className="h-screen bg-[#161529]">
                        <div className=" mx-auto pt-8 ">
                            <Logo2 />
                        </div>
                    </div>
                </div>
                <div className="w-[100vw] sm:w-[70vw] mdx2:w-[80vw]">
                    <div className=" w-full bg-white h-10 border " />
                    <main className="bg-[#F8F8FA] flex flex-col justify-center items-center h-[90.6vh] pt-5 pb-5 px-4 overflow-auto ">
                        <h1 className="text-[25px]">Not Logged In</h1>
                        <Link href={"#"} className="w-[170px] mt-3">
                            <Button>Login </Button>
                        </Link>
                    </main>
                </div>
            </div>
        )
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                    <main className="bg-[#F8F8FA] h-[90.6vh] pt-5 pb-5 px-4 overflow-auto ">
                        {children}
                    </main>
                </div>
            </div>
        </LocalizationProvider>
    )
}

export default DashboardLayout
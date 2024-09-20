import Image from "next/image"
import Logo from "@/components/primary/Logo"
import Line from "../../../../../public/svgs/Line 1.svg"
import Button from "@/components/primary/Button"
import Google from "../../../../../public/svgs/icons_google.svg"
import { FC, FormEventHandler, useState } from "react"
import { sectionType } from "../rightContainer"
import Input from "@/components/primary/input"
import Microsoft from "../../../../../public/svgs/microsoft_icon.svg"
import { BASE_URL, globalState, useAuthSignInMutation } from "../../../../../api-feature/apiSlice"
import { authAccountType } from "@/pages/onboarding"
import ActivityIndicator from "@/components/secondary/ActivityIndicator"
import { useRouter } from "next/router"
import axios from "axios"
import { useContext } from "react"
import { appContext } from "@/components/contexts/appContext"

interface props {
    changeSection: (newSection: sectionType) => void
    accountType: authAccountType
}

const Signin:FC<props> = ({changeSection, accountType}) => {
    const {loggedIn, setLoggedIn, saveAuthorizationTokenWithExpiry, checkedLocalStorage} = useContext(appContext)
    const router = useRouter()
    const [authSignin] = useAuthSignInMutation()
    const [loginRequestStatus, setLoginRequestStatus] = useState("idle");
    const [displayLoading, setDisplayLoading] = useState(false);
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    })
    const [errorDetails, setErrorDetails] = useState({
        display: false,
        message: "",
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.name
        const value = e.target.value
        setLoginDetails(prev => ({...prev, [name]: value}))
    }

    const getProfileData = async () => {
        console.log("GETTING PROFILE DATA")
        try {
            console.log(globalState.authorizationToken)
            const response = await axios.get(`${BASE_URL}/user`, {
                headers: { Authorization: `Bearer ${globalState.authorizationToken}` },
            }); 
            setDisplayLoading(false)
            setLoginRequestStatus("idle")
            console.log(response)
            // globalState.currentUser = {
            //     firstName: response.data.firstName,
            //     lastName: response.data.lastName,
            //     email: response.data.email,
            //     company: response.data.company
            // };
            router.push("/dashboard")
        } catch (error) {
            setDisplayLoading(false)
            setLoginRequestStatus("idle")
            console.error(error);
            // @ts-ignore
            if (error?.response?.data?.message === "No company selected") {
                router.push("/company-setup")
            // @ts-ignore
            } else if (error?.response?.data?.message === "Please verify your email") {
                changeSection("checkmail")
            } else {
                
            }
        } 
    }

    const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (loginRequestStatus == "idle") {
            setLoginRequestStatus("pending")
            setDisplayLoading(true);
            try {
                authSignin({...loginDetails}).unwrap()
                    .then(fulfilled => {
                        console.log(fulfilled)
                        globalState.authorizationToken = fulfilled.data.accessToken
                        // setLoggedIn(true)
                        // saveAuthorizationTokenWithExpiry("durket-token", fulfilled.data.accessToken, 60 )
                        getProfileData()
                    })
                    .catch(rejected => {
                        setDisplayLoading(false)
                        setLoginRequestStatus("idle")
                        console.log(rejected)
                    })
            } catch (err) {
                console.error(err)
                setDisplayLoading(false)
                setLoginRequestStatus("idle")
            }
        }
    }

    return (
        <>
            <Logo />
            <h1 className="text-[1.5em] sm:text-[2em] mt-3 font-medium">Welcome Back</h1>
            <div className="flex gap-10 mt-7">
                <div className="hover:bg-[#B3387F] hover:text-white transition-all duration-[0.3s] cursor-pointer border text-[0.9em] text-[#333333] rounded-md font-normal border-[#D4D4D4] flex-1 text-center py-2 flex justify-center items-center gap-2">
                    <Google />
                    <p>Google</p>
                    <div className="absolute z-[1]"></div>
                </div>
                <div className="cursor-pointer hover:bg-[#B3387F] hover:text-white transition-all duration-[0.3s] border text-[0.9em] text-[#333333] rounded-md font-normal border-[#D4D4D4] flex-1 text-center py-2 flex justify-center items-center gap-2">
                    <Microsoft />
                    <p>Microsoft</p>
                </div>
            </div>
            <div className="py-8 flex justify-center items-center gap-4">
                <div className="border-[0.1px] w-full"></div>
                <p>Or</p>
                <div className="border-[0.1px] w-full"></div>
            </div>
            <form className="mb-6" onSubmit={handleSignin}>
                <Input 
                    label={<label className="text-[#333333] font-medium text-[0.9em]">Email</label>} 
                    value={loginDetails.email}
                    onChange={handleOnChange}
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                />

                <Input 
                    value={loginDetails.password}
                    onChange={handleOnChange}
                    label={
                        <div className="flex w-full justify-between">
                            <label className="text-[#333333] font-medium text-[0.9em]" >Password</label>
                            <label onClick={() => changeSection("forgotpassword")} className=" text-[#5272EA] cursor-pointer font-medium text-[0.9em]">Forget Password</label>
                        </div>
                    } 
                    placeholder="Enter password"
                    type="password"
                    name="password"
                />
                <Button 
                    type="submit" 
                    disabled={!loginDetails.email || !loginDetails.password} 
                    className="mt-1 h-[2.68em]"
                >
                    {displayLoading ? <ActivityIndicator /> : "Sign in"}
                </Button>
            </form>
            
            <p className="mt-6 text-[0.85em] text-[#475467] font-normal">Don't have an account <span onClick={() => changeSection("signup")} className="cursor-pointer text-[#5272EA] font-medium">Sign up</span></p>
            
        </>
    )
}

export default Signin

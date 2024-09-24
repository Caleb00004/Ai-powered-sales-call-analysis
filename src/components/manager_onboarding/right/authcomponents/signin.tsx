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
import toast from "react-hot-toast"
import { TOKEN_NAME } from "../../../../../api-feature/types"

interface props {
    changeSection: (newSection: sectionType) => void
    accountType: authAccountType
}

const Signin:FC<props> = ({changeSection, accountType}) => {
    const {loggedIn, setLoggedIn, saveAuthorizationTokenWithExpiry, checkedLocalStorage} = useContext(appContext)
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()
    const {setAccountType} = useContext(appContext)
    const [authSignin] = useAuthSignInMutation()
    const [loginRequestStatus, setLoginRequestStatus] = useState("idle");
    const [displayLoading, setDisplayLoading] = useState(false);
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    })

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.name
        const value = e.target.value
        setLoginDetails(prev => ({...prev, [name]: value}))
    }

    const getProfileData = async () => {
        try {
            console.log(globalState.authorizationToken)
            const response = await axios.get(`${BASE_URL}/user`, {
                headers: { Authorization: `Bearer ${globalState.authorizationToken}` },
            }); 
            setDisplayLoading(false)
            setLoginRequestStatus("idle")
            const data = response.data.data
            globalState.account_type = data.company.role.toLowerCase()
            setAccountType(data.company.role.toLowerCase())
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
                console.error(error)
                toast.error("Error getting Profile, reload page")
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
                        globalState.authorizationToken = fulfilled.data.accessToken
                        setLoggedIn(true)
                        saveAuthorizationTokenWithExpiry(TOKEN_NAME, fulfilled.data.accessToken, 60 )
                        toast.success("Logged In, please wait")
                        getProfileData() 
                    })
                    .catch(rejected => {
                        setDisplayLoading(false)
                        setLoginRequestStatus("idle")
                        console.error(rejected)
                        if (rejected.status === 400) {
                            toast.error(rejected?.data?.message)
                            return
                        } else {
                            toast.error("Error Occured, Refresh Page") 
                            return
                        }
                    })
            } catch (err) {
                console.error(err)
                setDisplayLoading(false)
                setLoginRequestStatus("idle")
            }
        }
    }

    
    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
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
                    password
                    handleShowPassword={handleShowPassword}
                    type={showPassword ? "text" : "password"}
                    value={loginDetails.password}
                    onChange={handleOnChange}
                    label={
                        <div className="flex w-full justify-between">
                            <label className="text-[#333333] font-medium text-[0.9em]" >Password</label>
                            <label onClick={() => changeSection("forgotpassword")} className=" text-[#5272EA] cursor-pointer font-medium text-[0.9em]">Forget Password</label>
                        </div>
                    } 
                    placeholder="Enter password"
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

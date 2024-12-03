import Button from "@/components/primary/Button"
import Input from "@/components/primary/input"
import { ReactEventHandler, useState, useContext, FC } from "react"
import { isStrongPassword } from "@/components/util/helperFunctions"
import { appContext } from "@/components/contexts/appContext"
import ActivityIndicator from "@/components/secondary/ActivityIndicator"
import { profileType } from "../../../../api-feature/types"
import toast from "react-hot-toast"
import UserIcon from "../../../../public/svgs/user-icon.svg"

interface props {
    data: profileType
}

const ProfileSettings:FC<props> = ({data}) => {
    const CURRENTDETAILS = {firstName: data?.firstName, lastName: data?.lastName}
    const [requestStatus, setRequestStatus] = useState("idle" as "idle" | "pending");
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [passwordLoading, setPasswordLoading] = useState(false)
    const [otherSettings, setOtherSettings] = useState({language: "", notification: "on"})
    const [passwordsMatch, setPassWordsMatch] = useState(true)
    const [details, setDetails] = useState({
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        // phone: data?.phone
    })
    const [passwordsDetails, setPasswordDetails] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const handleUpdateDetails = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {value, name} = e.target
        setDetails(prev => ({...prev, [name]: value}))
    }

    const updatePasswordDetails = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {value, name} = e.target
        setPasswordDetails(prev => ({...prev, [name]: value}))
    }

    const submitUpdateDetails = async () => {
        if (requestStatus === "idle") {
            try {
                setRequestStatus("pending")
                setDetailsLoading(true)
                // @ts-ignore
                await updateDetails({firstName: details.firstName, lastName: details.lastName}).unwrap()
                    // @ts-ignore
                    .then(fulfilled => {
                        console.log(fulfilled)
                        toast.success("Details Updated")
                    })
                    // @ts-ignore
                    .catch(rejected => {
                        console.log(rejected)
                        toast.error("work in progress")
                    })
            } catch(error) {
                console.error(error)
                toast.error("work in progress")
            } finally {
                setRequestStatus("idle")
                setDetailsLoading(false)
            }
        }
    }

    const handleSubmitPassword = async () => {
        if (passwordsDetails.newPassword !== passwordsDetails.confirmPassword) {
            setPassWordsMatch(false)
            return
        } else {
            setPassWordsMatch(true)
        }

        if (!isStrongPassword(passwordsDetails.newPassword)) {
            toast.error("Password must be at least 6 characters long and contain a capital letter, number and a special character", {duration: 5000})
            return
        }

        if (requestStatus === "idle") {
            try {
                setRequestStatus("pending")
                setPasswordLoading(true)
                // @ts-ignore
                await updatePassword({oldPassword: passwordsDetails.currentPassword, newPassword: passwordsDetails.newPassword}).unwrap()
                    // @ts-ignore
                    .then(fulfilled => {
                        console.log(fulfilled)
                        toast.success("Password Updated")
                    })
                    // @ts-ignore
                    .catch(rejected => {
                        console.log(rejected)
                        toast.error("work in progress")
                    })
            } catch(error) {
                console.error(error)
                toast.error("work in progress")
            } finally {
                setRequestStatus("idle")
                setPasswordLoading(false)
            }
        }

    }

    return (
        <div>
            <div style={{boxShadow: "0px 0px 8px 1px rgba(187, 185, 185, 0.25)"}} className="bg-white px-5 sm:px-7 py-6 mb-6 rounded-md text-left ">
                <div className="rounded-full h-[100px] w-[100px] mx-auto overflow-hidden">
                    <UserIcon className="scale-[1.17]" />
                </div>
                <div className="mt-5 text-[14px]">
                    <div className="flex flex-col mdx2:flex-row justify-between gap-1 mdx2:gap-5 mdx5:gap-10">
                        <Input 
                            label={<p className="text-[#8A8A8A]">First name</p>} 
                            value={details.firstName} onChange={handleUpdateDetails} 
                            placeholder="first name" 
                            type="text" 
                            name="firstName"  
                        />
                        <Input 
                            label={<p className="text-[#8A8A8A]">Last name</p>} 
                            value={details.lastName} 
                            onChange={handleUpdateDetails} 
                            placeholder="last name" 
                            type="text" 
                            name="lastName"  
                        />
                    </div>
                    <div className="flex flex-col mdx2:flex-row justify-between gap-1 mdx2:gap-5 mdx5:gap-10">
                        <Input 
                            label={<p className="text-[#8A8A8A]">Email</p>} 
                            className="disabled: text-slate-400" 
                            disabled 
                            value={details.email} 
                            onChange={() => {}} 
                            placeholder="Email" 
                            type="email" 
                            name="email"  
                        />
                        {/* <Input 
                            label={<p className="text-[#8A8A8A]">Phone</p>} 
                            className="disabled: text-slate-400" 
                            disabled 
                            value={details.phone ?? "null"} 
                            onChange={() => {}} 
                            placeholder="Phone Number" 
                            name="phone"  
                        /> */}
                    </div>
                    <div className="w-[170px]">
                        <Button 
                            onClick={submitUpdateDetails} 
                            disabled={(CURRENTDETAILS.firstName === details.firstName && CURRENTDETAILS.lastName === details.lastName) || requestStatus !== "idle"} 
                            className="text-[15px] rounded-md h-[2.64em]"
                        >
                            {detailsLoading ? <ActivityIndicator /> : "Save"}
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-white px-5 sm:px-7 py-6 mb-6 rounded-md text-left ">
                <h2 className="text-[#333333] text-[18px] ">Change Password</h2>
                <p className="text-[#333333] mt-1">Minimum 8 Characters, Including one Number, One Special Characters </p>

                <div className="text-[14px] mt-3">
                    <div className="flex flex-col mdx2:flex-row justify-between gap-1 mdx2:gap-5 mdx5:gap-10">
                        <Input 
                            label={<p className="text-[#8A8A8A]">Current password</p>} 
                            value={passwordsDetails.currentPassword} 
                            onChange={updatePasswordDetails} 
                            placeholder="Enter current password" 
                            type="password" 
                            name="currentPassword"  
                        />
                        <Input 
                            label={<p className="text-[#8A8A8A]">New password</p>} 
                            value={passwordsDetails.newPassword} 
                            onChange={updatePasswordDetails} 
                            placeholder="Enter new password" 
                            type="password" 
                            name="newPassword"  
                        />
                    </div>
                    <div className="flex flex-col mdx2:flex-row justify-between gap-1 mdx2:gap-5 mdx5:gap-10">
                        <Input 
                            className="flex-1" 
                            label={<p className="text-[#8A8A8A]">Confirm password</p>} 
                            value={passwordsDetails.confirmPassword} 
                            onChange={updatePasswordDetails} 
                            placeholder="Confirm password" 
                            type="password" 
                            name="confirmPassword"  
                        />
                        <div className="flex-1"></div>
                    </div>
                    {!passwordsMatch && <p className="mr-auto mb-2 text-[0.9em] italic text-red-600">Passwords don't match</p>}

                    <div className="w-[170px]">
                        <Button 
                            onClick={handleSubmitPassword} 
                            disabled={(!passwordsDetails.currentPassword || !passwordsDetails.confirmPassword) || requestStatus !== "idle"} 
                            className="text-[15px] rounded-md disabled:bg-slate-600"
                        >
                            {passwordLoading ? <ActivityIndicator /> : "Confirm and change"}
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-white px-5 sm:px-7 py-6 mb-6 rounded-md text-left ">
                <h2 className="text-[#333333] text-[18px]">Other Settings</h2>

                <div className="text-[14px] mt-3">
                    <div className="flex flex-col mdx2:flex-row justify-between gap-1 mdx2:gap-5 mdx5:gap-10">
                        <Input 
                            select 
                            options={[{value: 1, name:"English"}, {value: 2, name: "French"}, {value: 3, name: "spanish"}]} 
                            label={<p className="text-[#8A8A8A]">Language</p>} 
                            value={otherSettings.language}
                            onChange={(e) => setOtherSettings(prev => ({...prev, language: e.target.value}))} 
                            placeholder="Select language" 
                            name="language"  
                        />
                        <Input 
                            select 
                            options={[{value: 1, name: "on"}, {value: 2, name: "off"}]} 
                            label={<p className="text-[#8A8A8A]">Notifications</p>} 
                            value={otherSettings.notification} 
                            onChange={(e) => (setOtherSettings(prev => ({...prev, notification: e.target.value})))} 
                            placeholder="choose notification" 
                            name="notifications"  
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileSettings
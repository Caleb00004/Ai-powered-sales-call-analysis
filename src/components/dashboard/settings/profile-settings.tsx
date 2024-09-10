import Button from "@/components/primary/Button"
import Input from "@/components/primary/input"
import { ReactEventHandler, useState, useContext } from "react"
import { isStrongPassword } from "@/components/util/helperFunctions"
import { appContext } from "@/components/contexts/appContext"
import ActivityIndicator from "@/components/secondary/ActivityIndicator"

const ProfileSettings = () => {
    const {openToast} = useContext(appContext)
    const [requestStatus, setRequestStatus] = useState("idle");
    const [displayLoading, setDisplayLoading] = useState(false);
    const [passwordsMatch, setPassWordsMatch] = useState(true)
    const [details, setDetails] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com",
        phone: "08485893920"
    })
    const [passwordsDetails, setPasswordDetails] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const updateDetails = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {value, name} = e.target
        setDetails(prev => ({...prev, [name]: value}))
    }

    const updatePasswordDetails = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {value, name} = e.target
        setPasswordDetails(prev => ({...prev, [name]: value}))
    }

    const handleSubmitPassword = () => {
        if (passwordsDetails.newPassword !== passwordsDetails.confirmPassword) {
            setPassWordsMatch(false)
            return
        } else {
            setPassWordsMatch(true)
        }

        if (!isStrongPassword(passwordsDetails.newPassword)) {
            openToast(5000, "Password must be at least 6 characters long and contain a capital letter, number and a special character")
            return
        }
    }

    return (
        <div>
            <div style={{boxShadow: "0px 0px 8px 1px rgba(187, 185, 185, 0.25)"}} className="bg-white px-5 sm:px-7 py-6 mb-6 rounded-md text-left ">
                <div className="bg-slate-300 rounded-full h-[100px] w-[100px] mx-auto">
                </div>
                <div className="mt-5 text-[14px]">
                    <div className="flex flex-col mdx2:flex-row justify-between gap-1 mdx2:gap-5 mdx5:gap-10">
                        <Input label={<p className="text-[#8A8A8A]">First name</p>} value={details.firstName} onChange={updateDetails} placeholder="first name" type="text" name="firstName"  />
                        <Input label={<p className="text-[#8A8A8A]">Last name</p>} value={details.lastName} onChange={updateDetails} placeholder="last name" type="text" name="lastName"  />
                    </div>
                    <div className="flex flex-col mdx2:flex-row justify-between gap-1 mdx2:gap-5 mdx5:gap-10">
                        <Input label={<p className="text-[#8A8A8A]">Email</p>} disabled value={details.email} onChange={() => {}} placeholder="Email" type="email" name="email"  />
                        <Input label={<p className="text-[#8A8A8A]">Phone</p>} disabled value={details.phone} onChange={() => {}} placeholder="Phone Number" name="phone"  />
                    </div>
                    <div className="w-[170px]">
                        <Button className="text-[15px] rounded-md">Save</Button>
                    </div>
                </div>
            </div>

            <div className="bg-white px-5 sm:px-7 py-6 mb-6 rounded-md text-left ">
                <h2 className="text-[#333333] text-[18px] ">Change Password</h2>
                <p className="text-[#333333] mt-1">Minimum 8 Characters, Including one Number, 0ne Special Characters </p>

                <div className="text-[14px] mt-3">
                    <div className="flex flex-col mdx2:flex-row justify-between gap-1 mdx2:gap-5 mdx5:gap-10">
                        <Input label={<p className="text-[#8A8A8A]">Current password</p>} value={passwordsDetails.currentPassword} onChange={updatePasswordDetails} placeholder="Enter current password" type="password" name="currentPassword"  />
                        <Input label={<p className="text-[#8A8A8A]">New password</p>} value={passwordsDetails.newPassword} onChange={updatePasswordDetails} placeholder="Enter new password" type="password" name="newPassword"  />
                    </div>
                    <div className="flex flex-col mdx2:flex-row justify-between gap-1 mdx2:gap-5 mdx5:gap-10">
                        <Input className="flex-1" label={<p className="text-[#8A8A8A]">Confirm password</p>} value={passwordsDetails.confirmPassword} onChange={updatePasswordDetails} placeholder="Confirm password" type="password" name="confirmPassword"  />
                        <div className="flex-1"></div>
                    </div>
                    {!passwordsMatch && <p className="mr-auto mb-2 text-[0.9em] italic text-red-600">Passwords don't match</p>}

                    <div className="w-[170px]">
                        <Button onClick={handleSubmitPassword} className="text-[15px] rounded-md">Confirm and change</Button>
                    </div>
                </div>
            </div>

            <div className="bg-white px-5 sm:px-7 py-6 mb-6 rounded-md text-left ">
                <h2 className="text-[#333333] text-[18px]">Other Settings</h2>

                <div className="text-[14px] mt-3">
                    <div className="flex flex-col mdx2:flex-row justify-between gap-1 mdx2:gap-5 mdx5:gap-10">
                        <Input select options={["English", "French", "spanish"]} label={<p className="text-[#8A8A8A]">Language</p>} value="" onChange={() => {}} placeholder="Enter current password" name="language"  />
                        <Input  select options={["On", "Off"]} label={<p className="text-[#8A8A8A]">Notifications</p>} value="" onChange={() => {}} placeholder="Enter new password" name="notifications"  />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileSettings
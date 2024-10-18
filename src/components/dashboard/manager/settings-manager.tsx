import { useState } from "react"
import ProfileSettings from "../settings/profile-settings"
import SystemSettings from "../settings/system-settings"
import AuditTrail from "../settings/audit-trial"
import { useContext } from "react"
import { appContext } from "@/components/contexts/appContext"

const SettingsManager = () => {
    const { accountType: account_type, userProfile} = useContext(appContext)
    const [currentSection, setCurrentSection] = useState<"profile" | "system" | "audit-trial">("profile")

    const handleSwitchSection = (newSection: "profile" | "system" | "audit-trial") => {
        setCurrentSection(newSection)
    }

    return (
        <div>
            <div className="flex items-center gap-1">
                <h1 className="text-[1.5em] font-[600] text-[#333333]">Settings</h1>
            </div>

            <div className={`flex flex-col mdx2:flex-row gap-4 text-center mt-3`}>
                {account_type !== "admin" && <div style={{boxShadow: "0px 0px 8px 1px rgba(187, 185, 185, 0.25)"}} className="bg-white rounded-md w-[100%] mdx2:w-[20em] flex flex-col h-min">
                    <div className="py-4">
                        <div className="bg-slate-300 rounded-full h-14 w-14 mx-auto">
                        </div>
                        <p>Lindsey lohan</p>
                    </div>
                    <p onClick={() => handleSwitchSection("profile")} className={`${currentSection === "profile" ? "bg-[#077AB233]" : "bg-transparent"} border-b border-b-[#0000000D] py-3 hover:bg-[#077AB233] cursor-pointer`}>My Profile</p>
                    {(account_type === "manager" || account_type === "owner") && 
                        <>
                            <p onClick={() => handleSwitchSection("system")} className={`${currentSection === "system" ? "bg-[#077AB233]" : "bg-transparent"} border-b border-b-[#0000000D] py-3 hover:bg-[#077AB233] cursor-pointer`}>System Settings</p>
                            <p onClick={() => handleSwitchSection("audit-trial")} className={`${currentSection === "audit-trial" ? "bg-[#077AB233]" : "bg-transparent"} border-b border-b-[#0000000D] py-3 hover:bg-[#077AB233] cursor-pointer`}>Audit Trial</p>    
                        </>
                    }
                </div>}
                <div className="w-full ">
                    {currentSection === "profile" && <ProfileSettings data={userProfile} />}
                    {currentSection === "system" && <SystemSettings data={userProfile} />}
                    {currentSection === "audit-trial" && <AuditTrail />}
                </div>
            </div>
        </div>
    )
}

export default SettingsManager
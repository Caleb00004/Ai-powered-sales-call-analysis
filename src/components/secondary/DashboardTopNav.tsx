import SearchIcon from "../../../public/svgs/search-icon.svg"
import HelpIcon from "../../../public/svgs/help-icon.svg"
import NotificationIcon from "../../../public/svgs/Notification 2.svg"
import DropdownIcon from "../../../public/svgs/dropdown-icon.svg"

const TopNav = () => {
    return (
        <div className="bg-white px-4 py-4 flex justify-between border-b border-b[#D4D4D4]">
            <div className=" bg-[#F8F8FA] rounded-md border w-[20em] py-1 px-3 font-light  relative">
                <SearchIcon className="absolute right-3 top-[19%]" />
                <input
                    placeholder="Search..."
                    type="text"
                    className=""
                />
            </div>
            <div className="flex gap-3 items-center">
                <div className="border border-[#D4D4D4] rounded-md p-1">
                    <HelpIcon />
                </div>
                <div className="border border-[#D4D4D4] rounded-md p-1">
                    <NotificationIcon />
                </div>
                <div className="flex gap-1 items-center">
                    <div className="bg-slate-600 w-8 h-8 rounded-full">
                    </div>
                    <DropdownIcon />
                </div>

            </div>
        </div>
    )
}

export default TopNav
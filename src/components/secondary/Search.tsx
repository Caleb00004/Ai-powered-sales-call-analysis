import { FC } from "react"
import SearchIcon from "../../../public/svgs/search-icon.svg"

interface props {
    className?: string
}

const Search:FC<props> = ({className}) => {
    return (
        <div className={` bg-[#F8F8FA] rounded-md border w-[20em] py-1 px-3 font-light  relative ${className}`}>
            <SearchIcon className="absolute right-3 top-[19%]" />
            <input
                placeholder="Search..."
                type="text"
                className=""
            />
        </div>
    )
}

export default Search
import { FC, ReactNode, useState } from "react";
import MoreIcon from "../../../public/svgs/more-icon.svg"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

interface props {
    data: {},
    options: ReactNode
}


const TableActionsMenu:FC<props> = ({data, options}) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget as HTMLElement);
        console.log(data)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleOpen}>
                 <div className=" cursor-pointer h-[30px] flex items-center ">
                    <MoreIcon className=" rotate-[90deg] scale-[0.7]" />
                </div>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <div onClick={handleClose}>{options}</div>
                {/* <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem> */}
            </Menu>
        </>
    );
};

export default TableActionsMenu
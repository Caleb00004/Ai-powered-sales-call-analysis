import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react"
import Button from "../primary/Button"
import Table from "../secondary/Table"
import { TeamsData } from "@/testData"
import { GridColDef } from "@mui/x-data-grid"
import TableActionsMenu from "../secondary/TableActionsMenu"
import { MenuItem } from "@mui/material"
import Modal from "../primary/Modal"
import Input from "../primary/input"
import Xicon from "../../../public/svgs/x-icon.svg"

type formType = {
    name: string;
    email: string;
    role: string;
    permission: string[]
}

type modalType = "add-team" | "Edit"

const TeamsComponent = () => {
    const rows = TeamsData
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState("")
    const [modalOpen, setModalOpen] = useState(false)
    const [modalType, setModalType] = useState("" as modalType)
    const [editDetails, setEditDetails] = useState({
        role: "",
        permission: ""
    })
    const [createTeamDetails, setCreateTeamDetails] = useState<formType>({
        name: "",
        email: "",
        role: "",
        permission: []
    })

    useEffect(() => {
        // Function to update screen size state
        const updateScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 940);
        };
        // Initial check
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);


    const closeModal = () => {
        setModalOpen(false);
        setCreateTeamDetails({
            name: "",
            email: "",
            role: "",
            permission: []
        })
    };

    const openModal = (string: modalType) => {
        setModalOpen(true);
        setModalType(string)
    };

    const filteredRows = useMemo(() => {
        return rows.filter(row =>
            row.name.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [rows, searchInput]);

    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    },[]);

    const columns: GridColDef[] = useMemo(() => {
        return [
            {field: "name", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                cellClassName: " text-[#333333] font-[500]", headerName: "Name/Email", headerClassName: "bg-[#C32782]",  
                renderCell: (params) => {
                    const {name, email} = params.row
                    // console.log(params)
                    return (
                        <div className="flex flex-col">
                            <p className="leading-3 mt-5">{name}</p>
                            <p className="leading-6 text-[12px]">{email}</p>
                        </div>
                    )
                },
            },
            {field: "role", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200, 
                cellClassName: " text-[#333333] font-[500]", headerName: "Role", headerClassName: "bg-[#C32782]"},
            {field: "department", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200, 
                cellClassName: " text-[#333333] font-[500]", headerName: "Department", headerClassName: "bg-[#C32782]"},
            {field: "status", 
                flex: isLargeScreen ? 0.5 : undefined, 
                width: isLargeScreen ? undefined : 150,
                cellClassName: " text-[#333333] font-[500]", headerAlign: "center", headerName: "Status", headerClassName: "bg-[#C32782]",  renderCell: (params) => {
                return (
                    <div className="flex justify-center flex-col items-center" >
                        <p className={`${params.value.toLowerCase() === "active" ? "bg-[#00FFB01A] text-[#05875F]" : "bg-[#E189331A] text-[#E18933]"} bg-[#00FFB01A] text-[13px] text-[#05875F] text-center flex justify-center items-center h-[30px] mt-3 rounded-lg w-[80px]`}>{params.value}</p>
                    </div>
                )
            }},
            {
                field: 'actions',
                headerClassName: "bg-[#C32782]",
                headerName: 'Actions',
                renderCell: (params) => (
                    <TableActionsMenu options={[
                        <MenuItem onClick={() => (openModal("Edit"), setEditDetails({role: params.row.role, permission: params.row.permission}))} >Edit</MenuItem>,
                    ]} data={params} />
                ),
                // width: 10,
                flex: isLargeScreen ? 0.3 : undefined, 
                width: isLargeScreen ? undefined : 120,
                sortable: false,
                filterable: false,
            },
        ]
    },[isLargeScreen]) 

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name as keyof formType
        const value = e.target.value
        
        if (key === "permission") {
            setCreateTeamDetails((prev) => {
                if (!prev.permission.includes(value)) {
                    return {
                        ...prev,
                        [key]: [...prev.permission, value],
                    };
                }
                return prev;
            });
            return;
        }

        setCreateTeamDetails(prev => ({...prev, [key]: value}))
    }, [])

     const handleRemovePermission = (permissionToRemove: string) => {
        setCreateTeamDetails(prev => ({
            ...prev,
            permission: prev.permission.filter(permission => permission !== permissionToRemove)
        }));
    }

    const handleCreateTeam = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(createTeamDetails)
    }


    return (
        <div>
            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
            >
                {modalType === "add-team" && <form onSubmit={handleCreateTeam} className="pt-7 pb-12 px-14">
                    <p className="text-center text-[24px] text-[#333333] font-[500] pb-8">Create New Team</p>
                    <Input 
                        className="mb-[8px]"
                        value={createTeamDetails.name}
                        onChange={handleOnChange}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Name</label>} 
                        placeholder="Enter name"
                        type="text"
                        name="name"
                    />
                    <Input 
                        className="mb-[8px]"
                        value={createTeamDetails.email}
                        onChange={handleOnChange}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Email</label>} 
                        placeholder="Enter email"
                        type="email"
                        name="email"
                    />
                    <Input 
                        className="mb-[8px]"
                        value={createTeamDetails.role}
                        onChange={handleOnChange}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Role</label>} 
                        placeholder="Enter team role e.g Project Manager"
                        type="text"
                        name="role"
                    />
                    <Input 
                        className="mb-[8px]"
                        value=""
                        // value={createTeamDetails.permission}
                        onChange={handleOnChange}
                        select
                        options={["Sales rep", "Manager"]}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Permission</label>} 
                        placeholder="Enter Permission"
                        type="text"
                        name="permission"
                    />
                    <div className="flex gap-2 flex-wrap"> 
                        {createTeamDetails.permission.map(item => (
                            <p className="bg-[#C3278126] flex items-center gap-3 py-1 px-3 rounded-3xl text-[14px] text-[#333333]"><span className=" -translate-y-[1px]">{item}</span> <Xicon onClick={() => handleRemovePermission(item)} className="scale-[0.8]" /></p>
                        ))}
                    </div>
                    <Button type="submit" className="mt-3">
                        Save
                    </Button>
                </form>}
                {modalType === "Edit" && 
                    <div className="pt-7 pb-12 px-14">
                        <p className="text-center text-[24px] text-[#333333] font-[500] pb-8">Edit Role and Permissions</p>
                        <Input 
                            className="mb-[8px]"
                            value={editDetails.role}
                            onChange={handleOnChange}
                            label={<label className="text-[#333333] font-medium text-[0.9em]">Role</label>} 
                            placeholder="Enter team role e.g Project Manager"
                            type="text"
                            name="role"
                        />
                        <Input 
                            className="mb-[8px]"
                            value=""
                            onChange={handleOnChange}
                            select
                            options={["Sales rep", "Manager"]}
                            label={<label className="text-[#333333] font-medium text-[0.9em]">Permission</label>} 
                            placeholder="Enter Permission"
                            type="text"
                            name="permission"
                        />
                        <Button type="submit" className="mt-3">
                            Save
                        </Button>
                    </div>
                }

            </Modal>

            <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-[600] text-[#333333]">Team Management</h1>
                <div className="w-[140px]">
                    <Button onClick={() => openModal("add-team")} className="py-[6px] text-[13px]">Add New Team</Button>
                </div>
            </div>

            <br />

            <Table 
                filteredRows={filteredRows}
                columns={columns}
                searchInput={searchInput}
                handleSearchChange={handleSearchChange}
            />
        </div>
    )
}

export default TeamsComponent
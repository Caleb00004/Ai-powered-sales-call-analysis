import { ChangeEvent, useCallback, useEffect, useMemo, useState, useContext, useLayoutEffect } from "react"
import Button from "@/components/primary/Button"
import Table from "@/components/secondary/Table"
import { GridColDef } from "@mui/x-data-grid"
import TableActionsMenu from "@/components/secondary/TableActionsMenu"
import { MenuItem } from "@mui/material"
import Modal from "@/components/primary/Modal"
import Input from "@/components/primary/input"
import Xicon from "../../../../public/svgs/x-icon.svg"
import { usePostInviteTeamMutation } from "../../../../api-feature/apiSlice"
import toast from "react-hot-toast"
import { dataContext } from "@/components/contexts/dataContext"
import ActivityIndicator from "@/components/secondary/ActivityIndicator"

type formType = {
    firstName: string;
    lastName: string;
    email: string;
    role: number[];
    position: string
}

type modalType = "add-team" | "Edit"

const TeamsManager = () => {
    const {teamRolesData, teamRolesDataStatus, teamData, teamDataStatus} = useContext(dataContext)
    const [loading, setLoading] = useState(false)
    const [createTeam] = usePostInviteTeamMutation()
    // const rows = TeamsData
    const rows = teamData
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState("")
    const [modalOpen, setModalOpen] = useState(false)
    const [modalType, setModalType] = useState("" as modalType)
    const [editDetails, setEditDetails] = useState({
        role: [],
        position: ""
    })
    const [createTeamDetails, setCreateTeamDetails] = useState<formType>({
        firstName: "",
        lastName: "",
        email: "",
        role: [],
        position: ""
    })

    useEffect(() => {
        teamDataStatus === "rejected" && toast.error("Error occured Fetching data")
    },[teamDataStatus])

    useLayoutEffect(() => {
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
            firstName: "",
            lastName: "",
            email: "",
            role: [],
            position: ""
        })
    };

    const openModal = (string: modalType) => {
        setModalOpen(true);
        setModalType(string)
    };
    
    console.log(rows)

    const filteredRows = useMemo(() => {
        return rows?.filter(row =>
            row.firstName.toLowerCase().includes(searchInput.toLowerCase())
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
                cellClassName: " text-[#333333] font-[500]", headerName: "Name/Email",  
                renderCell: (params) => {
                    const {firstName, lastName, email} = params.row
                    return (
                        <div className="flex flex-col">
                            <p className="leading-3 mt-5">{firstName} {lastName}</p>
                            <p className="leading-6 text-[12px]">{email}</p>
                        </div>
                    )
                },
            },
            {field: "position", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200, 
                cellClassName: " text-[#333333] font-[500]", headerName: "Position"},
            {field: "role", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200, 
                cellClassName: " text-[#333333] font-[500]", headerName: "Role",
                renderCell: (params) => {
                    const {roles} = params.row
                    return (
                        <div className="flex flex-col">
                            {roles?.map((item: string) => (
                                <div className=" my-auto h-4">
                                   <p className="leading-3 mt-8">{item}</p>
                                </div>
                            ))}
                        </div>
                    )
                },

            },
            {
                field: 'actions',
                headerName: 'Actions',
                renderCell: (params) => (
                    <div>
                        {params?.row?.roles[0] !== "Owner" && <TableActionsMenu options={[
                            <MenuItem onClick={() => (openModal("Edit"), console.log(params), setEditDetails({role: params.row.roles, position: params.row.position}))} >Edit</MenuItem>,
                        ]} data={params} />}
                    </div>
                ),
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

        if (key === "role") {
            setCreateTeamDetails((prev) => {
                if (!prev.role.includes(Number(value))) {
                    return {
                        ...prev,
                        [key]: [...prev.role, Number(value)],
                    };
                }
                return prev;
            });
            return;
        }

        setCreateTeamDetails(prev => ({...prev, [key]: value}))
    }, [])

    const handleRemoveRole = (roleToRemove: number) => {
        setCreateTeamDetails(prev => ({
            ...prev,
            role: prev.role.filter(role => role !== roleToRemove)
        }));
    }

    const handleCreateTeam = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const {role, ...rest} = createTeamDetails        
        createTeam({...rest, roleIds: createTeamDetails.role}).unwrap()
            .then(fulfilled => {
                setLoading(false)
                toast.success("Invite Sent")
                closeModal()
            })
            .catch(rejected => {
                toast.error("Error occured")
                setLoading(false)
            })
    }

    const roleOptions = [] as {value: string | number, name: string}[]
    teamRolesData?.map(item => roleOptions.push({value: item.id, name: item.name}))

    console.log(editDetails)

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
                        value={createTeamDetails.firstName}
                        onChange={handleOnChange}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">First Name</label>} 
                        placeholder="Enter name"
                        type="text"
                        name="firstName"
                    />
                    <Input 
                        className="mb-[8px]"
                        value={createTeamDetails.lastName}
                        onChange={handleOnChange}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Last Name</label>} 
                        placeholder="Enter name"
                        type="text"
                        name="lastName"
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
                        value={createTeamDetails.position}
                        onChange={handleOnChange}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Position</label>} 
                        placeholder="Enter team position e.g Project Manager"
                        type="text"
                        name="position"
                    />
                    <Input 
                        className="mb-[8px]"
                        value=""
                        // value={createTeamDetails.position}
                        onChange={handleOnChange}
                        select
                        options={roleOptions}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Role</label>} 
                        placeholder="Enter Role"
                        type="text"
                        name="role"
                    />
                    <div className="flex gap-2 flex-wrap"> 
                        {createTeamDetails.role.map(itemValue => (
                            <p className="bg-[#C3278126] flex items-center gap-3 py-1 px-3 rounded-3xl text-[14px] text-[#333333]"><span className=" -translate-y-[1px]">{teamRolesData.find(item => item.id === Number(itemValue))?.name}</span> <Xicon onClick={() => handleRemoveRole(itemValue)} className="scale-[0.8]" /></p>
                        ))}
                    </div>
                    <Button 
                        disabled={loading || (!createTeamDetails.firstName || !createTeamDetails.lastName || !createTeamDetails.email || !createTeamDetails.position || createTeamDetails.role.length === 0 )} 
                        type="submit" 
                        className="disabled:bg-slate-600 mt-3 h-10"
                    >
                        {loading ? <ActivityIndicator /> : "Save"}
                    </Button>
                </form>}
                {modalType === "Edit" && 
                    <div className="pt-7 pb-12 px-14">
                        <p className="text-center text-[24px] text-[#333333] font-[500] pb-8">Edit Role and Permissions</p>
                        <Input 
                            className="mb-[8px]"
                            value={editDetails.position}
                            onChange={handleOnChange}
                            label={<label className="text-[#333333] font-medium text-[0.9em]">Position</label>} 
                            placeholder="Enter team position e.g Project Manager"
                            type="text"
                            name="position"
                        />
                        <Input 
                            className="mb-[8px]"
                            value=""
                            onChange={handleOnChange}
                            select
                            options={roleOptions}
                            label={<label className="text-[#333333] font-medium text-[0.9em]">Role</label>} 
                            placeholder="Enter Position"
                            type="text"
                            name="role"
                        />
                        <div className="flex gap-2 flex-wrap">
                            {editDetails?.role?.map(itemValue => (
                                <p className="bg-[#C3278126] flex items-center gap-3 py-1 px-3 rounded-3xl text-[14px] text-[#333333]"><span className=" -translate-y-[1px]">{teamRolesData.find(item => item.name === itemValue)?.name}</span> <Xicon onClick={() => handleRemoveRole(itemValue)} className="scale-[0.8]" /></p>
                            ))}
                        </div>
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
                loading={teamDataStatus === "pending"}
                getRowIdField="email"
                filteredRows={filteredRows}
                columns={columns}
                searchInput={searchInput}
                handleSearchChange={handleSearchChange}
            />
        </div>
    )
}

export default TeamsManager
import { ChangeEvent, useCallback, useEffect, useMemo, useState, useContext } from "react"
import Button from "@/components/primary/Button"
import Table from "@/components/secondary/Table"
import { TeamsData } from "@/testData"
import { GridColDef } from "@mui/x-data-grid"
import TableActionsMenu from "@/components/secondary/TableActionsMenu"
import { MenuItem } from "@mui/material"
import Modal from "@/components/primary/Modal"
import Input from "@/components/primary/input"
import Xicon from "../../../../public/svgs/x-icon.svg"
import { useGetTeamQuery, usePostInviteTeamMutation } from "../../../../api-feature/apiSlice"
import { ApiType } from "../../../../api-feature/types"
import { teamType } from "../../../../api-feature/team/team-type"
import toast from "react-hot-toast"
import { dataContext } from "@/components/contexts/dataContext"
import ActivityIndicator from "@/components/secondary/ActivityIndicator"

type formType = {
    firstName: string;
    lastName: string;
    email: string;
    role: string[];
    position: string
}

type modalType = "add-team" | "Edit"

interface getTeamsApi extends ApiType {
    data: {data: {data: teamType[], page: number, totalPage: number, totalUser: number}, success: boolean}
}

const TeamsManager = () => {
    const {teamRolesData} = useContext(dataContext)
    const [loading, setLoading] = useState(false)
    const {data, status, error} = useGetTeamQuery<getTeamsApi>()
    const [createTeam] = usePostInviteTeamMutation()
    // const rows = TeamsData
    const rows = data?.data?.data
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState("")
    const [modalOpen, setModalOpen] = useState(false)
    const [modalType, setModalType] = useState("" as modalType)
    const [editDetails, setEditDetails] = useState({
        role: "",
        position: ""
    })
    console.log(rows)
    const [createTeamDetails, setCreateTeamDetails] = useState<formType>({
        firstName: "",
        lastName: "",
        email: "",
        role: [],
        position: ""
    })

    useEffect(() => {
        status === "rejected" && toast.error("Error occured Fetching data")
    },[status])

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
                cellClassName: " text-[#333333] font-[500]", headerName: "Name/Email", headerClassName: "bg-[#C32782]",  
                renderCell: (params) => {
                    const {firstName, lastName, email} = params.row
                    // console.log(params)
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
                cellClassName: " text-[#333333] font-[500]", headerName: "Position", headerClassName: "bg-[#C32782]"},
            {field: "role", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200, 
                cellClassName: " text-[#333333] font-[500]", headerName: "Role", headerClassName: "bg-[#C32782]",
                renderCell: (params) => {
                    const {roles} = params.row
                    // console.log(params)
                    return (
                        <div className="flex flex-col">
                            {roles?.map(item => (
                                <p className="leading-3 mt-5">{item}</p>
                                // <p className="leading-6 text-[12px]">{email}</p>
                            ))}
                        </div>
                    )
                },

            },
            // {field: "status", 
            //     flex: isLargeScreen ? 0.5 : undefined, 
            //     width: isLargeScreen ? undefined : 150,
            //     cellClassName: " text-[#333333] font-[500]", headerAlign: "center", headerName: "Status", headerClassName: "bg-[#C32782]",  renderCell: (params) => {
            //     return (
            //         <div className="flex justify-center flex-col items-center" >
            //             <p className={`${params.value.toLowerCase() === "active" ? "bg-[#00FFB01A] text-[#05875F]" : "bg-[#E189331A] text-[#E18933]"} bg-[#00FFB01A] text-[13px] text-[#05875F] text-center flex justify-center items-center h-[30px] mt-3 rounded-lg w-[80px]`}>{params.value}</p>
            //         </div>
            //     )
            // }},
            {
                field: 'actions',
                headerClassName: "bg-[#C32782]",
                headerName: 'Actions',
                renderCell: (params) => (
                    <div>
                        {params?.row?.roles[0] !== "Owner" && <TableActionsMenu options={[
                            <MenuItem onClick={() => (openModal("Edit"), console.log(params),  setEditDetails({role: params.row.role, position: params.row.position}))} >Edit</MenuItem>,
                        ]} data={params} />}
                    </div>
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
        
        if (key === "role") {
            setCreateTeamDetails((prev) => {
                if (!prev.role.includes(value)) {
                    return {
                        ...prev,
                        [key]: [...prev.role, value],
                    };
                }
                return prev;
            });
            return;
        }

        setCreateTeamDetails(prev => ({...prev, [key]: value}))
    }, [])

    const handleRemoveRole = (roleToRemove: string) => {
        setCreateTeamDetails(prev => ({
            ...prev,
            role: prev.role.filter(role => role !== roleToRemove)
        }));
    }

    const handleCreateTeam = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(createTeamDetails)
        setLoading(true)
        createTeam({...createTeamDetails}).unwrap()
            .then(fulfilled => {
                toast.success("Invite Sent")
                console.log(fulfilled)
                setLoading(false)
                closeModal()
            })
            .catch(rejected => {
                toast.error("Error occured")
                console.log(rejected)
                setLoading(false)
            })
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
                        options={["Sales rep", "Manager"]}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Role</label>} 
                        placeholder="Enter Role"
                        type="text"
                        name="role"
                    />
                    <div className="flex gap-2 flex-wrap"> 
                        {createTeamDetails.role.map(item => (
                            <p className="bg-[#C3278126] flex items-center gap-3 py-1 px-3 rounded-3xl text-[14px] text-[#333333]"><span className=" -translate-y-[1px]">{item}</span> <Xicon onClick={() => handleRemoveRole(item)} className="scale-[0.8]" /></p>
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
                            options={["Sales rep", "Manager"]}
                            label={<label className="text-[#333333] font-medium text-[0.9em]">Role</label>} 
                            placeholder="Enter Position"
                            type="text"
                            name="role"
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
                loading={status === "pending"}
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
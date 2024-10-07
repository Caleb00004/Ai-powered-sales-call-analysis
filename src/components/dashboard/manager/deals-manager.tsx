import Button from "@/components/primary/Button"
import Table from "@/components/secondary/Table"
import CustomGridFooter from "@/components/secondary/TableFooter"
import { dealsData, dealsDataType } from "@/testData"
import { DataGrid, getGridNumericOperators, GridColDef, GridEventListener } from "@mui/x-data-grid"
import { ChangeEvent, ChangeEventHandler, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { GridFilterInputSingleSelect } from '@mui/x-data-grid';
import TableActionsMenu from "@/components/secondary/TableActionsMenu"
import { MenuItem } from "@mui/material"
import Modal from "@/components/primary/Modal"
import { stageFilterOperator, statusFilterOperator } from "@/components/util/customFilterOperators"
import EditTableModal from "@/components/primary/EditTableModal"
import Input from "@/components/primary/input"
import { dealStage } from "@/testData"
import { appContext } from "@/components/contexts/appContext"
import Xicon from "../../../../public/svgs/x-icon.svg"

type dealFormType = {
    name: string
    client: string
    stage: string,
    saleReps: string[]
}

const DealsManager = () => {
    const routeTo = useRouter()
    const {salesRepData} = useContext(appContext)
    const [searchInput, setSearchInput] = useState("")
    const [selectedDeal, setSelectedDeal] = useState({} as dealsDataType)
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const rows = dealsData
    const [modalOpen, setModalOpen] = useState(false)
    const [dealModalOpen, setDealModalOpen] = useState(false)
    const [newDealDetails, setNewDealDetails] = useState<dealFormType>({
        name: "",
        client: "",
        stage: "",
        saleReps: []
    })

    useEffect(() => {
        setIsLargeScreen(window.innerWidth > 940);
    })

    const closeDealModal = () => {
        setDealModalOpen(false);
    };

    const openDealModal = () => {
        setDealModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const openModal = () => {
        setModalOpen(true);
    };
    
    const filteredRows = useMemo(() => {
        return rows.filter(row =>
            row.name.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [rows, searchInput]);

    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    },[]);

    const handleSelectDeal = useCallback((data: {id: string, row: {}}) => {
        console.log(data)
        routeTo.push(`/dashboard/deals/${data.id}`)
    },[])

    const handleOpenEditModal = (data: {id: string, row: dealsDataType}) => {
        const {...rest} = data.row
        setSelectedDeal(rest)
        openModal() 
    }

    const columns: GridColDef[] = useMemo(() => {
        return [
            {field: "name", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                headerName: "Name", headerClassName: "bg-[#C32782]"},
            {field: "client", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200, 
                renderHeader: () => ( 
                <div className="flex items-center mdx2:flex-row flex-col">
                    <p>Client/</p><p>Company</p>
                </div>
                ),
                headerClassName: "bg-[#C32782]"
            },
            {field: "stage", 
                flex: isLargeScreen ? 0.6 : undefined, 
                width: isLargeScreen ? undefined : 120,
                filterOperators: [stageFilterOperator] , headerName: "Stage", headerClassName: "bg-[#C32782]"},
            {field: "status", 
                flex: isLargeScreen ? 0.5 : undefined, 
                width: isLargeScreen ? undefined : 100,
                filterOperators: [statusFilterOperator], headerName: "Status", headerClassName: "bg-[#C32782]"},
            {field: "assignedSalesRep", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                filterOperators: getGridNumericOperators() , cellClassName: "center-cell-text", renderHeader: () =>  (<div className="flex gap-1 flex-col ml-[3em]"><p>Assigned <br />Sales Rep</p></div>), headerClassName: "bg-[#C32782]"},
            {
                field: 'actions',
                flex: isLargeScreen ? 0.5 : undefined, 
                width: isLargeScreen ? undefined : 100,
                headerClassName: "bg-[#C32782]",
                headerName: 'Actions',
                renderCell: (params) => (
                    <TableActionsMenu options={[
                        <MenuItem onClick={() => handleSelectDeal(params as { id: string; row: {}; }) }>View More</MenuItem>,
                        <MenuItem onClick={() => handleOpenEditModal(params as { id: string; row: dealsDataType; })}>Edit</MenuItem>,
                        <MenuItem onClick={() => {}}>Delete</MenuItem>
                    ]} data={params} />
                ),
                // width: 10,
                sortable: false,
                filterable: false,
            },
        ]
    },[isLargeScreen]) 

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name} = e.target 
        const {value} = e.target
        setSelectedDeal(prev => ({...prev, [name]: value}))
    }

    
    const handleAddNewDeal = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name as keyof dealFormType
        const value = e.target.value
        
        if (key === "saleReps") {
            setNewDealDetails((prev) => {
                // Check if the team member is already in the array
                if (!prev.saleReps.includes(value)) {
                    return {
                        ...prev,
                        [key]: [...prev.saleReps, value], // Add team member if not present
                    };
                }

                // If the team member is already present, return the state as-is
                return prev;
            });
            return;
        }

        setNewDealDetails(prev => ({...prev, [key]: value}))
    }, [])

    const handleRemoveSalesRep = (salesRepToRemove: string) => {
        setNewDealDetails(prev => ({
            ...prev,
            saleReps: prev.saleReps.filter(member => member !== salesRepToRemove)
        }));
    }


    return (
        <div className="flex flex-col gap-[20px] w-full">
            <EditTableModal 
                isOpen={modalOpen}
                onClose={closeModal}
                cellData={selectedDeal}
                handleValueChange={handleEditChange}
            />

            <Modal
                isOpen={dealModalOpen}
                onClose={closeDealModal}
            >
                <form onSubmit={handleAddNewDeal} className="pt-7 pb-12 px-14">
                    <p className="text-center text-[24px] text-[#333333] font-[500] pb-8">Deal</p>
                    <Input 
                        className="mb-[8px]"
                        value={newDealDetails.name}
                        onChange={handleOnChange}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Name</label>} 
                        placeholder="Enter name"
                        type="text"
                        name="name"
                    />
                    <Input 
                        className="mb-[8px]"
                        value={newDealDetails.client}
                        onChange={handleOnChange}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Client/Company</label>} 
                        placeholder="Enter company name"
                        type="text"
                        name="client"
                    />
                    <Input 
                        className="mb-[8px]"
                        value={newDealDetails.stage}
                        onChange={handleOnChange}
                        select
                        options={dealStage}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Stage</label>} 
                        placeholder="Select Stage"
                        type="text"
                        name="stage"
                    />
                    <Input 
                        className="mb-[8px]"
                        value=""
                        onChange={handleOnChange}
                        select
                        options={salesRepData}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Assigned sales rep</label>} 
                        placeholder="Select sales rep"
                        type="text"
                        name="saleReps"
                    />
                    <div className="flex gap-2 flex-wrap"> 
                        {newDealDetails.saleReps.map(item => (
                            <p className="bg-[#C3278126] flex items-center gap-3 py-1 px-3 rounded-3xl text-[14px] text-[#333333]"><span className=" -translate-y-[1px]">{item}</span> <Xicon onClick={() => handleRemoveSalesRep(item)} className="scale-[0.8]" /></p>
                        ))}
                    </div>
                    <Button type="submit" className="mt-3">
                        Save
                    </Button>
                </form>
            </Modal>
            
            <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-[600] text-[#333333]">Deals</h1>
                <div className="w-[140px]">
                    <Button onClick={openDealModal} className="py-[6px] text-[13px]">Add New Deal</Button>
                </div>
            </div>

            <Table 
                filteredRows={filteredRows}
                columns={columns}
                searchInput={searchInput}
                handleSearchChange={handleSearchChange}
                getRowIdField="id"
            />
        </div>
    )
}

export default DealsManager
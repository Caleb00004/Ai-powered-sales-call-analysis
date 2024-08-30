import Button from "@/components/primary/Button"
import Table from "@/components/secondary/Table"
import CustomGridFooter from "@/components/secondary/TableFooter"
import { dealsData, dealsDataType } from "@/testData"
import { DataGrid, getGridNumericOperators, GridColDef, GridEventListener } from "@mui/x-data-grid"
import { ChangeEvent, ChangeEventHandler, useCallback, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { GridFilterInputSingleSelect } from '@mui/x-data-grid';
import TableActionsMenu from "@/components/secondary/TableActionsMenu"
import { MenuItem } from "@mui/material"
import Modal from "@/components/primary/Modal"
import { stageFilterOperator, statusFilterOperator } from "@/components/util/customFilterOperators"
import EditTableModal from "@/components/primary/EditTableModal"

const DealsManager = () => {
    const routeTo = useRouter()
    const [searchInput, setSearchInput] = useState("")
    const [selectedDeal, setSelectedDeal] = useState({} as dealsDataType)
    const rows = dealsData
    const [modalOpen, setModalOpen] = useState(false)

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
            {field: "name", flex: 1, headerName: "Name", headerClassName: "bg-[#C32782]"},
            {field: "client", flex: 1, renderHeader: () => ( 
                <div className="flex items-center mdx2:flex-row flex-col">
                    <p>Client/</p><p>Company</p>
                </div>
                ),
                headerClassName: "bg-[#C32782]"
            },
            {field: "stage", flex: 0.6, filterOperators: [stageFilterOperator] , headerName: "Stage", headerClassName: "bg-[#C32782]"},
            {field: "status", flex: 0.5, filterOperators: [statusFilterOperator], headerName: "Status", headerClassName: "bg-[#C32782]"},
            {field: "assignedSalesRep", flex: 1, filterOperators: getGridNumericOperators() , renderHeader: () =>  (<div className="flex gap-1 flex-col "><p>Assigned <br />Sales Rep</p></div>), headerClassName: " bg-[#C32782]"},
            {
                field: 'actions',
                flex: 0.5,
                headerClassName: "bg-[#C32782]",
                headerName: 'Actions',
                renderCell: (params) => (
                    <TableActionsMenu options={[
                        <MenuItem onClick={() => handleSelectDeal(params as { id: string; row: {}; }) }>View More</MenuItem>,
                        <MenuItem onClick={() => handleOpenEditModal(params as { id: string; row: dealsDataType; })}>Edit</MenuItem>,
                        <MenuItem onClick={() => {}}>Delete</MenuItem>
                    ]} data={params} />
                ),
                width: 10,
                sortable: false,
                filterable: false,
            },
        ]
    },[]) 

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name} = e.target 
        const {value} = e.target
        setSelectedDeal(prev => ({...prev, [name]: value}))
    }

    return (
        <div className="flex flex-col gap-[20px] w-full">
            <EditTableModal 
                isOpen={modalOpen}
                onClose={closeModal}
                cellData={selectedDeal}
                handleValueChange={handleEditChange}
            />
            
            <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-[600] text-[#333333]">Deals</h1>
                <div className="w-[140px]">
                    <Button className="py-[6px] text-[13px]">Add New Deal</Button>
                </div>
            </div>

            <Table 
                filteredRows={filteredRows}
                columns={columns}
                searchInput={searchInput}
                handleSearchChange={handleSearchChange}
            />
        </div>
    )
}

export default DealsManager
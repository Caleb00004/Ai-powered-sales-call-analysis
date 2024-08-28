import Button from "@/components/primary/Button"
import Table from "@/components/secondary/Table"
import CustomGridFooter from "@/components/secondary/TableFooter"
import { dealsData, dealsDataType } from "@/testData"
import { DataGrid, getGridNumericOperators, GridColDef, GridEventListener } from "@mui/x-data-grid"
import { ChangeEvent, useCallback, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { GridFilterInputSingleSelect } from '@mui/x-data-grid';
import TableActionsMenu from "@/components/secondary/TableActionsMenu"
import { MenuItem } from "@mui/material"
import Modal from "@/components/secondary/Modal"
import { stageFilterOperator, statusFilterOperator } from "@/components/util/customFilterOperators"

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

    const handleOpenEditModal = (data) => {
        const {id, ...rest} = data.row
        console.log(rest)
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
                        <MenuItem onClick={() => handleOpenEditModal(params)}>Edit</MenuItem>,
                        <MenuItem onClick={() => {}}>Delete</MenuItem>
                    ]} data={params} />
                ),
                width: 10,
                sortable: false,
                filterable: false,
            },
        ]
    },[]) 

    return (
        <div className="flex flex-col gap-[20px] w-full">
            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                className={" p-3"}
            >
                <div className="pt-5">
                    {Object.entries(selectedDeal).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                            <label className="mb-1 font-medium">{key}</label>
                            <input
                                type="text"
                                name={key}
                                value={value}
                                // onChange={handleChange}
                                className="p-2 border rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </Modal>
            <div className="flex justify-between items-center">
                <h1 className="text-[1.5em] font-[600] text-[#333333]">Deals</h1>
                <Button className="w-[140px] py-[6px] text-[13px]">Add New Deal</Button>
            </div>

            <Table 
                filteredRows={filteredRows}
                columns={columns}
                searchInput={searchInput}
                handleSelectCell={() => {}}
                handleSearchChange={handleSearchChange}
            />
        </div>
    )
}

export default DealsManager
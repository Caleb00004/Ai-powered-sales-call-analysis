import Button from "@/components/primary/Button"
import Table from "@/components/secondary/Table"
import { DataGrid, getGridNumericOperators, GridColDef, GridEventListener } from "@mui/x-data-grid"
import { ChangeEvent, ChangeEventHandler, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { GridFilterInputSingleSelect } from '@mui/x-data-grid';
import TableActionsMenu from "@/components/secondary/TableActionsMenu"
import { MenuItem } from "@mui/material"
import { stageFilterOperator, statusFilterOperator } from "@/components/util/customFilterOperators"
import EditTableModal from "@/components/primary/EditTableModal"
import { useGetDealsQuery, useGetDealStagesQuery, usePostCreateDealMutation } from "../../../../api-feature/apiSlice"
import { ApiType } from "../../../../api-feature/types"
import { dealsType } from "../../../../api-feature/manager-owner/deals/deal-type"
import useModal from "@/components/util/useModal"
import NewdealModal from "@/components/modals/newDeal-modal"
import { dataContext } from "@/components/contexts/dataContext"
import toast from "react-hot-toast"

export type dealFormType = {
    name: string
    client: string
    stage: string,
    saleReps: number[]
}
interface dealsApi extends ApiType {
    data: {data: {deals: dealsType[], page: number, totalPage: number, totalUser: number}}, success: boolean
}


const DealsManager = () => {
    const {teamData, teamDataStatus} = useContext(dataContext)
    const {data: dealsData, status: dealStatus, error} = useGetDealsQuery<dealsApi>()
    const {data: dealStagesData, status: dealStagesStatus, error: dealStagesError} = useGetDealStagesQuery()
    const routeTo = useRouter()
    const [searchInput, setSearchInput] = useState("")
    const [selectedDeal, setSelectedDeal] = useState({} as dealsType)
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const rows = dealsData?.data.deals
    const {modalOpen, openModal, closeModal } = useModal()
    const {modalOpen: dealModalOpen, openModal: openDealModal, closeModal: closeDealModal } = useModal()

    useEffect(() => {
        dealStatus === "rejected" && toast.error("Error occured")
    },[dealStatus])

    useEffect(() => {
        setIsLargeScreen(window.innerWidth > 940);
    })
    
    const filteredRows = useMemo(() => {
        return rows?.filter(row =>
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

    const handleOpenEditModal = (data: {id: string, row: dealsType}) => {
        const {...rest} = data.row
        setSelectedDeal(rest)
        openModal() 
    }

    const columns: GridColDef[] = useMemo(() => {
        return [
            {field: "name", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                headerName: "Name"},
            {field: "client", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200, 
                renderHeader: () => ( 
                <div className="flex items-center mdx2:flex-row flex-col">
                    <p>Client/</p><p>Company</p>
                </div>
                )
            },
            {field: "stage", 
                flex: isLargeScreen ? 0.6 : undefined, 
                width: isLargeScreen ? undefined : 120,
                filterOperators: [stageFilterOperator] , headerName: "Stage", 
                renderCell: (params) => (
                    <p>{params.row.stage.name}</p>
                )
            },
            {field: "status", 
                flex: isLargeScreen ? 0.5 : undefined, 
                width: isLargeScreen ? undefined : 100,
                filterOperators: [statusFilterOperator], headerName: "Status"},
            {field: "assignedSalesRep", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                filterOperators: getGridNumericOperators() , cellClassName: "center-cell-text", renderHeader: () =>  (<div className="flex gap-1 flex-col ml-[3em]"><p>Assigned <br />Sales Rep</p></div>),
                renderCell: (params) => (
                    <p className="text-center">{params.row._count.salesReps}</p>
                )
            },
            {
                field: 'actions',
                flex: isLargeScreen ? 0.5 : undefined, 
                width: isLargeScreen ? undefined : 100,
                headerName: 'Actions',
                renderCell: (params) => (
                    <TableActionsMenu options={[
                        <MenuItem key={1} onClick={() => handleSelectDeal(params as { id: string; row: {}; }) }>View More</MenuItem>,
                        <MenuItem key={2} onClick={() => handleOpenEditModal(params as { id: string; row: dealsType; })}>Edit</MenuItem>,
                        <MenuItem key={3} onClick={() => {}}>Delete</MenuItem>
                    ]} data={params} />
                ),
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

    const dealOptions = [] as {value: number, name: string}[]
    dealStagesData?.map(item => dealOptions.push({value: item.id, name: item.name}))

    const salesRepOptions = [] as {value: number | number, name: string}[]
    teamData?.map(item => salesRepOptions.push({value: item.userId, name: `${item.firstName} ${item.lastName}`}))

    return (
        <div className="flex flex-col gap-[20px] w-full">
            <EditTableModal 
                isOpen={modalOpen}
                onClose={closeModal}
                dea
                // @ts-ignore
                cellData={selectedDeal}
                handleValueChange={handleEditChange}
            />
            <NewdealModal 
                modalOpen={dealModalOpen}
                closeModal={closeDealModal}
                salesRep={salesRepOptions}
                dealOptions={dealOptions}
            />
            
            <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-[600] text-[#333333]">Deals</h1>
                <div className="w-[140px]">
                    <Button onClick={openDealModal} className="py-[6px] text-[13px]">Add New Deal</Button>
                </div>
            </div>

            <Table 
                loading={dealStatus === "pending"}
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
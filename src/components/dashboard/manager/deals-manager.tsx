import Button from "@/components/primary/Button"
import Table from "@/components/secondary/Table"
import CustomGridFooter from "@/components/secondary/TableFooter"
// import { dealsData, dealsDataType } from "@/testData"
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
import { useGetDealsQuery, useGetDealStagesQuery, usePostCreateDealMutation } from "../../../../api-feature/apiSlice"
import { ApiType } from "../../../../api-feature/types"
import { dealsType } from "../../../../api-feature/deals/deal-type"
import ActivityIndicator from "@/components/secondary/ActivityIndicator"
import useModal from "@/components/util/useModal"

type dealFormType = {
    name: string
    client: string
    stage: string,
    saleReps: number[]
}
interface dealsApi extends ApiType {
    data: {data: {deals: dealsType[], page: number, totalPage: number, totalUser: number}}, success: boolean
}


const DealsManager = () => {
    const {data: dealsData, status: dealStatus, error} = useGetDealsQuery<dealsApi>()
    console.log(dealsData)
    const {data: dealStagesData, status: dealStagesStatus, error: dealStagesError} = useGetDealStagesQuery()
    const [createDeal] = usePostCreateDealMutation()
    const [loading, setLoading] = useState(false)
    const routeTo = useRouter()
    const {salesRepData} = useContext(appContext)
    const [searchInput, setSearchInput] = useState("")
    const [selectedDeal, setSelectedDeal] = useState({} as dealsType)
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const rows = dealsData?.data.deals
    const {modalOpen, openModal, closeModal } = useModal()
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
                filterOperators: [stageFilterOperator] , headerName: "Stage"},
            {field: "status", 
                flex: isLargeScreen ? 0.5 : undefined, 
                width: isLargeScreen ? undefined : 100,
                filterOperators: [statusFilterOperator], headerName: "Status"},
            {field: "assignedSalesRep", 
                flex: isLargeScreen ? 1 : undefined, 
                width: isLargeScreen ? undefined : 200,
                filterOperators: getGridNumericOperators() , cellClassName: "center-cell-text", renderHeader: () =>  (<div className="flex gap-1 flex-col ml-[3em]"><p>Assigned <br />Sales Rep</p></div>)},
            {
                field: 'actions',
                flex: isLargeScreen ? 0.5 : undefined, 
                width: isLargeScreen ? undefined : 100,
                headerName: 'Actions',
                renderCell: (params) => (
                    <TableActionsMenu options={[
                        <MenuItem onClick={() => handleSelectDeal(params as { id: string; row: {}; }) }>View More</MenuItem>,
                        <MenuItem onClick={() => handleOpenEditModal(params as { id: string; row: dealsType; })}>Edit</MenuItem>,
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
        setLoading(true)

        const stage = Number(newDealDetails.stage)

        createDeal({name: newDealDetails.name, client: newDealDetails.client, dealStageId: stage, salesReps: newDealDetails.saleReps}).unwrap()
            .then(fulfilled => {
                setLoading(false)
                console.log(fulfilled)
            })
            .catch(rejected => {
                setLoading(false)
                console.log(rejected)
            })
    }

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name as keyof dealFormType
        const value = e.target.value
        
        if (key === "saleReps") {
            console.log(e)
            console.log(key)
            console.log(value)
            setNewDealDetails((prev) => {
                // Check if the team member is already in the array
                if (!prev.saleReps.includes(Number(value))) {
                    return {
                        ...prev,
                        [key]: [...prev.saleReps, Number(value)], // Add team member if not present
                    };
                }

                // If the team member is already present, return the state as-is
                return prev;
            });
            return;
        }

        setNewDealDetails(prev => ({...prev, [key]: value}))
    }, [])

    const handleRemoveSalesRep = (salesRepToRemove: number) => {
        setNewDealDetails(prev => ({
            ...prev,
            saleReps: prev.saleReps.filter(member => member !== salesRepToRemove)
        }));
    }

    const dealOptions = [] as {value: string | number, name: string}[]
    dealStagesData?.map(item => dealOptions.push({value: item.id, name: item.name}))

    const testSalesRep = [{name: "Aisha", value: 1}, {name: "Jack", value: 3}]


    return (
        <div className="flex flex-col gap-[20px] w-full">
            <EditTableModal 
                isOpen={modalOpen}
                onClose={closeModal}
                // @ts-ignore
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
                        options={dealOptions}
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
                        options={testSalesRep}
                        label={<label className="text-[#333333] font-medium text-[0.9em]">Assigned sales rep</label>} 
                        placeholder="Select sales rep"
                        type="text"
                        name="saleReps"
                    />
                    <div className="flex gap-2 flex-wrap"> 
                        {newDealDetails.saleReps.map(itemValue => (
                            <p className="bg-[#C3278126] flex items-center gap-3 py-1 px-3 rounded-3xl text-[14px] text-[#333333]"><span className=" -translate-y-[1px]">{testSalesRep.find(item => item.value === Number(itemValue))?.name}</span> <Xicon onClick={() => handleRemoveSalesRep(itemValue)} className="scale-[0.8]" /></p>
                        ))}
                    </div>
                    <Button disabled={loading || (!newDealDetails.name || !newDealDetails.client || !newDealDetails.stage || newDealDetails.saleReps.length === 0 )} type="submit" className="mt-3 disabled:bg-slate-600 disabled:cursor-not-allowed">
                        {loading ? <ActivityIndicator /> : "Save"}
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
import { FC } from "react"
import { dealsOverviewType } from "../../../../api-feature/deals/deal-type"
import Loading from "@/components/secondary/LoadingSpinner"

interface props {
    loading: boolean,
    error: boolean,
    data: dealsOverviewType
}

const DealReport:FC<props> = ({loading, error, data}) => {
    return (
        <div className="flex-1 bg-white border p-3">
            <h1 className='text-[#333333] text-[20px] font-[600] pb-4'>Dureket Report</h1>
            {loading && <div className="h-[10em] flex items-center justify-center"><Loading /></div>}
            {error && <div className="h-[10em] flex items-center justify-center"><p className="text-red-600 text-center italic">Error occured</p></div>}
            {(!loading && !error) && 
                <p className='text-[#4A4A4A] text-[13.5px] font-[400]'>{data?.details?.report ?? `
                Lorem ipsum dolor sit amet consectetur. Arcu ut aliquam neque orci sapien nisl. Ligula rhoncus at nisl scelerisque eget enim ut.
                    At vulputate metus pulvinar leo lorem nec morbi dolor. Tempus fusce vel duis dictum nibh a sed adipiscing in. In egestas aliquam 
                    id egestas morbi cras vivamus. Ac sed vehicula sem sed dui massa. Netus tincidunt odio ultricies viverra sed porttitor vulputate dui. 
                    egestas morbi cras vivamus. Ac sed vehicula sem sed dui. In egestas aliquam id egestas morbi cras vivamusmassa.egestas morbi cras
                `}</p>
            }
        </div>
    )
}

export default DealReport
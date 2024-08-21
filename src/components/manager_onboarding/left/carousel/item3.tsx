import Image from "next/image"
import img from "../../../../../public/images/item3_img.png"

const Item3 = () => {
    return (
        <div className="text-center">
            <h1 className="text-[1.5em] font-bold">Smart Transcriptions</h1>
            <p className="text-[0.9em] mt-[1em] font-thin mx-auto w-[22em]">Leverage NLP to Accurately Transcribe and Understand Every Sales Interaction</p>

            <div className="flex items-center justify-center mx-auto pt-8">
                <Image src={img} height={50000} width={50000} alt="image1" className=" w-[85%]  " />
            </div>
        </div>
    )
}

export default Item3
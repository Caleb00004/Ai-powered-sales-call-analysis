import Image from "next/image"
import img from "../../../../../public/images/item4_img.png"

const Item4 = () => {
    return (
        <div className="text-center ">
            <div>
                <h1 className="text-[1.5em] font-bold">AI-Driven Performance Grading</h1>
                <p className="text-[0.9em] mt-[1em] font-thin mx-auto w-[22em]">Receive Detailed Feedback and Grades Based on Proven Sales Techniques</p>
            </div>
            <div className="flex items-center justify-center mx-auto pt-8 ">
                <Image src={img} height={50000} width={50000} alt="image1" className=" w-[85%] "/>
            </div>
        </div>
    )
}

export default Item4
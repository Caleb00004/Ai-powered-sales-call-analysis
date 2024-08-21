import Image from "next/image"
import img from "../../../../../public/images/item2_img.png"

const Item2 = () => {
    return (
        <div className="text-center ">
            <h1 className="text-[1.5em] font-bold">Seamless Integration</h1>
            <p className="text-[0.9em] mt-[1em] font-thin mx-auto w-[22em]">Connect with Zoom, Google Meet, and Kixie to start Analyzing your Sales Calls</p>

            <div className="flex items-center justify-center mx-auto pt-8  ">
                <Image src={img} height={50000} width={50000} alt="image1" className=" w-[85%] object-contain " />
            </div>
        </div>
    )
}

export default Item2
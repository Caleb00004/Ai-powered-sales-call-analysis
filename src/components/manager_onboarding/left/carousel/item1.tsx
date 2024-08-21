import Image from "next/image"
import img from "../../../../../public/images/item1_img.png"

const Item1 = () => {
    return (
        <div className="text-center">
            <h1 className="text-[1.5em] font-bold">Welcome to Your AI Sales Assistant</h1>
            <p className="text-[0.9em] mt-[1em] font-thin">Begin your journey to smarter sales Analysis.</p>
            <p className="text-[0.9em] font-thin">Get Ready to transform Your Sales Performance.</p>

            <div className="flex items-center justify-center mx-auto pt-8 ">
                <Image src={img} height={5000} width={5000} alt="image1" className="w-[85%] -translate-x-4" />
            </div>
        </div>
    )
}

export default Item1
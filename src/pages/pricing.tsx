import HomeLayout from "@/components/layouts/HomeLayout"
import Button from "@/components/primary/Button"
import CheckIcon from "../../public/svgs/check-icon.svg"
import InfoIcon from "../../public/svgs/outline.svg"
import PricingUi from "@/components/secondary/PricingUI"
import FaqUI from "@/components/secondary/FaqUI"


const Pricing = () => {
    return (
        <HomeLayout>
            <div className="text-[#333333] bg-white py-[3em] sm:py-[4em]">
                <div className="w-[90%] sm:w-[34em] mx-auto text-center">
                    <h1 className="text-[35px] sm:text-[45px] font-[700] mt-0">Simple, easy pricing</h1>
                    <p className="text-[#5B5B5B] font-[500]">User friendly pricing plans for your business</p>

                    <div className="border flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 p-[3px] w-full rounded-md mt-4">
                        <div className="bg-[#C32782] font-[700] text-[15px] text-white rounded-md text-center flex-1 py-1">
                            <p>Monthly</p>
                        </div>
                        <div className=" flex-1 font-[700] flex justify-center gap-2 mt-1 sm:mt-0 items-center">
                            <p className="text-[15px]">YEARLY</p>
                            <span className="text-[12px] flex items-center px-4 bg-[#5F5FC9] text-white rounded-md">SAVE UP TO 20%</span>
                        </div>
                    </div>
                </div>

                <div className="md px-[1em] sm:px-[4em] xl:px-[8em] text-white">
                    <PricingUi />
                </div>

                <div className="mx-auto pt-[7em] p-[1em] sm:p-[4em]">
                    <h1 className="text-[35px] text-center sm:text-[45px] font-[700] mt-0">Frequently Asked Pricing Questions</h1>
                    
                    <div className="w-[100%] sm:w-[40em] mx-auto mt-14">
                        <FaqUI className="bg-white border-t mt-[0px] py-3" detailsClassName=" text-[#333333] text-[14px]" />
                    </div>
                </div>

                <div className="text-center w-[95%] sm:w-[40em] mt-20 mx-auto">
                    <h1 className="text-[22px] font-[700] ">Want to improve Sales experience for your Team? </h1>
                    <p className="text-[18px] font-[600] text-[#5B5B5B]">Create an Account for Free now</p>
                    <div className="w-[150px] mx-auto mt-6">
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Pricing
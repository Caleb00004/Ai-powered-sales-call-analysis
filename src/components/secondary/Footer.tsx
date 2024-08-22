import Logo2 from "../../../public/svgs/Logo_white.svg"
import Button from "../primary/Button"

const Footer = () => {

    return (
        <footer className="grid sm:grid-cols-2 mdx4:flex justify-between text-[13px] bg-black text-white pt-[5em] pb-[9em] px-[1em] sm:px-[1.5em] mdx4:px-10">
            <div className="flex flex-col flex-[0.6]">
                <Logo2 className="mb-7" />
                <p className="text-[16px] font-[400]">Durekt gives you the tools you need to Revolutionize Your Sales Performance with AI-Powered Call Analysis</p>
            </div>
            <div className="flex mt-8 sm:mt-0 flex-1 justify-between sm:justify-around">
                <div className="flex flex-col">
                    <p className="text-[#94A3B8] pb-6">COMPANY</p>
                    <div className="flex flex-col gap-5">
                        <p>About</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#94A3B8] pb-6">HELP</p>
                    <div className="flex flex-col gap-5">
                        <p>Customer Support</p>
                        <p>Delivery Details</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-[0.6] mt-8 mdx4:mt-0">
                <p className="text-[#94A3B8] pb-6">NEWSLETTER</p>
                <input className="bg-[#18181B80] py-4 px-3 text-[#A1A1AA] border border-[#E4E4E7] rounded-md w-full" placeholder="Enter your email address" />
                <Button className=" rounded-sm mt-4 py-4">Subscribe Now</Button>
            </div>
        </footer>
    )
}

export default Footer
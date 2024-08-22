import { Inter } from "next/font/google";
import HomeLayout from "@/components/layouts/HomeLayout";
import Button from "@/components/primary/Button";
import Image from "next/image";
import ellipse1 from "../../public/images/homepage/Ellipse 33.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <HomeLayout>
      <div className="bg-[#161529] px-[5em] py-[5em] overflow-hidden">
        <div className="flex justify-between ">
          <div className=" w-[25em] mt-7 ">
            <h1 className="text-[3em] leading-[50px]">Revolutionize Your Sales Performance with <span className="text-[#C32781]">AI-Powered</span> Call Analysis</h1>
            <p className="pt-6 pb-6 font-[300]">Record, Transcribe, Analyze, and Grade Sales Calls to Boost Your Team’s Success</p>
            <div className="flex gap-4">
              <Button className="py-3 rounded-sm border border-[#B3387F]">Get Started</Button>
              <Button className="py-3 rounded-sm bg-transparent border text-[#B3387F] border-[#B3387F]">Download Extension</Button>
            </div>
          </div>
          <div className="relative mx-auto ">
            <Image className="absolute scale-[3] opacity-[0.6] z-[1]" src={ellipse1} alt="ellips" width={10000} height={10000} />

            <div className="flex relative z-[1] flex-col gap-1 ">
              <div className="py-5 pl-4 pr-16 bg-gradient-to-r from-[#00000076] to-[#0101017d]">
                <h1 className="text-[2.5em] font-[400]">1M+</h1>
                <p className="text-[#A1A1AA] text-[15px]">Analysis Delivered This Month</p>
              </div>
              <div className="py-5 pl-4 pr-16 bg-gradient-to-r from-[#00000076] to-[#0101017d]">
                <h1 className="text-[2.5em] font-[400]">1M+</h1>
                <p className="text-[#A1A1AA] text-[15px]">Analysis Delivered This Month</p>
              </div>
              <div className="py-5 pl-4 pr-16 bg-gradient-to-r from-[#00000076] to-[#0101017d]">
                <h1 className="text-[2.5em] font-[400]">1M+</h1>
                <p className="text-[#A1A1AA] text-[15px]">Analysis Delivered This Month</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

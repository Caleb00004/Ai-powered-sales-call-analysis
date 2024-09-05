import { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import HomeLayout from "@/components/layouts/HomeLayout";
import Button from "@/components/primary/Button";
import Image from "next/image";
import ellipse1 from "../../public/images/homepage/Ellipse 33.png"
import ellipse2 from "../../public/images/homepage/Ellipse 7.png"
import Waverio from "../../public/svgs/waverio.svg"
import LogoIpsum from "../../public/svgs/logoipsum.svg"
import Alterbone from "../../public/svgs/alterbone.svg"
import Incanto from "../../public/svgs/incanto.svg"
import Tinygone from "../../public/svgs/tinygone.svg"
import Preso from "../../public/svgs/prese.svg"
import Ridoria from "../../public/svgs/ridoria.svg"
import Carbonia from "../../public/svgs/carbonia.svg"
import featureimg from "../../public/images/homepage/features-img.png"
import StarIcon from "../../public/svgs/Star-icon.svg"
import Line2 from "../../public/svgs/Line-2.svg"
import CheckIcon from "../../public/svgs/check-icon.svg"
import InfoIcon from "../../public/svgs/outline.svg"
import ArrowIcon from "../../public/svgs/arrow2-icon.svg"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import rectangleImg from "../../public/images/homepage/rectangle.png"
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import gsap from "gsap";
import PricingUi from "@/components/secondary/PricingUI";
import FaqUI from "@/components/secondary/FaqUI";
import Input from "@/components/primary/input";
import TickIcon from "../../public/svgs/tick-icon.svg"

export const faqs = [
  {
    question: "How do I search for accommodations near my university?",
    answer:
      "To find accommodations near your university, select your university, desired location, apartment type, and price range on the apartment page, then click search. Apartments that match your criteria will be displayed.",
  },
  {
    question:
      "What amenities are typically included in student accommodations?",
    answer:
      "Student apartments usually include basic amenities like water, electricity, and waste disposal. Some also offer extras such as internet, cable TV, and recreational facilities",
  },
  {
    question:
      "Are the listed apartments fully furnished, or do I need to bring my own furniture?",
    answer:
      "Most apartments listed here are likely to be unfurnished, so you'll need to bring your own furniture and essentials. If an apartment is furnished, you may not need to do so, but furnished apartments are more of an exception than the norm ",
  },
  {
    question: "How can I schedule a viewing or tour of an apartment?",
    answer:
      "To schedule a viewing for your chosen apartment on the Apartment page, click the 'inspect' button on the apartment card. Scroll down the redirected page to find the landlord/agent details, then click either the 'contact agent' or 'chat on WhatsApp' buttons.",
  },
  {
    question:
      "What's the typical duration of rental agreements for student accommodations?",
    answer:
      "Rental agreements usually last for one year, but in some cases, there may be offers for shorter durations of 6 to 11 months.",
  }
];

const howItWorks = [
  {
    header: "Flexible Team Management",
    body: "Lorem ipsum dolor sit amet consectetur. Eget non sit egestas nulla volutpat. Dictum mi suspendisse commodo non id est.",
    img: "/images/homepage/flexible-team.png"
  },
  {
    header: "Accurate Transcription and Analysis",
    body: "Transcribe calls with high accuracy, even with diverse accents. Let AI analyze and grade calls based on your unique sales skills.",
    img: "/images/homepage/accurate-transcription.png"
  },
  {
    header: "Accurate Transcription and Analysis",
    body: "Transcribe calls with high accuracy, even with diverse accents. Let AI analyze and grade calls based on your unique sales skills.",
    img: "/images/homepage/right-skills.png"
  },
  {
    header: "Accurate Transcription and Analysis",
    body: "Transcribe calls with high accuracy, even with diverse accents. Let AI analyze and grade calls based on your unique sales skills.",
    img: "/images/homepage/multi-lingual.png"
  },
]
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const borderRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [visible, setVisible] = useState(5);
  const scrollContentRef = useRef(null)

  // useEffect(() => { 
  //   const scrollContent = scrollContentRef.current;

  //   // Duplicate content for seamless scrolling
  //   scrollContent.innerHTML += scrollContent.innerHTML;

  //   // Infinite scroll using GSAP
  //   gsap.to('.scroll-content', {
  //     xPercent: -50, // Scroll 50% of the width
  //     duration: 15,  // Adjust speed
  //     ease: 'none',  // Linear movement
  //     repeat: -1,    // Infinite repeat
  //     modifiers: {
  //       xPercent: gsap.utils.wrap(-100, 0),  // Ensures smooth continuous scrolling
  //     },
  //   });
  // },[])

  return (
    <HomeLayout>
      <div className="bg-[#161529] relative px-[1em] sm:px-[3.5em] mdx5:px-[5em] py-[2em] sm:py-[3em] mdx3:py-[5em]">
        <div className="flex flex-col justify-between ">
          <div className=" w-[100%] text-center mt-7 z-[2] ">
            <h1 className="text-[35px] sm:text-[50px] leading-[35px] sm:leading-[50px] font-[600]">Revolutionize Your Sales Performance with <span className="animate-nav-text text-[#C32781] inline-block">AI-Powered</span> Call Analysis</h1>
            <p className="pt-6 pb-6 font-[300]">Record, Transcribe, Analyze, and Grade Sales Calls to Boost Your Team’s Success</p>
            <div className="flex gap-2 mx-auto w-[100%] sm:w-[35em] ">
              <input type="text" placeholder="Enter your email" className="h-auto flex-1 px-4 bg-transparent border border-[#D4D4D4] rounded-sm" name="email" value="" onChange={() => {}} />
              <Button className="flex-[0.75] sm:flex-[0.4] py-1 rounded-sm border border-[#B3387F] hover:bg-transparent transition-all active:scale-[0.95]">Sign Up free</Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
              <p className="text-white flex items-center gap-2"> <TickIcon /> Free 14-day trial</p>
              <p className="text-white flex items-center gap-2"> <TickIcon /> No Credit card required</p>
            </div>
          </div>

          <div className="relative z-[2] mt-[3em] sm:mt-[7em] ">
            <Image className="w-[100%] " src={"/images/homepage/hero-img.png"} alt="ellips" width={10000} height={10000} />
          </div>
        </div>
          
        <Image className="hidden sm:flex absolute origin-top-right scale-[0.45] translate-x-[200px] rotate-[10deg] top-[-100px]  opacity-[1] z-[1]" src={ellipse1} alt="ellips" width={10000} height={10000} />
        <Image className="hidden sm:flex absolute origin-top-left scale-[0.45] rotate-[-40deg] -translate-x-[35%] left-0 top-[350px]  opacity-[1] z-[1]" src={ellipse1} alt="ellips" width={10000} height={10000} />
        <Image className="flex sm:hidden absolute top-10 opacity-[0.5] z-[1]" src={ellipse1} alt="ellips" width={10000} height={10000} />
      </div>

      <div className="mt-[2em] sm:mt-[0em] mb-[8em] flex flex-col ">
        <p 
          className=" mx-auto inline-block text-center text-[20px] font-[600]"
          style={{
            backgroundImage: "radial-gradient(circle, #00FFB0, #48D0FF, #5F5FC9, #C32782)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >Trusted by Top Sales Teams Worldwide</p>
        <div className="flex gap-12 mt-5 sm:mt-10 z-[2] px-4 w-[100%] mx-auto overflow-auto scroll no-scrollbar">
          <Waverio className="hover:scale-[1.08] cursor-pointer transition-all flex-shrink-0 h-[40px] w-[140px] sm:w-[170px] " />
          <LogoIpsum className="hover:scale-[1.08] cursor-pointer transition-all flex-shrink-0 h-[40px] w-[140px] sm:w-[170px] " />
          <Alterbone className="hover:scale-[1.08] cursor-pointer transition-all flex-shrink-0 h-[40px] w-[140px] sm:w-[170px] " />
          <Incanto className="hover:scale-[1.08] cursor-pointer transition-all flex-shrink-0 h-[40px] w-[140px] sm:w-[170px] " />
          <Tinygone className="hover:scale-[1.08] cursor-pointer transition-all flex-shrink-0 h-[40px] w-[140px] sm:w-[170px] " />
          <Preso className="hover:scale-[1.08] cursor-pointer transition-all flex-shrink-0 h-[40px] w-[140px] sm:w-[170px] " />
          <Ridoria className="hover:scale-[1.08] cursor-pointer transition-all flex-shrink-0 h-[40px] w-[140px] sm:w-[170px] " />
          <Carbonia className="hover:scale-[1.08] cursor-pointer transition-all flex-shrink-0 h-[40px] w-[140px] sm:w-[170px] " />
        </div>
      </div>
      
      {/* FEATURES */}
      <div className="bg-[#000000] relative px-[1em] sm:px-[3.5em] mdx5:px-[5em] pb-[3em] pt-[4em] mdx3:py-[5em] text-center ">
        <h2 className="text-colour-gradient">FEATURES</h2>
        <h1 className="text-white text-[30px] sm:text-[40px] font-[500]">Most essential features</h1>
        <p className="text-white w-[23em] text-[14px] mx-auto">Record, Transcribe, Analyze, and Grade Sales Calls to Boost Your Team’s Success</p>

        <div className="flex flex-col-reverse mdx4:flex-row mt-10 border border-[#495677] rounded-lg overflow-hidden">
          <div className="flex flex-col justify-center relative bg-gradient-to-r from-[#414F729C] to-[#323E5A28] px-8 py-14 flex-1 text-left">
            <div className="h-[24px] mb-2 w-[24px] bg-gradient-to-r from-[#5F5FC9] to-[#C32782] rounded-full">
            </div>
            <p className="text-[#71717A] lead font-[700] w-[18em] text-[18px] leading-5">Seamless Integration with Zoom, Google Meet, and Kixie</p>
            <p className="w-[80%] pt-3 pb-8 text-[15px] text-slate-200">Easily connect your existing communication tools for effortless call recording and management.</p>

            <div className="w-[10em]">
              <Button className=" rounded-sm ">Request a Demo</Button>
            </div>

            <div className="bg-[#D9D9D9] top-4 left-4 absolute h-1 w-1 rounded-full"></div>
            <div className="bg-[#D9D9D9] top-4 right-4 absolute h-1 w-1 rounded-full"></div>
            <div className="bg-[#D9D9D9] bottom-4 left-4 absolute h-1 w-1 rounded-full"></div>
            <div className="bg-[#D9D9D9] bottom-4 right-4 absolute h-1 w-1 rounded-full"></div>
          </div>
          {/*  */}
          <div className="bg-[#71717A] px-3 py-12 flex-1 ">
            <Image src={"/images/homepage/features.png"} className="w-[100%] h-[15em] mdx4:h-[23vw]" alt="feature" width={10000} height={10000} />
          </div>
        </div>
        <div className="flex flex-col gap-10 mdx3:flex-row mdx3:gap-4 py-5 z-[2] relative px-8 border border-[#495677] rounded-lg bg-gradient-to-r from-[#414F729C] to-[#323E5A28] mt-5 ">
          
          <div className="text-left">
            <div className="h-[24px] mb-2 w-[24px] bg-gradient-to-r from-[#5F5FC9] to-[#C32782] rounded-full">
            </div>
            <p className="text-[#71717A] font-[700]  text-[18px]">AI-Powered Performance Grading</p>
            <p className="w-[80%] pt-1 text-[15px] text-slate-200">Proprietary AI algorithms analyze and grade sales calls based on your sales education material.</p>
          </div>
          <div className="text-left">
            <div className="h-[24px] mb-2 w-[24px] bg-gradient-to-r from-[#5F5FC9] to-[#C32782] rounded-full">
            </div>
            <p className="text-[#71717A] font-[700]  text-[18px]">AI-Powered Performance Grading</p>
            <p className="w-[80%] pt-1 text-[15px] text-slate-200">Proprietary AI algorithms analyze and grade sales calls based on your sales education material.</p>
          </div>
          <div className="text-left">
            <div className="h-[24px] mb-2 w-[24px] bg-gradient-to-r from-[#5F5FC9] to-[#C32782] rounded-full">
            </div>
            <p className="text-[#71717A] font-[700]  text-[18px]">AI-Powered Performance Grading</p>
            <p className="w-[80%] pt-1 text-[15px] text-slate-200">Proprietary AI algorithms analyze and grade sales calls based on your sales education material.</p>
          </div>

        </div>

       <Image className="absolute right-[25%] bottom-[-250px] scale-[1.4] h-[40em] w-[40em] rotate-[180deg] opacity-[0.25] " src={ellipse1} alt="ellips" width={10000} height={10000} />
      </div>
      
      {/* CALL ANALYSIS */}
      <div className=" bg-[#161529] relative px-[1em] sm:px-[3.5em] mdx5:px-[5em] py-[2em] sm:py-[3em] mdx3:py-[5em]">
        <div className="w-[95%] sm:w-[32em]">
          <h1 className="text-white text-[30px] sm:text-[40px] font-[600] leading-[43px]">Durekt <span className="text-[#C32782] inline-block">AI-Powered</span> Call Analysis</h1>
          <p className="text-[#A1A1AA] mt-3 ">Lorem ipsum dolor sit amet consectetur. Id interdum non sem adipiscing malesuada viverra gravida interdum ut. Netus tempor.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-14 sm:mt-24 gap-6 relative ">
          {howItWorks.map(item => (
            <div className="bg-[#000000B2] flex flex-col justify-between py-6 rounded-lg z-[2] ">
              <Image alt="flexible-img" src={item.img} className="w-[100%]" height={5000} width={5000} />
              <div className="mt-6 text-center px-6">
                <h1 className="text-white font-[700] text-[20px]">{item.header}</h1>
                <p className="text-[#A1A1AA] text-[14px] mt-2">{item.body}</p>
              </div>
            </div>
          ))}

          <Image className="hidden sm:flex absolute scale-[0.5] origin-bottom-left bottom-20 opacity-[1] z-[1]" src={ellipse1} alt="ellips" width={10000} height={10000} />
          <Image className="hidden sm:flex absolute scale-[0.5] origin-bottom-right bottom-20 opacity-[1] z-[1]" src={ellipse1} alt="ellips" width={10000} height={10000} />
        </div>


      </div>
        
      {/* TESTIMONIALS */}
      <div className="flex flex-col bg-black px-[1em] sm:px-[3.5em] mdx5:px-[5em] pt-[4em] pb-[10em] ">
        <div className=" flex-1 flex flex-col items-center mdx3:items-start mb-[3em]">
          <h1 className="text-colour-gradient">Testimonials</h1>
          <h1 className="text-[30px] text-center mdx3:text-left mdx3:text-[45px] w-[100%] font-[600] leading-[40px] mt-3">What Our Valuable Clients Say About Us</h1>
        </div>

        <div className="flex gap-6 flex-1">
          
          <div className="relative bg-[#18181B] px-[1px] py-[1px] rounded-xl overflow-hidden">
            <div 
              ref={borderRef} 
              className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-[#48D0FF] to-[#C32782]"
              style={{
                background: 'linear-gradient(to right, #48D0FF, #C32782)',
                transform: 'rotate(0deg)',
                transition: 'all 0.5s ease-in-out',
              }}
            >
            </div>
            <div className="relative z-[4] bg-[#18181B] px-6 py-8 rounded-xl">
              <div className="flex gap-2">
                <StarIcon className="h-[20px] w-[20px]"  />
                <StarIcon className="h-[20px] w-[20px]"  />
                <StarIcon className="h-[20px] w-[20px]"  />
                <StarIcon className="h-[20px] w-[20px]"  />
                <StarIcon  className="h-[20px] w-[20px]" />
              </div>
              <p className="py-4 text-[14.5px]">Lorem ipsum dolor sit amet consectetur. Arcu convallis eget adipiscing pellentesque et semper non. Et diam et at risus convallis hendrerit sit ac quam. Molestie. Arcu convallis eget adipiscing pellentesque et semper non.</p>
              <div className="mt-2 flex gap-2">
                <div className="w-[43px]  bg-slate-600 rounded-full">
                </div>
                <div>
                  <p className="text-[#71717A] text-[14.5px] font-[600]">Name Surname</p>
                  <p className="text-[12px] mt-1 ">Director of ICT, CreativeGig</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-[#18181B] px-[1px] py-[1px] rounded-xl overflow-hidden">
            <div 
              ref={borderRef} 
              className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-[#48D0FF] to-[#C32782]"
              style={{
                background: 'linear-gradient(to right, #48D0FF, #C32782)',
                transform: 'rotate(0deg)',
                transition: 'all 0.5s ease-in-out',
              }}
            >
            </div>
            <div className="relative z-[4] bg-[#18181B] px-6 py-8 rounded-xl">
              <div className="flex gap-2">
                <StarIcon className="h-[20px] w-[20px]"  />
                <StarIcon className="h-[20px] w-[20px]"  />
                <StarIcon className="h-[20px] w-[20px]"  />
                <StarIcon className="h-[20px] w-[20px]"  />
                <StarIcon  className="h-[20px] w-[20px]" />
              </div>
              <p className="py-4 text-[14.5px]">Lorem ipsum dolor sit amet consectetur. Arcu convallis eget adipiscing pellentesque et semper non. Et diam et at risus convallis hendrerit sit ac quam. Molestie. Arcu convallis eget adipiscing pellentesque et semper non.</p>
              <div className="mt-2 flex gap-2">
                <div className="w-[43px]  bg-slate-600 rounded-full">
                </div>
                <div>
                  <p className="text-[#71717A] text-[14.5px] font-[600]">Name Surname</p>
                  <p className="text-[12px] mt-1 ">Director of ICT, CreativeGig</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <div className="flex flex-col-reverse mdx5:flex-row bg-[#161529] px-[1em] sm:px-[3.5em] mdx5:px-[5em] py-[3.5em] mdx5:py-[10em] gap-12">
        
        <div className="relative flex-[0.85]">
          <Image className="absolute scale-[1.5] right-[140px] opacity-[0.7] z-[1]" src={ellipse1} alt="ellips" width={10000} height={10000} />

          <div className="relative flex py-8 px-4 sm:px-10 flex-col  bg-[#000000c0] rounded-lg z-[2]  ">
              
              {howItWorks.map((item, i) => (
                <div className="mb-8">
                  <div className="flex gap-5">
                    <div className="w-[50px] flex-shrink-0 h-[50px] flex justify-center items-center rounded-full bg-[#18181B] text-white">
                      <p>{i+1}</p>
                    </div>  
                    <div>
                      <p className="font-[700] text-[18px]">{item.header}</p>
                        <p className="text-[#A1A1AA] text-[14px]">{item.body}</p>
                    </div>
                  </div>
                  {!(i + 1 === 5) && <div className="h-[1.3px] w-full mt-8 bg-gradient-to-r from-[#5F5FC9] to-[#C32782]"></div>}
                </div>
              ))}

          </div>
        </div>

        <div className=" flex-1 flex flex-col justify-center ">

          <div className="w-[100%] sm:w-[28em]">
            <h2 className="text-colour-gradient" >HOW IT WORKS</h2>
            <h1 className="text-[30px] mdx3:text-[40px] leading-[40px] mt-3">Discover the seamless process using Durekt</h1>
            <p className="text-[#A1A1AA] text-[16px] pt-3 pb-8">Lorem ipsum dolor sit amet consectetur. Id interdum non sem adipiscing malesuada viverra gravida interdum ut. Netus tempor.</p>

            <div className="w-[10em]">
              <Button className="rounded-sm">Get Started Now</Button>
            </div>
          </div>

        </div>

      </div>
       */}

      {/* OUR PRICING */}
      {/* <div className="bg-[#000000] px-[1em] sm:px-[3.5em] mdx5:px-[5em] py-[4em] mdx4:py-[9em] text-center">
          <div>
            <h2 className="text-colour-gradient">OUR PRICING</h2>
            <h1 className="text-[35px] sm:text-[45px] leading-[40px] ">Simple, easy pricing</h1>
            <div className="relative inline-block mt-2 sm:mt-5 text-[13px] sm:text-[14px]">
              <p className="text-[#A1A1AA] ">Best Pricing for you, for more information <span className="text-[#C32782] underline font-[700] relative inline-block">Click Here <Line2 className="absolute scale-[0.8] right-0 translate-x-[75%]" /></span></p>
            </div>
          </div>

          <PricingUi />
      </div> */}

      {/* HOW IT WORKS */}
      <div className="bg-[#000000] px-[1em] sm:px-[3.5em] mdx5:px-[5em] py-[3em] sm:py-[4em] mdx4:py-[9em] text-center">
        <h2 className="z-[2] relative text-colour-gradient" >HOW IT WORKS</h2>
        <h1 className="z-[2] relative text-[30px] mdx3:text-[45px] leading-[40px] mt-5 font-[600]">Discover the seamless process using Durekt</h1>
        <p className="z-[2] relative text-[#A1A1AA] text-[16px] sm:text-[20px] pt-3 pb-8">Lorem ipsum dolor sit amet consectetur. Id interdum non sem adipiscing malesuada viverra gravida interdum ut. Netus tempor.</p>

        <div className="flex overflow-y-hidden overflow-x-auto sm:grid sm:grid-cols-2 mdx4:grid-cols-3 gap-y-10 gap-x-6 px-[0em] sm:px-[2em] mdx2:px-[4em] mt-3 relative">
          {[0,2,3,4,5,5].map(item => (
            <div className="relative w-[18em] sm:w-auto flex-shrink-0 bg-[#18181B] z-[2] pb-[2px] rounded-sm overflow-hidden">
              <div 
                ref={borderRef} 
                className="absolute inset-0 rounded-sm border-2 border-transparent bg-gradient-to-r from-[#48D0FF] to-[#C32782]"
                style={{
                  background: 'linear-gradient(to right, #48D0FF, #C32782)',
                  transform: 'rotate(0deg)',
                  transition: 'all 0.5s ease-in-out',
                }}
              >
              </div>
              <div className=" relative py-8 px-4 bg-[#18181B] flex flex-col items-center">
                  <div className="bg-[#040408] w-10 h-10 rounded-full text-white text-center flex items-center justify-center">1</div>
                  <h1 className="font-[700] text-[18px]">Sign Up</h1>
                    <p className="text-[#A1A1AA] text-[14.5px] ">Lorem ipsum dolor sit amet consectetur. Leo et sit amet nunc bibendum scelerisque. Bibendum.</p>
              </div>
            </div>              
          ))}

          <Image className="absolute scale-[0.4] origin-bottom-left left-[30%] -bottom-24 opacity-[0.7] z-[1]" src={ellipse1} alt="ellips" width={10000} height={10000} />
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-[#161529] px-[1em] sm:px-[3.5em] mdx5:px-[5em] py-[3em] sm:py-[5em] relative">
        <h2 className="text-colour-gradient ">FAQ</h2>
        <h1 className="text-[30px] md:text-[50px] w-[90%] sm:w-[13em] leading-[37px] md:leading-[50px] mt-[0.5em]">Answers to our frequently asked questions</h1>
        <Image className="hidden sm:flex absolute scale-[0.5] origin-top-right top-[50px] right-[25%]  opacity-[0.5] z-[1]" src={ellipse1} alt="ellips" width={10000} height={10000} />

        <div className="mt-[40px] sm:mt-[80px]">
          <FaqUI />
        </div>
      </div>

      {/* READY TRANSFORM */}
      <div className="bg-[#161529] relative px-[1em] sm:px-[3.5em] mdx5:px-[5em] pt-[3em] sm:pt-[15em] pb-[10em] text-center flex flex-col">
          <h1 className="text-[35px] leading-[50px] pb-3 sm:text-[50px] font-[500]">Ready to Transform Your Sales Team?</h1>
            <p className="text-[#D9D9D9] text-[16px] w-[20em] mx-auto">Experience the power of AI-driven sales call analysis today.</p>

          <div className="flex flex-col sm:flex-row gap-4 w-[80%] sm:w-[25em] mx-auto mt-14">
              <Button className=" rounded-sm " color="bg-[#334155]">Start Free Trial</Button>
              <Button className=" rounded-sm">Request a Demo</Button>
          </div>

          <Image className="absolute scale-[1] h-[18em] w-[18em] left-[0px] sm:left-[0px] opacity-[1] z-[1]" src={rectangleImg} alt="ellips" width={10000} height={10000} />
          <Image className="absolute scale-[1] h-[18em] w-[18em] right-[0px] sm:right-[0px] opacity-[1] z-[1] rotate-[180deg]" src={rectangleImg} alt="ellips" width={10000} height={10000} />

      </div>
    </HomeLayout>
  );
}

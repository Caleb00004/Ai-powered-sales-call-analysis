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
    header: "Easy Integration",
    body: "Connect with your preferred communication platform in just a few clicks."
  },
  {
    header: "Automatic Call Recording",
    body: "Automatically record all your sales calls for analysis."
  },
  {
    header: "Accurate Transcription",
    body: "Transcribe calls into text with high accuracy, even with diverse accents."
  },
  {
    header: "AI-Powered Analysis",
    body: "Let AI analyze and grade calls based on your unique sales training material."
  },
  {
    header: "Actionable Insights",
    body: "View detailed insights and feedback on a user-friendly dashboard."
  },
]
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const borderRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [visible, setVisible] = useState(5);

  // useEffect(() => {
  //   gsap.to(borderRef.current, {
  //     rotation: 360,
  //     duration: 1,
  //     repeat: -1,
  //     ease: 'linear'
  //   });
  // }, []);

  return (
    <HomeLayout>
      <div className="bg-[#161529] px-[5em] py-[5em] overflow-hidden">
        <div className="flex justify-between ">
          <div className=" w-[28.5em] mt-7 ">
            <h1 className="text-[3em] leading-[50px]">Revolutionize Your Sales Performance with <span className="text-[#C32781]">AI-Powered</span> Call Analysis</h1>
            <p className="pt-6 pb-6 font-[300]">Record, Transcribe, Analyze, and Grade Sales Calls to Boost Your Team’s Success</p>
            <div className="flex gap-4">
              <Button className="py-3 rounded-sm border border-[#B3387F] hover:bg-transparent transition-all active:scale-[0.95]">Get Started</Button>
              <Button className="py-3 rounded-sm bg-transparent border text-[#B3387F] border-[#B3387F] hover:bg-[#B3387F] transition-all active:scale-[0.95]">Download Extension</Button>
            </div>
          </div>
          <div className="relative mx-auto ">
            <Image className="absolute scale-[3] opacity-[0.6] z-[1]" src={ellipse1} alt="ellips" width={10000} height={10000} />

            <div className="flex relative z-[1] flex-col gap-1 ">
              <div className="py-5 pl-4 pr-16 bg-[#000000B2] cursor-pointer hover:scale-[1.03] origin-bottom-right transition-all">
                <h1 className="text-[2.5em] font-[400]">1M+</h1>
                <p className="text-[#A1A1AA] text-[15px]">Analysis Delivered This Month</p>
              </div>
              <div className="py-5 pl-4 pr-16 bg-[#000000B2] cursor-pointer hover:scale-[1.03] origin-bottom-right transition-all">
                <h1 className="text-[2.5em] font-[400]">46K+</h1>
                <p className="text-[#A1A1AA] text-[15px]">Active Customers Rate</p>
              </div>
              <div className="py-5 pl-4 pr-16 bg-[#000000B2] cursor-pointer hover:scale-[1.03] origin-bottom-right transition-all">
                <h1 className="text-[2.5em] font-[400]">99%</h1>
                <p className="text-[#A1A1AA] text-[15px]">Customer Satisfaction Rate</p>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-[11em] mb-[3em] flex flex-col">
          <p 
            className=" mx-auto inline-block text-[20px] font-[600]"
           style={{
              backgroundImage: "radial-gradient(circle, #00FFB0, #48D0FF, #5F5FC9, #C32782)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >Trusted by Top Sales Teams Worldwide</p>
          <div className="flex gap-12 justify-center mt-10 z-[2]">
            <Waverio className="hover:scale-[1.08] cursor-pointer transition-all " />
            <LogoIpsum className="hover:scale-[1.08] cursor-pointer transition-all " />
            <Alterbone className="hover:scale-[1.08] cursor-pointer transition-all " />
            <Incanto className="hover:scale-[1.08] cursor-pointer transition-all " />
          </div>
          <div className="flex gap-8 justify-center mt-10 z-[2]">
            <Tinygone className="hover:scale-[1.08] cursor-pointer transition-all " />
            <Preso className="hover:scale-[1.08] cursor-pointer transition-all " />
            <Ridoria className="hover:scale-[1.08] cursor-pointer transition-all " />
            <Carbonia className="hover:scale-[1.08] cursor-pointer transition-all " />
          </div>
        </div>
      </div>
      
      {/* FEATURES */}
      <div className="bg-[#000000] relative px-[5em] py-[5em] text-center ">
        <h2 className="text-colour-gradient">FEATURES</h2>
        <h1 className="text-white text-[40px] font-[500]">Most essential features</h1>
        <p className="text-white w-[23em] text-[14px] mx-auto">Record, Transcribe, Analyze, and Grade Sales Calls to Boost Your Team’s Success</p>

        <div className="flex mt-10 border border-[#495677] rounded-lg overflow-hidden">
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
            <Image src={featureimg} className="w-[100%] h-[23vw]" alt="feature" width={10000} height={10000} />
          </div>
        </div>
        <div className="py-5 z-[2] relative px-8 border border-[#495677] rounded-lg bg-gradient-to-r from-[#414F729C] to-[#323E5A28] mt-5 flex gap-4">
          
          <div className="text-left">
            <div className="h-[24px] mb-2 w-[24px] bg-gradient-to-r from-[#5F5FC9] to-[#C32782] rounded-full">
            </div>
            <p className="text-[#71717A] font-[700] w-[18em] text-[18px]">AI-Powered Performance Grading</p>
            <p className="w-[80%] pt-1 text-[15px] text-slate-200">Proprietary AI algorithms analyze and grade sales calls based on your sales education material.</p>
          </div>
          <div className="text-left">
            <div className="h-[24px] mb-2 w-[24px] bg-gradient-to-r from-[#5F5FC9] to-[#C32782] rounded-full">
            </div>
            <p className="text-[#71717A] font-[700] w-[18em] text-[18px]">AI-Powered Performance Grading</p>
            <p className="w-[80%] pt-1 text-[15px] text-slate-200">Proprietary AI algorithms analyze and grade sales calls based on your sales education material.</p>
          </div>
          <div className="text-left">
            <div className="h-[24px] mb-2 w-[24px] bg-gradient-to-r from-[#5F5FC9] to-[#C32782] rounded-full">
            </div>
            <p className="text-[#71717A] font-[700] w-[18em] text-[18px]">AI-Powered Performance Grading</p>
            <p className="w-[80%] pt-1 text-[15px] text-slate-200">Proprietary AI algorithms analyze and grade sales calls based on your sales education material.</p>
          </div>

        </div>

       <Image className="absolute right-[25%] bottom-[-250px] scale-[1.4] h-[40em] w-[40em] rotate-[180deg] opacity-[0.25] " src={ellipse1} alt="ellips" width={10000} height={10000} />
      </div>
        
      {/* TESTIMONIALS */}
      <div className="bg-black px-[5em] pt-[12em] pb-[10em] flex">
        <div className=" flex-1">
          <h1 className="text-colour-gradient">Testimonials</h1>
          <h1 className="text-[40px] w-[8.5em] leading-[40px] mt-3">What Our Valuable Clients Say About Us</h1>
          <div className="w-[10em] mt-8">
            <Button>View all Testimonials</Button>
          </div>
        </div>
        <div className="flex flex-col gap-6 flex-1">
          
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
            <div className="relative z-10 bg-[#18181B] px-6 py-8 rounded-xl">
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
            <div className="relative z-10 bg-[#18181B] px-6 py-8 rounded-xl">
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

      {/* HOW IT WORKS */}
      <div className="bg-[#161529] px-[5em] py-[10em] flex gap-12">
        
        <div className="relative flex-[0.85]">
          <Image className="absolute scale-[1.5] right-[140px] opacity-[0.7] z-[1]" src={ellipse1} alt="ellips" width={10000} height={10000} />

          <div className="relative flex py-8 px-10 flex-col  bg-[#000000c0] rounded-lg z-[2]  ">
              
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
        {/*  */}
        <div className=" flex-1 flex flex-col justify-center ">

          <div className="w-[28em]">
            <h2 className="text-colour-gradient" >HOW IT WORKS</h2>
            <h1 className="text-[40px] leading-[40px] mt-3">Discover the seamless process using Durekt</h1>
            <p className="text-[#A1A1AA] text-[16px] pt-3 pb-8">Lorem ipsum dolor sit amet consectetur. Id interdum non sem adipiscing malesuada viverra gravida interdum ut. Netus tempor.</p>

            <div className="w-[10em]">
              <Button className="rounded-sm">Get Started Now</Button>
            </div>
          </div>

        </div>

      </div>
      
      {/* OUR PRICING */}
      <div className="bg-[#000000] px-[8em] py-[9em] text-center">
          <div>
            <h2 className="text-colour-gradient">OUR PRICING</h2>
            <h1 className="text-[45px] leading-[40px] ">Simple, easy pricing</h1>
            <div className="relative inline-block mt-5">
              <p className="text-[#A1A1AA] ">Best Pricing for you, for more information <span className="text-[#C32782] underline font-[700]">Click Here</span></p>
              <Line2 className="absolute scale-[0.8] right-0 translate-x-[75%]" />
            </div>
          </div>

          <div className="flex gap-8 mt-[7em]">
            {[0, 2, 2].map((item, index) => (
              <div
                className="p-[1.5px] flex-1 rounded-md"
                style={index + 1 == 2 ? {
                  background: 'linear-gradient(to right, #48D0FF, #C32782)',
                  transform: 'rotate(0deg)',
                  transition: 'all 0.5s ease-in-out',
                } : {

                }}
              >
                <div className="bg-[#18181B] rounded-md text-left pt-8 pb-10 px-5">
                  <div className="w-[80%]">
                    <h2 className="text-[18px]">Personal</h2>
                    <h1><span className="text-[40px]">$12</span><span className="text-[#71717A] pl-2">/month</span></h1>
                    <p className="text-[#A1A1AA] pt-2">All the basic features to boost your freelance career</p>
                  </div>
                  <div className="h-[1px] bg-[#27272A] my-7" />
                  <div className="flex flex-col gap-5">
                    {[1,2,3,4,5].map((item, index) => ( 
                      <div className="flex items-center gap-2">
                      <CheckIcon />
                      <p className="text-slate-300">Full Access to Landingfolio</p>
                      <InfoIcon />
                    </div>))}
                  </div>
                  <Button className={`${index + 1 == 2 ? "bg-[#B3387F]" : "bg-transparent border rounded-md border-gradient "} mt-8 py-3 rounded-sm`}>Get 14 Days Free Trial</Button>
                </div>
              </div>
            ))}

            {/* <div className="relative bg-[#18181B] px-[1px] py-[1px] rounded-xl overflow-hidden">
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
              <h1>Hello</h1>
                            <h1>Hello</h1>
                                          <h1>Hello</h1>
                                                        <h1>Hello</h1>

            </div> */}
          </div>
      </div>

      {/* FAQ */}
      <div className="bg-[#161529] px-[5em] py-[5em] relative">
        <h2 className="text-colour-gradient ">FAQ</h2>
        <h1 className="text-[50px] w-[13em] leading-[50px] mt-[0.5em]">Answers to our frequently asked questions</h1>
        <Image className="absolute scale-[0.5] bottom-[-500px] opacity-[0.5] z-[1]" src={ellipse1} alt="ellips" width={10000} height={10000} />

        <div className="mt-[80px]">
          {faqs.slice(0, visible).map((faq, index) => {
            return (
              <Accordion key={index} className="mt-[5px] py-1 z-[2] px-2 bg-[#000000B2] border-b border-b-[#C32782] text-[#DBDBDB] ">
                <AccordionSummary
                  expandIcon={
                    <ArrowIcon className="rotate-[90deg] text-[#DBDBDB]" />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      // color: "#4A2A23",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "#FFFFFF",
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
          {/* <div className="w-[330px] bg-rose-500 flex items-center justify-center ">
            <button
              onClick={() => {
                setShowMore(!showMore);
                !showMore ? setVisible(faqs.length) : setVisible(4);
              }}
              className="text-[#087E18] flex items-center justify-center font-[600] transition-transform duration-200 delay-200  "
            >
              {!showMore ? `Show All (${faqs.length})` : "Show Less"}
              <ArrowIcon className={`${showMore ? "text-[#585858] transition-transform transform rotate-[280deg] ease-out" : "text-[#585858]"} rotate-[90deg]`} />
            </button>
          </div> */}
        </div>
      </div>

      {/* READY TRANSFORM */}
      <div className="bg-[#161529] relative px-[5em] pt-[15em] pb-[10em] text-center flex flex-col">
          <h1 className="text-[50px] font-[500]">Ready to Transform Your Sales Team?</h1>
            <p className="text-[#D9D9D9] text-[16px] w-[20em] mx-auto">Experience the power of AI-driven sales call analysis today.</p>

          <div className="flex gap-4 w-[25em] mx-auto mt-14">
              <Button className=" rounded-sm bg-[#334155]">Start Free Trial</Button>
              <Button className=" rounded-sm">Request a Demo</Button>
          </div>

          <Image className="absolute scale-[1] h-[18em] w-[18em] left-[80px] opacity-[1] z-[1]" src={rectangleImg} alt="ellips" width={10000} height={10000} />
          <Image className="absolute scale-[1] h-[18em] w-[18em] right-[80px] opacity-[1] z-[1] rotate-[180deg]" src={rectangleImg} alt="ellips" width={10000} height={10000} />

      </div>
    </HomeLayout>
  );
}

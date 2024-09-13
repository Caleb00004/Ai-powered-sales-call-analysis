import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowIcon from "../../../public/svgs/arrow2-icon.svg"
import { FC, useState } from "react";
import { SxProps, Theme } from "@mui/material";


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

interface props {
    className?: string
    detailsClassName?: string
    containerStyle?: SxProps<Theme> | undefined,
    headerStyle?: SxProps<Theme> | undefined,
    detailsStyle?: SxProps<Theme> | undefined,
    headerClassName?: string
}

const FaqUI:FC<props> = ({className, containerStyle, detailsClassName, headerClassName}) => {
    const [showMore, setShowMore] = useState(false);
    const [visible, setVisible] = useState(5);

    return (
        <>
            {faqs.slice(0, visible).map((faq, index) => {
            return (
              <Accordion sx={containerStyle} key={index} className={` py-1 z-[2] px-2  ${className ? className : "bg-[#00000099] mt-[5px] border-b border-b-[#C32782] text-[#DBDBDB]"}`}>
                <AccordionSummary
                  expandIcon={
                    <ArrowIcon className="rotate-[90deg] text-[#DBDBDB]" />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p
                    className={` ${headerClassName ? headerClassName : "text-[14px] sm:text-[16px]"}`}
                  >
                    {faq.question}
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p
                    className={` ${detailsClassName ? detailsClassName : "text-[#FFFFFF] text-[13px] sm:text-[16px]"}`}
                  >
                    {faq.answer}
                  </p>
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
        </>
    )
}

export default FaqUI
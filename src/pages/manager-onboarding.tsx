import Image from "next/image";
import { Inter } from "next/font/google";
import RightContainer from "@/components/manager_onboarding/right/rightContainer";
import LeftContainer from "@/components/manager_onboarding/left/leftContainer";
import gsap from "gsap";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
 
export default function ManagerOnboarding() {
    const ACCOUNT_TYPE: "sales-rep" | "manager" = "sales-rep"

    useEffect(() => {
        gsap.timeline()
            .fromTo(".onboarding", {autoAlpha: 0}, {autoAlpha: 1})
            .fromTo(".left-container", {x: "-100%"}, {x: 0 })
            .fromTo(".right-container", {x: "100%"}, {x: 0,}, "<0.2")
            .fromTo(".carousel-head", {opacity: 0, x: -25}, {opacity: 1, x: 0, ease: "back"}, "<0.35")
            .fromTo(".carousel-body", {opacity: 0, x: 25}, {opacity: 1, x: 0, ease: "back"}, "<")
            .fromTo(".carousel-img", {opacity: 0}, {opacity: 1})
            .fromTo(".carousel-nav", {opacity: 0}, {opacity: 1}, "<")
    },[])

    return (
        <main className="onboarding overflow-hidden invisible flex flex-col mdx3:flex-row mdx3:h-screen ">
            <LeftContainer accountType={ACCOUNT_TYPE} />
            <RightContainer accountType={ACCOUNT_TYPE} />
        </main>
    );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import RightContainer from "@/components/manager_onboarding/right/rightContainer";
import LeftContainer from "@/components/manager_onboarding/left/leftContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" flex flex-col mdx3:flex-row mdx3:h-screen ">
      <LeftContainer />
      <RightContainer />
    </main>
  );
}

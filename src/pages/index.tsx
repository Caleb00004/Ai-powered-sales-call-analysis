import { Inter } from "next/font/google";
import HomeLayout from "@/components/layouts/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <HomeLayout>
      <h1>Home Pag e</h1>
    </HomeLayout>
  );
}

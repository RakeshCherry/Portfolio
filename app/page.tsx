import Achivements from "@/components/Achivements";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      
      <div className="max-w-7lx w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Skills/>
        <RecentProjects/>
        <Achivements/>
      </div>
    </main>
  );
}

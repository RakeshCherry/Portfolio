import dynamic from 'next/dynamic';
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";

// Dynamically import components
const Achievements = dynamic(() => import('@/components/Achivements'));
const Approach = dynamic(() => import('@/components/Approach'));
const Footer = dynamic(() => import('@/components/Footer'));
const Grid = dynamic(() => import('@/components/Grid'));
const Hero = dynamic(() => import('@/components/Hero'));
const RecentProjects = dynamic(() => import('@/components/RecentProjects'));
const Skills = dynamic(() => import('@/components/Skills'));

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7lx w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Skills/>
        <RecentProjects/>
        <Achievements/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}














// import Achivements from "@/components/Achivements";
// import Approach from "@/components/Approach";
// import Footer from "@/components/Footer";
// import GmailConnect from "@/components/GmailConnect";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
// import OtherSkills from "@/components/OtherSkills";
// import RecentProjects from "@/components/RecentProjects";
// import Skills from "@/components/Skills";
// import { FloatingNav } from "@/components/ui/FloatingNav";
// import { navItems } from "@/data";
// import Image from "next/image";
// import Link from "next/link";
// import { FaHome } from "react-icons/fa";


// export default function Home() {
//   return (
//     <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      
//       <div className="max-w-7lx w-full">
//         <FloatingNav navItems={navItems}/>
//         <Hero/>
//         <Grid/>
//         <Skills/>
//         <RecentProjects/>
//         <Achivements/>
//         <Approach/>
//         <Footer/>
//         {/* <GmailConnect/> */}
//       </div>
//     </main>
//   );
// }


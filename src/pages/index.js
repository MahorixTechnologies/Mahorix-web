import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Layout } from "@/partials";
// import './index.css'
import Header from "./home/header";
import Courses from "./home/courses";
import Chooseus from "./home/chooseus";
import Testimony from "./home/testimony";
import KnowledgeCenter from "./home/knowledge-center";
import Transform from "./home/transform";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="">
    <Layout className={'flex flex-col gap-[40px]'}  >
       <Header />
       <Courses />
       <Chooseus />
       <Testimony />
       <KnowledgeCenter />
       <Transform />
    </Layout>
   </div>

  );
}

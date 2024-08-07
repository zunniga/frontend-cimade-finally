import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/components/home/Index";
import Graduates from "@/components/graduates/Graduate";
import Presentation from "@/components/presentation/page";
import Courses from "@/components/courses/Courses";
import Whatsapp from '@/components/whatsapp/Index';
import Contact from "@/components/contacts/Index"


export default function Main() {
  return (
    <main>
    <div>
    <Home/>
    <Graduates/>
    <Presentation/>
    <Courses/>
    <Contact/>
    <Whatsapp/>
    </div>
    </main>
  );
}

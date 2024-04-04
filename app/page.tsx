import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/components/home/Index";
import Graduates from "@/components/homeContend/Graduate";
import Presentation from "@/components/presentation/page"

export default function Main() {
  return (
    <main>
    <div>
    <Home/>
    <Presentation/>
    <Graduates/>

    </div>
    </main>
  );
}

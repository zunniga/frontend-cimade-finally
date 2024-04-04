import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/components/home/Index";
import Graduates from "@/components/homeContend/Graduate";

export default function Main() {
  return (
    <main>
    <div>
    <Home/>
    <Graduates/>
    </div>
    </main>
  );
}

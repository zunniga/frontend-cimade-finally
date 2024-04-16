"use client"
import React from "react";
import GraduateGestionSolidos from "@/components/graduate/IngAmbientaly/GraduateGestionSolidos";
import GraduateIrrigation from "@/components/graduate/IngAgronomy/GraduateIrrigation";
import GraduateGestionMunicipal from "@/components/graduate/IngAmbientaly/GraduateGestionMunicipal";
import GraduateTechnicalIrrigation from "@/components/graduate/IngAgronomy/GraduateTechnicalIrrigation";
import GraduateTechnicalAssistant from "@/components/graduate/IngCivil/GraduateTechnicalAssistant";
import GraduateIngVial from "@/components/graduate/IngCivil/GraduateIngVial";
import GraduateIngBridge from "@/components/graduate/IngCivil/GraduateIngBridge";
import GraduateWorksSupervision from "@/components/graduate/IngCivil/GraduateWorksSupervision";
import GraduateFoodQuality from "@/components/graduate/IngAlimentary/GraduateFoodQuality";
import GraduateSsoma from "@/components/graduate/ssoma/GraduateSsoma";
import Whatsapp from "@/components/whatsapp/Index";
import GraduateEstudioImpacto from "@/components/graduate/IngAmbientaly/GraduateEstudioImpacto";
import GraduateMonitoreoAmbiental from "@/components/graduate/IngAmbientaly/GraduateMonitoreoAmbiental";
import { TitleText, TypingText } from "@/components/share/CustomText";
import { staggerContainerInitial } from "@/components/utils/motion";
import styles from "@/styles/index";
import { motion, Variants, TargetAndTransition } from "framer-motion";
import { zoomInFrom } from "@/components/utils/motion";

const variants = staggerContainerInitial("0.1s", "0.1s");

const Graduate = () => {
  return (
    <section id="/graduate">
      <div className="relative pt-20 lg:pt-40 pb-20 lg:pb-40">
        <div className="absolute top-0 w-full h-full z-0">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/img/video/graduate.webm" type="video/webm" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-testBlue opacity-60"></div>
          {/* <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-gray-800"></span> */}
        </div>
        <div className="relative mx-auto max-w-screen-xl p-2 text-white">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth}`}
          >
            <TypingText
              title="Nuestros Diplomados"
              textStyles="text-left text-[#fff] pt-24 font-extrabold text-4xl lg:text-6xl mt-10"
            />
          </motion.div>
          <p className="font-semibold text-lg mt-2">
            ¡Te ofrecemos un servicio de calidad para segurar el exito de tu
            profesión!
          </p>
          <button className="border px-4 py-1 mt-4 rounded-xl font-semibold">
            Contacto
          </button>
        </div>
      </div>
      <div className=" p-5 flex flex-col bg-slate-300">
        <div
          className="text-white text-center text-3xl lg:text-4xl xl:text-5xl mb-10 lg:mt-10 font-extrabold border-b-4 p-2 "
          style={{
            backgroundImage: "linear-gradient(to right, #0079bb, #00dbb8)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADOS EN INGENIERÍA VIAL
        </div>
        <div className="mb-20 lg:mb-10">
          <GraduateTechnicalAssistant />
        </div>
        <div className="mb-20 lg:mb-10">
          <GraduateIngVial />
        </div>
        <div className="mb-20 lg:mb-10">
          <GraduateIngBridge />
        </div>
        <div className="mb-20 lg:mb-10">
          <GraduateWorksSupervision />
        </div>
        <div className="text-white text-center text-3xl lg:text-4xl xl:text-4xl mb-6 lg:mt-6 font-extrabold border-b-4 p-2">
          DIPLOMADOS EN INGENIERÍA AGRÓNOMA
        </div>
        <div className="mb-20 lg:mb-10">
          <GraduateIrrigation />
        </div>
        <div className="mb-20 lg:mb-10">
          <GraduateTechnicalIrrigation />
        </div>
        <div className="text-whitetext-center text-3xl lg:text-4xl xl:text-4xl mb-6 lg:mt-6 font-extrabold border-b-4 p-2">
          DIPLOMADOS EN INGENIERÍA AMBIENTAL
        </div>
        <div className="mb-20 lg:mb-10">
          < GraduateGestionSolidos />
        </div>
        <div className="mb-20 lg:mb-10">
        < GraduateMonitoreoAmbiental />
        </div>
        <div className="mb-20 lg:mb-10">
        < GraduateEstudioImpacto/>
        </div>
        <div className="mb-20 lg:mb-10">
        < GraduateGestionMunicipal />
        </div>
        <div className="text-white text-center text-3xl lg:text-4xl xl:text-4xl mb-6 lg:mt-6 font-extrabold border-b-4 p-2">
          DIPLOMADOS EN INGENIERÍA ALIMENTARIA
        </div>
        <div className="mb-20 lg:mb-10">
        < GraduateFoodQuality />
        </div>
        <div className="mb-20 lg:mb-10 border-t-4 p-2">
        < GraduateSsoma />
        </div>
      </div>
      <Whatsapp />
    </section>
  );
};

export default Graduate;

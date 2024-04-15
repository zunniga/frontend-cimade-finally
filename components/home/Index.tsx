"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Whatsapp from '@/components/whatsapp/Index';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  fadeIn,
  slideInFromLeft,
  slideInFromTop,
} from "@/components/utils/motion";
import Link from "next/link";




const videos = [
  { src: "/img/video/second_video.mp4" },
  { src: "/img/video/four.webm" },
];

const texts = [
  "Tu puerta abierta al conocimiento en vivo, desde donde estes",
  "Con nuestros Cursos y Diplomados de especialización",
];

const tittles = [
  {
    tittle1: "Transforma tu Futuro con Binex",
    color1: "from-[#00dbb8] to-[#0079bb]",
  },
  {
    tittle2: "Comienza un programa online y certifícate",
    color2: "from-[#00dbb8] to-[#0079bb]",
  },
 
];



const icons = [
  {
    img1: <FaFacebookF />,
    img2: <FaInstagram />,
    img3: <FaTiktok />,
    img4: <FaWhatsapp />,
    img5: <FaYoutube />,
  },
  {
    img1: <FaFacebookF />,
    img2: <FaInstagram />,
    img3: <FaTiktok />,
    img4: <FaWhatsapp />,
    img5: <FaYoutube />,
  },
];

const buttons = ["Contacto", "Informes"];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden) {
        setIndex((prevIndex) =>
          prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <motion.div className="relative">
        {videos.map(
          (video, i) =>
            i === index && (
              <video
                className=" opacity-30 bg-black/50 "
                key={i}
                autoPlay
                loop
                muted
                style={{
                  position: "fixed",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: -1,
                }}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
        )}





        <div className="flex flex-col justify-center items-center h-screen ">
          
          <div className="mb-10 lg:mb-0 p-2 md:mt-20 ">
          {icons.map((icon, i) => (
          i === index && (
        <motion.div
          key={i}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideInFromTop}
          className="py-1 lg:text-left text-center px-1 opacity-[0.9] "
        >
          <h1 className="text-gray-100 lg:text-2xl text-2xl text-center  lg:gap-6 gap-3 flex justify-center" >
            <Link href='https://web.facebook.com/BinexEdu' target="_blank" className="border border-testCian/25 p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-testCian/30">
              {icon.img1}
            </Link>
            <Link href='https://www.instagram.com/binex.ec/' target="_blank" className="border border-testCian/25 p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-testCian/30">
              {icon.img2}
            </Link>
            <Link href='https://www.tiktok.com/@binex.ec' target="_blank" className="border border-testCian/25 p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-testCian/30">
              {icon.img3}
            </Link>
            <Link href='https://wa.me/51921814045?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados' target="_blank" className="border border-testCian/25 p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-testCian/30">
              {icon.img4}
            </Link>
            <Link href='https://www.youtube.com/@binexeducacion/videos' className="border border-testCian/25 p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-testCian/30" target="_blank">
              {icon.img5}
            </Link>
          </h1>
        </motion.div>
        )
        ))}

            {tittles.map(
              (tittle, i) =>
                i === index && (
                  <React.Fragment key={`tittles-${i}`}>
                    <motion.div
                      key={`${i}-1`}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={slideInFromLeft(1)}
                      className="lg:leading-[4.5em]   leading-[2.3em] text-center "
                    >
                      <h1>
                        <p
                          className={`mt-6 lg:text-[83px] md:text-[45px] text-[42px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-center ${tittle.color1}`}
                        >
                          {tittle.tittle1}
                        </p>
                      </h1>
                    </motion.div>
                    <motion.div
                      key={`${i}-2`}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={slideInFromLeft(1)}
                      className="lg:leading-[4.5em]  leading-[2.3em] text-center"
                    >
                      <h1>
                        <p
                          className={`mt-6 lg:text-[80px] text-[42px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r pb-4 ${tittle.color2}`}
                        >
                          {tittle.tittle2}
                        </p>
                      </h1>
                    </motion.div>
                  </React.Fragment>
                )
            )}
            {texts.map(
              (text, i) =>
                i === index && (
                  <motion.p
                    key={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={slideInFromLeft(1.5)}
                    className="lg:text-3xl text-gray-200 mb-10 text-center"
                  >
                    {text}
                  </motion.p>
                )
            )}
            <div className="flex justify-center items-center">
              {buttons.map(
                (button, i) =>
                  i === index && (
                    <motion.button
                      key={i}
                      onClick={() => window.open('https://wa.me/51921814045?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados', '_blank')}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={slideInFromLeft(2)}
                      className="py-2 lg:text-2xl px-10 font-mono button-primary text-white cursor-pointer rounded-lg flex justify-center items-center border border-testCian/50 hover:bg-testCian/10"
                    >
                      {button}
                    </motion.button>
                  )
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={prevSlide}
            className="py-2 px-4 mr-2 font-mono text-center button-primary text-white cursor-pointer rounded-lg"
          >
            <BiChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="py-2 px-4 font-mono text-center button-primary text-white cursor-pointer rounded-lg"
          >
            <BiChevronRight className="text-xl" />
          </button>
        </div>
      </motion.div>
      <Whatsapp/>
    </div>
  );
};

export default Home;

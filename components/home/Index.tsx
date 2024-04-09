"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

const videos = [
  { src: "/img/video/second_video.mp4" },
  { src: "/img/video/tree_video.mp4" },
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
    tittle2: "Ingeniería de Calidad con Binex",
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
      <motion.div className="relative    ">
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
          <div className="mb-10 lg:mb-0 p-2 md:mt-20">
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
                      className="lg:leading-[3.8em] leading-[2.3em] text-center "
                    >
                      <h1>
                        <p
                          className={`mt-6 lg:text-[83px] text-[42px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-center ${tittle.color1}`}
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
                      className="lg:leading-[3.8em] leading-[2.3em] text-center"
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
    </div>
  );
};

export default Home;

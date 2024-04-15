"use client";
import React from "react";
import { motion, Variants, TargetAndTransition } from "framer-motion";
import { zoomInFrom } from "@/components/utils/motion";
import Image from "next/image";
import "./Style.css";


const About = () => {

  const articles = [
    {
      title: "Sweet roll gingerbread sweet roll jelly",
      category: "Cakes",
      date: "1 Jan 2020"
    },
    {
      title: "Bar cupcake chocolate topping brownie",
      category: "Chocolates",
      date: "2 Feb 2020"
    },
    {
      title: "Powder tootsie roll chocolate sugar",
      category: "Puddings",
      date: "3 Mar 2020"
    }
  ];

  return (
    <div id="/about">
      <div>
        <div>
          <div className="relative pt-20 lg:pt-40 pb-20 lg:pb-40">
            <div className="absolute top-0 w-full h-full z-0">
              <video className="w-full h-full object-cover" autoPlay loop muted>
                <source src="/img/video/graduate.webm" type="video/webm" />
              </video>
              <div className="absolute top-0 left-0 w-full h-full bg-testBlue opacity-60"></div>
              {/* <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-gray-800"></span> */}
            </div>
            <div className="relative mx-auto max-w-screen-xl p-2 text-white">
              <h1 className="font-extrabold text-4xl lg:text-6xl mt-10">
                Acerca de nosotros
              </h1>
              <p className="font-semibold text-lg mt-2">
                ¡Te ofrecemos un servicio de calidad para segurar el exito de tu
                profesión!
              </p>
              <button className="border px-4 py-1 mt-4 rounded-xl font-semibold">
                Contacto
              </button>
            </div>
          </div>
          <section className="relative bg-blueGray-50">
            <section className="pb-10 bg-blueGray-200 -mt-24">
              <div className="container mx-auto px-4">

                <motion.div
                  variants={zoomInFrom}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="flex md:flex-col flex-col gap-4 px-2 py-2 mb-8 mx-auto rounded-2xl  mt-36 hover:cursor-pointer "
                  whileHover={{ scale: 1.1, backgroundColor: "transparent" }}
                  whileTap={{ scale: 1 }}
                >
                  <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center transform hover:-translate-y-1 transition duration-600">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-testBlue p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-testBlue">
                            <i className="fas fa-award"></i>
                          </div>
                          <h6 className="text-xl text-testBlue font-semibold">
                            Misión
                          </h6>
                          <p className="mt-2 mb-4 text-black font-light">
                            Nuestro propósito es ofrecer servicios
                            especializados a empresas e individuos, destacando
                            la excelencia de nuestros ponentes con tecnología y
                            un equipo comprometido con una educación de primer
                            nivel.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-4/12 px-4 text-center transform hover:-translate-y-1 transition duration-600">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-testCian p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-testCian">
                            <i className="fas fa-retweet"></i>
                          </div>
                          <h6 className="text-xl text-testBlue font-semibold">
                            ¿Quiénes Somos?
                          </h6>
                          <p className="mt-2 mb-4 text-black font-light">
                            Nos esforzamos por ser una empresa destacada,
                            innovadora y ampliamente reconocida a nivel
                            nacional, liderando en el ámbito de la capacitación,
                            recursos humanos y consultoría, y manteniendo un
                            compromiso constante con la calidad de nuestros
                            servicios.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center transform hover:-translate-y-1 transition duration-600">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-testBlue">
                            <i className="fas fa-fingerprint"></i>
                          </div>
                          <h6 className="text-xl text-testBlue font-semibold">
                            Visión
                          </h6>
                          <p className="mt-2 mb-4 text-black font-light">
                            Ser una empresa líder, innovadora y reconocida a
                            nivel nacional, estableciendo un liderazgo en
                            capacitaciones, recursos humanos y ofrecer servicio
                            de calidad en consultoría.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

    






              </div>
              
            </section>
               
            
          </section>
          
        </div>
        <div className="container mx-auto px-4">
  
           

    </div>
      </div>
    </div>
  );
};

export default About;

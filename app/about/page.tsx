"use client";
import React from "react";
import { motion, Variants, TargetAndTransition } from "framer-motion";
import { zoomInFrom } from "@/components/utils/motion";
import Image from "next/image";
import { staggerContainerInitial } from "@/components/utils/motion";
import styles from "@/styles/index";
import { TitleText, TypingText } from "@/components/share/CustomText";
import "./Styles.css";

const About = () => {
  const articles = [
    {
      title: "Sweet roll gingerbread sweet roll jelly",
      category: "Cakes",
      date: "1 Jan 2020",
    },
    {
      title: "Bar cupcake chocolate topping brownie",
      category: "Chocolates",
      date: "2 Feb 2020",
    },
    {
      title: "Powder tootsie roll chocolate sugar",
      category: "Puddings",
      date: "3 Mar 2020",
    },
  ];

  const variants = staggerContainerInitial("0.1s", "0.1s");

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
            <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className= {`${styles.innerWidth}`}
                >
                  <TypingText
                    title="Acerca de nosotros"
                    textStyles="text-left text-[#fff] pt-24 font-extrabold text-4xl lg:text-6xl mt-10"
                    
                  />
                </motion.div>
              <p className="font-semibold text-lg mt-2">
                ¡Siempre comprometidos con tu educación , conócenos un poco más !
              </p>
             
            </div>
          </div>
          <section className="relative bg-slate-50">
            <section className="pb-10 bg-blueGray-200 -mt-24">
              <div className="container mx-auto px-4">
                <motion.div
                  variants={zoomInFrom}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="flex md:flex-col flex-col gap-4 px-2 py-2 mb-8 mx-auto rounded-2xl  mt-9 hover:cursor-pointer "
                  whileHover={{ scale: 1.1, backgroundColor: "transparent" }}
                  whileTap={{ scale: 1 }}
                >
                  <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center transform hover:-translate-y-1 transition duration-600">
                      <div className="relative flex flex-col min-w-0 break-words bg-intersting w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-testBlue p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-2xl bg-white">
                            <i className="fas fa-award"></i>
                          </div>
                          <h6 className="text-xl text-white font-semibold">
                            Misión
                          </h6>
                          <p className="mt-2 mb-4 text-slate-300 font-light">
                            Nuestro propósito es ofrecer servicios
                            especializados a empresas e individuos, destacando
                            la excelencia de nuestros ponentes con tecnología y
                            un equipo comprometido con una educación de primer
                            nivel.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-4/12 px-4 text-center transform hover:-translate-y-1 transition duration-700 ">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-testBlue p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-testCian">
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
                      <div className="relative flex flex-col min-w-0 break-words bg-intersting w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-2xl bg-white">
                            <i className="fas fa-fingerprint"></i>
                          </div>
                          <h6 className="text-xl text-white font-semibold">
                            Visión
                          </h6>
                          <p className="mt-2 mb-4 text-slate-300 font-light">
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

                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className= {`${styles.innerWidth}`}
                >
                  <TypingText
                    title="Nuestros Valores"
                    textStyles="text-center text-[#0079bb] pt-24"
                  />
                </motion.div>

                <div className="ag-format-container">
                  <div className="ag-courses_box">
                    
                    <div className="ag-courses_item">
                      <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
 
                        <div className="ag-courses-item_date-box font-semibold">
                        Excelencia
                        </div>
                        <div className="ag-courses-item_title">
                         Compromiso con la calidad, soluciones efectivas, superación de expectativas.
                        </div>

                        
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
 
                        <div className="ag-courses-item_date-box font-semibold">
                        Adaptabilidad 
                        </div>
                        <div className="ag-courses-item_title">
                        Flexibilidad, receptividad a retroalimentación, agilidad en implementación de soluciones.
                        </div>

                        
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
 
                        <div className="ag-courses-item_date-box font-semibold">
                        Integridad 
                        </div>
                        <div className="ag-courses-item_title">
                        Transparencia, ética profesional, cumplimiento de compromisos.
                        </div>

                        
                      </a>
                    </div>

                   
                    
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div className="container mx-auto px-4"></div>
      </div>
    </div>
  );
};

export default About;

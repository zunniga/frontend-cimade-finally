"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { modulesFoodQuality } from "@/components/utils/courses/course";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaRegFilePdf, FaWhatsapp } from "react-icons/fa6";
import Modal  from "@/components/share/Modal";
import Image from "next/image";
import { PiCertificate } from "react-icons/pi";
import { GoClockFill } from "react-icons/go";
import { GrPersonalComputer } from "react-icons/gr";
import { BiSolidCalendar } from "react-icons/bi";
import { PiCertificateLight } from "react-icons/pi";




const GraduateAmbientaly = () => {
const [isAccordionOpen1, setIsAccordionOpen1] = useState(false);
const [isAccordionOpen2, setIsAccordionOpen2] = useState(false);
const [openWindow, setOpenWindow] = useState<Window | null>(null);
const [showModal, setShowModal] = useState(false);
const [imageUrl, setImageUrl] = useState('');

  const handleImageClick = (image: string) => {
    setImageUrl(image);
    setShowModal(true);
  };

  const toggleAccordion1 = () => {
    setIsAccordionOpen1(!isAccordionOpen1);
    setIsAccordionOpen2(false);
  };

  const handleClick = () => {
    const newWindow = window.open('/BROCHURE/ESTUDIO_IMPACTO_AMBIENTAL.pdf');
    setOpenWindow(newWindow);

    // Descargar el archivo PDF
    const link = document.createElement('a');
    link.href = '/BROCHURE/ESTUDIO_IMPACTO_AMBIENTAL.pdf';
    link.download = 'ESTUDIO_IMPACTO_AMBIENTAL.pdf';
    link.click();
  };

  return (
    <div id="ambientaly" className="">
       <div className="md:px-20 flex flex-col sm:flex-row justify-center mb-8">
          <div className="sm:w-96 mb-4 lg:h-80 lg:w-80 sm:mb-0">
            <Image
              className="bg-cover h-96 w-96 rounded-3xl"
              src="/img/graduates/tecnico_obras.webp"
              alt="icon"
              width={800}
              height={800}
              priority={true}
            />
          </div>
          <div className="sm:w-1/2 md:px-20 sm:px-5 lg:mt-4">
          <div className="text-testBlue  font-extrabold lg:text-4xl text-2xl mb-4">
          GESTIÓN DE LA CALIDAD E INOCUIDAD ALIMENTARIA
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 italic">
                Diplomado dirigido a
                profesionales del medio ambiente, gestores de proyectos, consultores
                ambientales, autoridades reguladoras, estudiantes y académicos, profesionales de derecho ambiental, planificadores urbanos, ONGs, empresarios
                y público en general.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 text-testBlue text-sm mb-4">
              <div className="flex items-center mb-2">
              <GoClockFill className="text-lg" />
                <p className="font-bold ml-1">Inicio 18 de Mayo</p>
              </div>

              <div className="flex items-center mb-2">
              <GrPersonalComputer className="text-lg" />
                <p className="font-bold ml-1">Modalidad Online via Zoom</p>
              </div>

              <div className="flex items-center mb-2">
              <BiSolidCalendar className="text-lg" />
                <p className="font-bold ml-1">4 meses</p>
              </div>

              <div className="flex items-center mb-2">
              <PiCertificateLight className="text-lg" />
                <p className="font-bold ml-1">420 horas académicas (<span className="credits">26 créditos</span>)</p>
              </div>
            </div>
            <div className="">
              <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-2">
                <div className="w-full">
                  <Link
                    className="border-2 border-testBlue flex items-center justify-center text-gray-600 font-bold rounded-xl p-2 hover:scale-105 duration-300"
                    href='https://wa.me/51921814045?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados'
                    target="_blank">
                      <div className="items-center text-xs uppercase inline-flex">
                        <FaWhatsapp className="text-green-500 text-lg"/>
                        <h1 className="ml-1">Mas información</h1>
                      </div>
                  </Link>
                </div>
                <div className="w-full">
                  <button
                    onClick={handleClick}
                    className="border-2 border-testBlue w-full flex items-center justify-center mb- text-gray-600 font-bold rounded-xl p-2 hover:scale-105 duration-300"
                    rel="noopener noreferrer">
                      <div className="items-center text-xs uppercase inline-flex">
                        <FaRegFilePdf className="text-red-500 text-lg"/>
                        <h1 className="ml-1">Plan de estudios</h1>
                      </div>
                  </button>
                </div>
                <div>
                  <button
                    className="border-2 border-testBlue w-full flex items-center justify-center mb-4 text-gray-600 font-bold rounded-xl p-2 hover:scale-105 duration-300"
                    onClick={() => handleImageClick('/IMAGEN.png')}>
                      <div className="items-center text-xs uppercase inline-flex">
                      <PiCertificateLight className="text-lg" />
                      <h1 className="ml-1 ">Nuestra Certificación</h1>
                      </div>
                  </button>
                  {showModal && (
                    <Modal open={showModal} onClose={() => setShowModal(false)}>
                      <Image src={imageUrl} width={400} height={420} alt="certificate_promas" priority={true}/>
                    </Modal>
                  )}
                  </div>
                </div>
              </div>
              <div className="z-0">
                <button
                  onClick={toggleAccordion1}
                  className="p-1 px-4 border flex items-center justify-between mb-4 text-gray-100 bg-testBlue font-bold rounded-xl w-full hover:scale-105 duration-300"
                  style={{ zIndex: 0 }}>
                  <h1 className="hover:scale-110 duration-300 uppercase text-">Lista de Módulos</h1>
                  <div>
                  {isAccordionOpen1 ? (
                      <BiChevronUp className="z-0 text-5xl hover:scale-150 duration-300"/>
                  ) : (
                      <BiChevronDown className="z-0 text-5xl hover:scale-150 duration-300" />
                  )}
                  </div>
                </button>
              </div>
            {isAccordionOpen1 && (
              <motion.div
                className="bg-transparent rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.1} }}>
                <div className="text-sm font-sans font-semibold">
                  <ul className="">
                  {modulesFoodQuality.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 1, delay: index * 0.2 } }}
                      className="lg:p-2 p-2 mb-3 border rounded-md bg-slate-50 text-black hover:bg-testCian hover:text-gray-100 border-testCian hover:scale-110 duration-300 cursor-pointer"
                      style={{ display: 'block', width: '100%' }}
                      onClick={() => window.open(`https://wa.me/51984040264/?text=${encodeURIComponent(item.text)}`, '_blank')}>
                      <div className="flex items-center">
                        <FaWhatsapp className="mr-2 text-green-600 text-lg flex-shrink-0"/>
                        {item.name}
                      </div>
                    </motion.li>
                  ))}
                </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
    </div>
  )
}

export default GraduateAmbientaly;
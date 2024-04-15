"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { modulesSsoma } from "@/components/utils/courses/course";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaRegFilePdf, FaWhatsapp } from "react-icons/fa6";
import Modal  from "@/components/share/Modal";
import Image from "next/image";

const GraduateSsoma = () => {
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
    const newWindow = window.open('/BROCHURE/SSOMA.pdf');
    setOpenWindow(newWindow);

    // Descargar el archivo PDF
    const link = document.createElement('a');
    link.href = '/BROCHURE/SSOMA.pdf';
    link.download = 'SSOMA.pdf';
    link.click();
  };

  return (
    <div id="ambientaly" className="">
       <div className="md:px-20 flex flex-col sm:flex-row justify-center">
          <div className="sm:w-96 mb-4 sm:mb-0">
            <Image
              className="bg-cover h-96 w-96 rounded-3xl"
              src="/graduate/seguridad_SSOMA.webp"
              alt="icon"
              width={800}
              height={800}
              priority={true}
            />
          </div>
          <div className="sm:w-1/2 md:px-20 sm:px-5 lg:mt-4">
            <div className="text-pink-600 font-extrabold font-poppins lg:text-3xl text-2xl mb-4">
              SEGURIDAD, SALUD OCUPACIONAL Y MEDIO AMBIENTE
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 italic">
                El diplomado especializado está dirigido a ingenieros y supervisores de 
                seguridad, prevencionistas, capataces y jefes, miembros del comité de 
                seguridad, profesionales en general, estudiantes universitarios, bachilleres, 
                técnicos y a todos aquellos interesados en el manejo competente de los 
                asuntos de seguridad y salud ocupacional.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 text-pink-500 text-sm mb-4">
              <div className="flex items-center mb-2">
              <Image
                src="/INICIO.png"
                alt="icono_promas"
                width={20}
                height={20}
                priority={true}/>
                <p className="font-bold ml-1">Inicio 06 de Abril</p>
              </div>

              <div className="flex items-center mb-2">
              <Image
                src="/MODALIDAD.png"
                alt="icono_promas"
                width={20}
                height={20}
                priority={true}/>
                <p className="font-bold ml-1">Modalidad Online via Zoom</p>
              </div>

              <div className="flex items-center mb-2">
              <Image
                src="/DURACION.png"
                alt="icono_promas"
                width={20}
                height={20}
                priority={true}/>
                <p className="font-bold ml-1">4 meses</p>
              </div>

              <div className="flex items-center mb-2">
              <Image
                src="/DURACION.png"
                alt="icono_promas"
                width={20}
                height={20}
                priority={true}/>
                <p className="font-bold ml-1">420 horas académicas (<span className="credits">26 créditos</span>)</p>
              </div>
            </div>
            <div className="">
              <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-2">
                <div className="w-full">
                  <Link
                    className="border-2 border-violet-600 flex items-center justify-center text-gray-600 font-bold rounded-xl p-2 hover:scale-105 duration-300"
                    href='https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20diplomado%20de%20Seguridad,%20Salud%20Ocupacional%20y%20Medio%20Ambiente'
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
                    className="border-2 border-violet-600 w-full flex items-center justify-center mb- text-gray-600 font-bold rounded-xl p-2 hover:scale-105 duration-300"
                    rel="noopener noreferrer">
                      <div className="items-center text-xs uppercase inline-flex">
                        <FaRegFilePdf className="text-red-500 text-lg"/>
                        <h1 className="ml-1">Plan de estudios</h1>
                      </div>
                  </button>
                </div>
                <div>
                  <button
                    className="border-2 border-violet-600 w-full flex items-center justify-center mb-4 text-gray-600 font-bold rounded-xl p-2 hover:scale-105 duration-300"
                    onClick={() => handleImageClick('/IMAGEN.png')}>
                      <div className="items-center text-xs uppercase inline-flex">
                      <Image
                        src="/CERTIFICADO.png"
                        alt="icono_promas"
                        width={800}
                        height={800}
                        className="h-4 w-4"
                        priority={true}/>
                        <h1 className="ml-1">Certificación</h1>
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
                  className="p-1 px-4 border flex items-center justify-between mb-4 text-gray-100 bg-violet-700 font-bold rounded-xl w-full hover:scale-105 duration-300"
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
                className="bg-white rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.1} }}>
                <div className="text-sm font-sans font-semibold">
                  <ul className="">
                  {modulesSsoma.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 1, delay: index * 0.2 } }}
                      className="lg:p-2 p-2 mb-3 border rounded-md bg-slate-50 hover:bg-violet-600 hover:text-gray-100 border-violet-500 hover:scale-110 duration-300 cursor-pointer"
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

export default GraduateSsoma;

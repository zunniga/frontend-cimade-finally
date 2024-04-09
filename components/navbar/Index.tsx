"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaUserCog } from "react-icons/fa";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/components/utils/motion";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className=''>
     <nav className="w-full top-0 left-0 right-0  z-50 absolute">

      <div className='max-w-screen-xl flex flex-wrap  items-center justify-center mx-auto p-0.5 backdrop-blur-md'>
        <div className='md:text-right text-center font-semibold w-full border-b border-[#00dbb8] py-1'>
          <Link href='/certificate' className='hover:underline mr-4 text-white hover:text-white'>Verificar certificado</Link>
          <Link href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3"
            className='hover:underline mr-3 text-white hover:text-white'>Aula Virtual</Link>
        </div>
      </div>

        <div className="justify-between px-2 lg:px-0 mx-auto lg:max-w-7xl md:items-center md:flex bg-trans ">
          <div>
            <div className="items-center inline-flex justify-between py-3 md:py- lg:py- md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/img/logo/logobinex.png"
                  width={800}
                  height={800}
                  alt="binex_logo"
                  className='w-36 h-10'
                  priority={true}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden ml-44 ">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/icons/close.png" width={30} height={30} alt="logo"  className="text-white" priority={true}/>
                  ) : (
                    <Image
                      src="/icons/menu.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                      priority={true}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>



  {/* Contenido para dispositivos de escritorio */}
  <div className={`hidden md:block ${navbar ? 'block' : 'hidden'}`}>
    <div className="flex-1 justify-self-center rounded-lg pb-3 mt-2">
      <ul className="h-screen md:h-12 lg:text-sm md:text-sm text-xl items-center justify-center md:flex  ">
      <li className=" font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-secondaryCian rounded transition-transform transform hover:scale-125">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className=" font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-secondaryCian rounded transition-transform transform hover:scale-125">
                  <Link href="/certificate" onClick={() => setNavbar(!navbar)}>
                    Certificado
                  </Link>
                </li>
                <li className=" font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-secondaryCian rounded transition-transform transform hover:scale-125">
                  <Link href="/graduate" onClick={() => setNavbar(!navbar)}>
                    Diplomados
                  </Link>
                </li>
                <li className="font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-secondaryCian rounded transition-transform transform hover:scale-125">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>
                <li className="font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-4 py-1 px-6 text-center md:border-b-0 hover:bg-secondaryCian rounded transition-transform transform hover:scale-125">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    ¡Inscribete!
                  </Link>
                </li>
                <li className="lg:pl-40 flex  justify-center items-center hover:text-primaryBlue md:mt-0 mt-20">
                  <Link href="/login" className="bg-secondaryCian py-1 px-4 rounded-xl text-white hover:bg-gray-100 hover:text-primaryBlue hover:scale-125 duration-300">
                    <FaUserCog className='md:text-xl text-4xl'/>
                  </Link>
                </li>
       
      </ul>
    </div>
  </div>
</div>


              
  <div>
  {/* Contenido para dispositivos móviles */}
  <div className={`md:hidden ${navbar ? 'block' : 'hidden'}`} style={{ backgroundColor: '#000000 ' }}>
    <div className="flex-1 justify-self-center rounded-lg pb-3 mt-2 ">
      <ul className="h-screen md:h-12 lg:text-sm md:text-sm text-xl items-center justify-center md:flex  ">
      <ul className=''>
      <li className=" font-bold text-gray-100  hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-secondaryCian rounded transition-transform transform hover:scale-125">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className=" font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-secondaryCian rounded transition-transform transform hover:scale-125">
                  <Link href="/certificate" onClick={() => setNavbar(!navbar)}>
                    Certificado
                  </Link>
                </li>
                <li className=" font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-secondaryCian rounded transition-transform transform hover:scale-125">
                  <Link href="/graduate" onClick={() => setNavbar(!navbar)}>
                    Diplomados
                  </Link>
                </li>
                <li className="font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-secondaryCian rounded transition-transform transform hover:scale-125">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>
                <li className="font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-4 py-1 px-6 text-center md:border-b-0 hover:bg-secondaryCian rounded transition-transform transform hover:scale-125">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    ¡Inscribete!
                  </Link>
                </li>
                <li className="lg:pl-40 flex  justify-center items-center hover:text-primaryBlue md:mt-0 mt-20">
                  <Link href="/login" className="bg-secondaryCian py-1 px-4 rounded-xl text-white hover:bg-gray-100 hover:text-primaryBlue hover:scale-125 duration-300">
                    <FaUserCog className='md:text-xl text-4xl'/>
                  </Link>
                </li>
      </ul>
      </ul>
    </div>
  </div>
















        </div>
      </nav>
    </div>
  );
}

export default Navbar;
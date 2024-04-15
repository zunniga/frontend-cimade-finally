import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { VscBook } from "react-icons/vsc";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
 
    <footer
      className="bg-clip  bg-gradient-to-b from-testCian/40 via-intersting/70 to-intersting  text-center text-gray-100 lg:text-left ">
      <div className="border-b-2 border-white p-1 l  pt-5 pb-5">
        <div className="container mx-auto px-10">
          <div className="flex items-center justify-center lg:justify-between">
            <div className="mr-12 hidden lg:block">
              <span>Siguenos en nuestras redes sociales:</span>
            </div>
            <div className="flex justify-center">
              <Link href="https://web.facebook.com/BinexEdu" target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2">
                <FaFacebookF className='text-2xl' />
              </Link>
              <Link href="https://www.instagram.com/binex.ec/" target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2">
                <FaInstagram className='text-2xl' />
              </Link>
              <Link href="https://www.tiktok.com/@binex.ec" target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2">
                <FaTiktok className='text-2xl' />
              </Link>
              <Link href="https://wa.me/51921814045?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados" target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2">
                <FaWhatsapp className='text-2xl' />
              </Link>
              <Link href="#!" target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2">
                <FaYoutube className='text-2xl' />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6
                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                 <Image
                 src="/img/logo/logobinex.png"
                 alt="logo_binex"
                 width={800}
                 height={800}
                 priority={true}/>

              </h6>
              <p>
                Proporcionamos cursos y diplomados con aval de la EPG-UNP
              </p>
              <Link href="/book" className='inline-flex items-center mt-4 text-xl text-gray-100 font-semibold hover:underline'>
                <VscBook className='mr-2 text-2xl'/>
                <p>Libro de Reclamaciones</p>
              </Link>
            </div>
            <div className="">
              <h6
                className=" font-extrabold mb-4 flex justify-center uppercase md:justify-start">
                Nuestra empresa:
              </h6>
              <h1 className="mb-4">
                <Link href="/" className="font-semibold text-gray-100 hover:underline"
                  >Inicio</Link>
              </h1>
              <p className="mb-4">
                <Link href="/certificate" className="font-semibold text-gray-100 hover:underline"
                  >Certificado </Link>
              </p>
              <p className="mb-4">
                <Link href="/graduate" className="font-semibold text-gray-100 hover:underline">
                  Diplomados</Link>
              </p>
              <p className='mb-4'>
                <Link href="/about" className="font-semibold text-gray-100 hover:underline"
                  >Nosotros</Link>
              </p>
              <p>
                <Link href="/" className="font-semibold text-gray-100 hover:underline"
                  >¡Inscribete!</Link>
              </p>
            </div>
            <div className="">
              <h6
                className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                Nuestros diplomados en:
              </h6>
              <p className="mb-4">
                <Link href="/graduate" className="font-semibold text-gray-100 hover:underline"
                  >Ingenieria Vial</Link>
              </p>
              <p className="mb-4">
                <Link href="/graduate" className="font-semibold text-gray-100 hover:underline"
                  >Ingenieria Agronoma</Link>
              </p>
              <p className="mb-4">
                <Link href="/graduate" className="font-semibold text-gray-100 hover:underline"
                  >Ingenieria Civil</Link>
              </p>
              <p className='mb-4'>
                <Link href="/graduate" className="font-semibold text-gray-100 hover:underline"
                  >Ingenieria Ambiental</Link>
              </p>
              <p>
                <Link href="graduate" className="font-semibold text-gray-100 hover:underline"
                  >Ingenieria de industrias Alimentarias</Link>
              </p>
            </div>
            <div>
              <h6
                className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                Contácto
              </h6>
              
              <p className="mb-4 flex items-center justify-center md:justify-start cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                  href='mailto:capacitaciones@binex.edu.pe'
                  >
                  <path
                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                capacitaciones@binex.edu.pe
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                  href='https://wa.me/51921814045?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados'
                  >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd" />
                </svg>
                +51 984 040 264
              </p>
              
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 text-center">
        <span>© 2024 Copyright:</span>
        <Link
          className="font-semibold text-neutral-300"
          href="/"
          > Binex Educación Continua</Link>
      </div>

    </footer>

  )
}

export default Footer
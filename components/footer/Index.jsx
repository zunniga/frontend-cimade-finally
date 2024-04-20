import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscBook } from "react-icons/vsc";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="border-b-2 border-white p-1 l  pt-5 pb-5">
        <div className="container mx-auto px-10">
          <div className="flex items-center justify-center lg:justify-between">
            <div className="mr-12 hidden lg:block">
              <span>Siguenos en nuestras redes sociales:</span>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://web.facebook.com/BinexEdu"
                target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2"
              >
                <FaFacebookF className="text-2xl" />
              </Link>
              <Link
                href="https://www.instagram.com/binex.ec/"
                target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2"
              >
                <FaInstagram className="text-2xl" />
              </Link>
              <Link
                href="https://www.tiktok.com/@binex.ec"
                target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2"
              >
                <FaTiktok className="text-2xl" />
              </Link>
              <Link
                href="https://wa.me/51921814045?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados"
                target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2"
              >
                <FaWhatsapp className="text-2xl" />
              </Link>
              <Link
                href="#!"
                target="_blank"
                className="mr-5 text-gray-100 hover:scale-150 ease-in duration-300 border border-white rounded-full p-2"
              >
                <FaYoutube className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <Image
                  src="/img/logo/logobinex.png"
                  alt="logo_binex"
                  width={800}
                  height={800}
                  priority={true}
                />
              </h6>
              <p>Proporcionamos cursos y diplomados con aval de la EPG-UNP</p>
              <Link
                href="/book"
                className="inline-flex items-center mt-4 text-xl text-gray-100 font-semibold hover:underline"
              >
                <VscBook className="mr-2 text-2xl" />
                <p>Libro de Reclamaciones</p>
              </Link>
            </div>
            <div className="">
              <h6 className=" font-extrabold mb-4 flex justify-center uppercase md:justify-start">
                Nuestra empresa:
              </h6>
              <h1 className="mb-4">
                <Link
                  href="/"
                  className="font-semibold text-gray-100 hover:underline"
                >
                  Inicio
                </Link>
              </h1>
              <p className="mb-4">
                <Link
                  href="/certs"
                  className="font-semibold text-gray-100 hover:underline"
                >
                  Certificado{" "}
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  href="/graduate"
                  className="font-semibold text-gray-100 hover:underline"
                >
                  Diplomados
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  href="/about"
                  className="font-semibold text-gray-100 hover:underline"
                >
                  Nosotros
                </Link>
              </p>
              <p>
                <Link
                  href="/"
                  className="font-semibold text-gray-100 hover:underline"
                >
                  ¡Inscribete!
                </Link>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                Nuestros diplomados en:
              </h6>
              <p className="mb-4">
                <Link
                  href="/graduate"
                  className="font-semibold text-gray-100 hover:underline"
                >
                  Ingenieria Vial
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  href="/graduate"
                  className="font-semibold text-gray-100 hover:underline"
                >
                  Ingenieria Agronoma
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  href="/graduate"
                  className="font-semibold text-gray-100 hover:underline"
                >
                  Ingenieria Civil
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  href="/graduate"
                  className="font-semibold text-gray-100 hover:underline"
                >
                  Ingenieria Ambiental
                </Link>
              </p>
              <p>
                <Link
                  href="graduate"
                  className="font-semibold text-gray-100 hover:underline"
                >
                  Ingenieria de industrias Alimentarias
                </Link>
              </p>
            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                Contácto
              </h6>

              <a
                href="mailto:capacitaciones@binex.edu.pe"
                className="flex mb-3 text-lg font-medium transition md:mb-2"
              >
                <Image
                  src="/img/footer/footer_correo.svg"
                  alt="Correo Icono"
                  className="w-6 h-6 mr-2"
                  width={20}
                  height={20}
                />
                <button className="hover:text-primarygreen hover:scale-100 duration-300 text">
                  capacitaciones@binex.edu.pe
                </button>
              </a>

              <a
                href="https://wa.me/51921814045?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados"
                target="_blank"
                className="flex mb-3 text-lg font-medium transition md:mb-2"
              >
                <Image
                  src="/img/footer/footer_whatsapp.svg"
                  alt="Phone Icon"
                  className="w-6 h-6 mr-2"
                  width={20}
                  height={20}
                />
                <button className=" text hover:text-primarygreen hover:scale-100 duration-300">
                  +51 984 040 264
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 text-center">
        <span>© 2024 Copyright:</span>
        <Link className="font-semibold text-neutral-300" href="/">
          {" "}
          Binex Educación Continua
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

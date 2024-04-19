import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "./Styles.css";

const Whatsapp = () => {
  return (
  <section>
    <div className='container-redes z-50'>
    
    <div className='flex items-end'>
      {/* <p className='text-white text-xs font-semibold p-2 bg-customPink rounded-xl lg:mb-5 mb-2 order-first'>
        Hola, como podemos ayudarte...
      </p> */}
    <Link href="https://wa.me/51921814045?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados" className='' target='_blank'>
      <Image
        src="/img/logo/whatsapp.png"
        alt="whatsAap"
        width={60}
        height={60}
        className='boton-w '/>
    </Link>
    </div>
    </div>
  </section>
  )
}

export default Whatsapp;
import React from 'react'
import GraduateAmbientaly from '@/components/graduate/IngAmbientaly/GraduateAmbientaly';
import GraduateIrrigation from '@/components/graduate/IngAgronomy/GraduateIrrigation';
import GraduateSolidWaste from '@/components/graduate/IngAmbientaly/GraduateSolidWaste';
import GraduateTechnicalIrrigation from '@/components/graduate/IngAgronomy/GraduateTechnicalIrrigation';
import GraduateTechnicalAssistant from '@/components/graduate/IngCivil/GraduateTechnicalAssistant';
import GraduateIngVial from '@/components/graduate/IngCivil/GraduateIngVial';
import GraduateIngBridge from '@/components/graduate/IngCivil/GraduateIngBridge';
import GraduateWorksSupervision from '@/components/graduate/IngCivil/GraduateWorksSupervision';
import GraduateFoodQuality from '@/components/graduate/IngAlimentary/GraduateFoodQuality';
import GraduateSsoma from '@/components/graduate/ssoma/GraduateSsoma';
import Whatsapp from '@/components/whatsapp/Index';
import GraduateQualityMonitoringAmbientaly from '@/components/graduate/IngAmbientaly/GraduateQualityMonitoringAmbientaly';
import GraduateManagementAmbientaly from '@/components/graduate/IngAmbientaly/GraduateManagementAmbientaly';

const Graduate = () => {
  return (
    <section id="/graduate">
      <div className="relative pt-20 lg:pt-40 pb-20 lg:pb-40">
      <div className="absolute top-0 w-full h-full z-0">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="/img/video/blue.webm" type="video/webm" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-testCian opacity-60"></div>
      {/* <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-gray-800"></span> */}
    </div>
    <div className="relative mx-auto max-w-screen-xl p-2 text-white">
      <h1 className="font-extrabold text-4xl lg:text-6xl mt-10">
        Nuestros diplomados
      </h1>
      <p className='font-semibold text-lg mt-2'>
        ¡Te ofrecemos un servicio de calidad para segurar el exito de tu profesión!
      </p>
      <button className='border px-4 py-1 mt-4 rounded-xl font-semibold'>
        Contacto
      </button>
    </div>
  </div>
      <div className=" p-5 flex flex-col bg-slate-300">
        <div className="text-white text-center text-3xl lg:text-4xl xl:text-5xl mb-10 lg:mt-10 font-extrabold border-b-4 p-2 "style={{backgroundImage: 'linear-gradient(to right, #0079bb, #00dbb8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
            DIPLOMADOS EN INGENIERÍA VIAL
        </div>
          <div className='mb-20 lg:mb-10'>
            <GraduateAmbientaly />                                                   
          </div>
          <div className='mb-20 lg:mb-10'>
          <GraduateAmbientaly />  
          </div>
          <div className='mb-20 lg:mb-10'>
          <GraduateAmbientaly />  
          </div>
          <div className='mb-20 lg:mb-10'>
          <GraduateAmbientaly />  
          </div>
        <div className="text-white text-center text-3xl lg:text-4xl xl:text-4xl mb-6 lg:mt-6 font-extrabold border-b-4 p-2">
            DIPLOMADOS EN INGENIERÍA AGRÓNOMA
        </div>
          <div className='mb-20 lg:mb-10'>
          <GraduateAmbientaly />  
          </div>
          <div className='mb-20 lg:mb-10'>
          <GraduateAmbientaly />  
          </div>
        <div className="text-whitetext-center text-3xl lg:text-4xl xl:text-4xl mb-6 lg:mt-6 font-extrabold border-b-4 p-2">
          DIPLOMADOS EN INGENIERÍA CIVIL
        </div>
          <div className='mb-20 lg:mb-10'>
          <GraduateAmbientaly />
          </div>
          <div className='mb-20 lg:mb-10'>
          <GraduateAmbientaly />
          </div>
          <div className='mb-20 lg:mb-10'>
          <GraduateAmbientaly />
          </div>
          <div className='mb-20 lg:mb-10'>
          <GraduateAmbientaly />
          </div>
        <div className="text-white text-center text-3xl lg:text-4xl xl:text-4xl mb-6 lg:mt-6 font-extrabold border-b-4 p-2">
          DIPLOMADOS EN INGENIERÍA ALIMENTARIA
        </div>
          <div className='mb-20 lg:mb-10'>
          <GraduateAmbientaly />
          </div>
          <div className='mb-20 lg:mb-10 border-t-4 p-2'>
          <GraduateAmbientaly />
          </div>
      </div>
      <Whatsapp />
    </section>
  )
}

export default Graduate;
"use client";
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FaUserPlus } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";




const ContactForm = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [sending, setSending] = useState(false);

  const [reclamoChecked, setReclamoChecked] = useState(false);
  const [sugerenciaChecked, setSugerenciaChecked] = useState(false);

  const handleReclamoChange = () => {
    setReclamoChecked(!reclamoChecked);
    setSugerenciaChecked(false);
  };

  const handleSugerenciaChange = () => {
    setSugerenciaChecked(!sugerenciaChecked);
    setReclamoChecked(false);
  };

  const refForm = useRef<HTMLFormElement>(null);
  const onSubmit: SubmitHandler<any> = async (data, event) => {
    event?.preventDefault();
    console.log(data);
    setSending(true);
    const serviceID = "service_asg830i";
    const templateID = "template_0vlojo8";
    const apiKey = "94V0-xGo98a5l9bEK";
    if (refForm.current) {
      try {
        await emailjs.sendForm(serviceID, templateID, refForm.current, apiKey);
        alert('¡Mensaje Enviado!');
      } catch (err) {
        alert(JSON.stringify(err));
      } finally {
        setSending(false);
      }
    }
  }

  const validateCheckbox = () => {
    if (!reclamoChecked && !sugerenciaChecked) {
      return "Selecciona al menos una opción";
    }
    return true;
  };
  return (
    <section className='mt-20 mb-20'>
    <div className='max-w-screen-lg mx-auto bg-gradient-to-r from-testCian/50 to-testBlue/50 rounded-xl p-8'>
     
    <div className='p-8 '>
      <h1 className=' uppercase font-light text-white lg:text-6xl md:text-5xl text-4xl mt-1 mb-2 text-center'>CONTÁCTANOS</h1>
     
      <h2 className='bg-primarygreen p-1 text-lg font-semibold text-gray-50 rounded-xl'></h2>
    </div>
    
   



  <form ref={refForm} onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2'>
    
      <div className='text-slate-300 md:mt-4'>
        <label
          className=' font-light absolute text-xl duration-500 scale-75 origin-[0] mb-1'>
              Nombres y Apellidos:
        </label>
        <div className='relative'>
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          <FaUserPlus  />
          </div>
        <input
          type="text" {...register('firstName', { required: true })}
          id='nombres'
          name='firstName'
          //autoFocus
          className="bg-testCian/5 border-2 mt-6 border-gray-300 text-slate-100 font-extralight text-xl rounded-lg block w-full ps-8 p-2.5 shadow-lg hover:shadow-secondaryCian" placeholder=""/>
        </div>
        </div>

        <div className='text-slate-300 md:mt-4'>
        <label
          className='font-light absolute text-xl duration-500 scale-75 origin-[0]'>
            Correo Electrónico:
        </label>
        <div className='relative'>
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          <FaUserPlus />
          </div>
        <input
          type="text" {...register('gmail', { required: true })}
          id='correo'
          name='gmail'
          //autoFocus
          className="bg-testCian/5 border-2 mt-6 border-gray-300 font-extralight text-slate-100 text-xl rounded-lg block w-full ps-8 p-2.5 shadow-lg hover:shadow-secondaryCian" placeholder=""/>
      </div>
      </div>

      <div className='text-slate-300'>
        <label
          className='font-light absolute text-xl duration-500 scale-75 origin-[0]'>
            Celular:
        </label>
        <div className='relative'>
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
        <BsFillTelephoneFill />
          </div>
        <input
          type="text" {...register('phoneNumber', { required: true })}
          id='number'
          name='phoneNumber'
          //autoFocus
          className="bg-testCian/5 border-2 mt-6 border-gray-300  text-slate-100 text-xl rounded-lg block w-full ps-8 p-2.5 shadow-lg hover:shadow-secondaryCian" placeholder=""/>
      </div>
        {errors.nombres && <p>El campo nombre es obligatorio</p>}
        {errors.nombres && <p>El campo nombre debe contener menos de 20 caracteres</p>}
      </div>

      <div className='text-slate-300'>
        <label
          className='font-light absolute text-xl duration-500 scale-75 origin-[0]'>
            Mensaje:
        </label>
        <div className='relative'>
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
         
          </div>
          <textarea
  {...register('message', { required: true })}
  id='message'
  name='message'
  rows={2} // Esto permite dos líneas
  // autoFocus
  className="bg-testCian/5 border-2 mt-6 border-gray-300 text-slate-100 font-extralight text-lg rounded-lg block w-full px-3 py-2.5 shadow-lg hover:shadow-secondaryCian"
  placeholder=""
/>

      </div>
      </div>

      <input type="submit" value={sending ? 'Enviando...' : 'Enviar'} className=' border-2 p-2 mb-6 rounded-xl bg-primaryblue text-gray-200 text-xl font-bold cursor-pointer shadow-lg hover:shadow-secondaryCian'/>
    </form>
    </div>
   
    <div className='mt-8' style={{ display: 'flex', justifyContent: 'center' }}> {/* Contenedor que centra horizontalmente el botón */}
  <button
    className='' // Estilos para el botón
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Manejador de clic para desplazar hacia arriba
    style={{ display: 'flex', alignItems: 'center' }} // Estilos para el botón y centrar el contenido verticalmente
  >
     {/* Ajusta la ruta y el tamaño de la imagen según tus necesidades */}
  </button>
  
</div>
<div>

                    
</div>


  </section>
  
  );
}

export default ContactForm;

"use client"
import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useRef, useState, useCallback } from 'react';




import reload_img from "@/public/img/banners/planeta.png";


  const counter_content = [
   {
      id: 1, 
      count: 10,
      info: "Experience",
      cls: "",
      cls_2: "purecounter",
      icon: "+",
   },
   {
      id: 2, 
      count: 255,
      info: "square area",
      cls: "purecounter",
      cls_2: "",
      icon: "",
   },
   {
      id: 3, 
      count: 310,
      info: "square area",
      cls: "purecounter",
      cls_2: "",
      icon: "",
   },
  ]
const ServiceArea = () => {

   const setting = {
      type   : 'loop',
      drag   : 'free',
      pagination: false,
      arrows: false,
      perPage: 5,
      gap:'30px',
      breakpoints: {
         1800: {
            perPage: 5,
         },
         1500: {
            perPage: 4,
         },
         1200: {
            perPage: 3,
         },
         800: {
            perPage: 2,
         },
         566: {
            perPage: 1,
         },
        },
     }
   const splideRef = useRef(null); 

   const [reloadClassName, setReloadClassName] = useState(null);
   useEffect(() => {
      const reload = document.getElementById('reload');
      setReloadClassName(reload);
   }, []);

   const scrollRotate = () => {
      reloadClassName.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
   };

  

   
    return (   
        <>
            <div className="tp-service-funfact-box "> 

               <section className="tp-service-area pt-85 pb-50">
                  <div className="container-fluid">
                     

                     

                  </div>
               </section> 

               <section className="tp-fun-fact-area pt-80 pb-65 p-relative">
                  <div className="container container-1400">

                     

                     <div className="row">
                        <div className="col-lg-2 col-md-4">
                           
                        </div>
                        <div className="col-lg-4 col-md-8">
                           <div className="tp-fun-fact-thumb p-relative">
                              <Image id="reload" src={reload_img} alt="scroll" />
                           </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                           <div className="tp-fun-fact-content">
                              <div className="tp-fun-fact-title-wrapper">
                                 <span className="tp-section-title__pre">
                                    service <span className="title-pre-color">IT Solutions</span> 
                                  
                                 </span>
                                 <h3 className="tp-section-title">UN MUNDO COMPLICADO Y DESAFIANTE
                                    <span className="title-left-shape"> 
                                 
                                    </span>
                                 </h3>
                                 <p>
                                    Our company provides a full range of services for the construction of <br /> private houses and cottages since 19
                                 </p>
                                 <ul>
                                    <li>
                                     
                                       series of manual and semi-manual activities.
                                    </li>
                                    <li>
                                    
                                       onstruction is different from other industries.
                                    </li>
                                 </ul>
                                 <div className="tp-fun-fact-btn">
                                    <Link className="tp-btn" href="/service-details">Tell us How Can We Help</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </section>  
               
            </div>
        </>
    );
};

export default ServiceArea;
"use client"
import Link from 'next/link';
import Image from 'next/image'
import Count from '@/components/common/count';
import React, { useEffect, useRef, useState } from 'react';
import service_data from '@/components/data/service-data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./Presentation.css";
// svg icon
import AngleArrow from '@/svg/angle-arrow';
import LineArrowTwo from '@/svg/line-arrow-2';
import GreenRightArrow from '@/svg/green-right-arrow';

// fun fact shape
import fun_fact_shape_1 from "@/public/world/shape-1.png";
import fun_fact_shape_2 from "@/public/world/shape-2.png";
import fun_fact_shape_3 from "@/public/world/shape-3.png";
import fun_fact_shape_4 from "@/public/world/shape-4.png";


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

   useEffect(() => {
      if (reloadClassName !== null) {
         window.addEventListener('scroll', scrollRotate);
      }
      return () => {
         window.removeEventListener('scroll', scrollRotate);
      };
   }, );


    return (   
        <>
            <div className="tp-service-funfact-box flex flex-col md:flex-row justify-center items-center   bg-gradient-to-b from-blue-950 via-secondaryCian/40 to-blue-950 pb-32 "> {/* Aplicamos flexbox para disposición horizontal y centrado vertical y horizontal */}
   <section className="tp-fun-fact-area pt-60 pb-65 p-relative " >
      <div className="container container-1400">

         <div className="tp-fun-fact-shape">
            <Image className="shape-1" src={fun_fact_shape_1} alt="theme-pure" />
            <Image className="shape-2" src={fun_fact_shape_2} alt="theme-pure" />
            <Image className="shape-3" src={fun_fact_shape_3} alt="theme-pure" />
            <Image className="shape-4" src={fun_fact_shape_4} alt="theme-pure" />
         </div>

         <div className="md:flex justify-center"> {/* Aplicamos flexbox y centrado horizontal para elementos internos */}
            <div className="md:w-1/3">
               <div className="tp-fun-fact-wrapper-box">
                  {counter_content.map((item, i) => 
                     <div key={i} className="tp-fun-fact-wrapper">
                        <h3 className={`counter-title ${item.cls}`}> 
                           <span data-purecounter-duration="4" className="purecounter">
                              <Count number={item.count} text={item.icon} />
                           </span>
                        </h3>
                        <p>{item.info}</p>
                     </div>                              
                  )} 
               </div>
            </div>

            <div className="md:w-1/3">
               <div className="tp-fun-fact-thumb p-relative animate-[wiggle_1s_ease-in-out_infinite] ">
                  <Image id="reload" src={reload_img} alt="scroll" />
               </div>
            </div>

            <div className="md:w-1/3">
               <div className="tp-fun-fact-content">
                  <div className="tp-fun-fact-title-wrapper">
                     <span className="tp-section-title__pre">
                        service <span className="title-pre-color">IT Solutions</span> 
                        <AngleArrow />
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
                           <span> <GreenRightArrow /></span>
                           series of manual and semi-manual activities.
                        </li>
                        <li>
                           <span><GreenRightArrow /> </span>
                           construction is different from other industries.
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
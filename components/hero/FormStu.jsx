"use client"
import Image from 'next/image';
import AngleArrow from "@/svg/angle-arrow";
import LineArrow from "@/svg/line-arrow";
import Link from "next/link";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from "react";
import "./Style.css";
import "./Slide.css";

import shape_1 from "@/public/img/heroo/shape-1.png";
import shape_2 from "@/public/img/heroo/shape-2.png";
import shape_3 from "@/public/img/heroo/shape-3.png";
import shape_4 from "@/public/img/heroo/shape-4.png";
import shape_5 from "@/public/img/heroo/shape-7.png";
import service_shape from "@/public/img/heroo/shape-5.png";
import service_quote from "@/public/img/heroo/quot.png";

// slider setting 
const setting = {
  slidesPerView: 1,
  spaceBetween: 0, 
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".hero-button-next-1",
    prevEl: ".hero-button-prev-1",
  },
};
// slider data 
const slider_data = [
  {
    id: 1,
    bg_img: "@/public/img/heroo/bannerThree.png",
    sub_title_1: "BINEX",
    sub_title_2: "EDUCACIÓN CONTINUA",
    hero_title_1: "platform of",
    hero_title_2: "Avicii",
    hero_support: "support",
  },
  {
    id: 2,
    bg_img: "@/public/img/heroo/bannerOne.png",
    sub_title_1: "BINEX",
    sub_title_2: "EDUCACIÓN CONTINUA",
    hero_title_1: "IT service & ",
    hero_title_2: "Tech",
    hero_support: "Bundles",
  },
  {
    id: 3,
    bg_img: "@/public/img/heroo/bannerThree.png",
    sub_title_1: "BINEX",
    sub_title_2: "EDUCACIÓN CONTINUA",
    hero_title_1: "platform of",
    hero_title_2: "Tech",
    hero_support: "Solution",
  },
];
// shapes 
const shapes = [ 
   {id_cls: 1, img: shape_1},
   {id_cls: 2, img: shape_2},
   {id_cls: 3, img: shape_3},
   {id_cls: 4, img: shape_4},
   {id_cls: 7, img: shape_5},
]

const HeroSlider = () => {
  const [isLoop, setIsLoop] = useState(false)
    useEffect(() => {
     setIsLoop(true)
    }, [])
    

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="tp-hero-area tp-hero-space pb-95">
        <div className="tp-hero-wrapper p-relative"> 
          <div className="hero-active-1 swiper-container">
            <Swiper {...setting} loop={isLoop} modules={[Navigation, EffectFade]}>
              {slider_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="tp-hero-inner-1">
                    <div className="container">
                      <div className="tp-hero-shape">
                        {shapes.map((shape, index)  => 
                              <Image key={index} 
                               className={`shape-${shape.id_cls}`} 
                               src={shape.img} alt="theme-pure" />
                        )}
                       </div>
                      <div className="tp-hero-1">
                        <div className="tp-hero-bg tp-hero-overlay p-relative"
                          style={{ backgroundImage: `url(${item.bg_img})`}}></div>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="tp-hero-content p-relative">
                              
                              <div className="tp-hero-title-wrapper">
                                <span className="tp-section-title__pre p-relative">
                                  {item.sub_title_1}{" "}
                                  <span className="title-pre-color">
                                    {item.sub_title_2}
                                  </span>
                                  <AngleArrow />
                                </span>
                                <h3 className="tp-hero-title">
                                  {item.hero_title_1} <LineArrow />
                                  <span className="title-color">
                                    {item.hero_title_2}
                                  </span>{" "}
                                  <br />{" "}
                                  <span className="title-text-transparent">
                                    {item.hero_support}
                                  </span>
                                </h3>
                                <div className="tp-hero-btn">
                                  <Link className="tp-btn" href="/about">
                                    Mas Información{" "}
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                  </Link>
                                </div>
                              </div>
                              <div className="tp-hero-shape-animation">
                                <span></span>
                              </div>
                            </div>

                          </div>
                          <div className="col-lg-5">
                            <div className="tp-hero-play-btn">
                              <button className="popup-video" onClick={() => setIsVideoOpen(true)}>
                                <i className="fa-sharp fa-solid fa-play"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="tp-hero-nav d-none d-xxl-block">
            <button type="button"
              className="hero-button-prev-1 tp-btn-hover-clear alt-color">
              <i className="fa-regular fa-arrow-left"></i>
              <b></b>
            </button>
            <button
              type="button"
              className="hero-button-next-1 tp-btn-hover-clear alt-color"
            >
              <i className="fa-regular fa-arrow-right"></i>
              <b></b>
            </button>
          </div>

          <div className="tp-hero-bottom">
            <div className="tp-hero-experince">
              <span className="year"> 4
                <br /> <i className="experince">Años de Experiencia</i>
              </span>
            </div>
          </div>

          <div
            className="tp-hero-service"
            style={{ backgroundImage: `url@/public/img/heroo/shape-6.png)` }} 
          >
            <div className="tp-hero-service-shape">
              <Image src={service_shape} alt="theme-pure" />
            </div>
            <p>
            Comprometidos con tu <span>educación</span> , nuestra misión es brindarte los mejores cursos y diplomados para impulsar <br/>
             tu crecimiento profesional y personal.
            </p>
            <div className="tp-hero-service-quote">
              <Image src={service_quote} alt="theme-pure" />
            </div>
          </div>
          
        </div>
      </section>

    
    </>
  );
};

export default HeroSlider;
"use client"
import { motion, Variants, TargetAndTransition } from 'framer-motion';
import React, {  } from 'react';

import styles from '@/styles/index';
import { insights } from '@/components/utils/constants/index';
import { staggerContainer } from '../utils/motion';
import GraduateCard  from './CoursesCard';
import { TitleText, TypingText } from '../share/CustomText'

const variants = staggerContainer("0.1s", "0.1s");

const Graduate: React.FC = () => (
  <section className='bg-intersting'>
  <div className={`${styles.paddings} relative z-10 max-w-screen-xl mx-auto`}>

  
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth}`}>
      <TypingText title="Nuestros Cursos" textStyles="text-center pt-24" />
    </motion.div>

  
   
       <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-14" data-wow-duration="1s" data-wow-delay=".3s">
        {insights.map((item, index: number) => (
          <GraduateCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
  </div>
  </section>
);

export default Graduate;


<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
  whileHover={{ scale: 1.1, backgroundColor: '#1DDAB8' }}
    whileTap={{ scale: 4 }}
  
>

  
</motion.div>

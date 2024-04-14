import { Variants } from 'framer-motion';

export function slideInFromLeft(delay: number) {
    return {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }

  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }

  export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  export const staggerContainer = (staggerChildren: string, delayChildren: string): Variants => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren: parseFloat(staggerChildren),
        delayChildren: parseFloat(delayChildren),
      },
    },
  });

  export const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };

  export const textVariant2 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

  export const fadeIn = (direction: string, type: string, delay: number, duration: number) => ({
    hidden: {
      opacity: 0,
      scale: 0.8, // Opcional: puedes agregar una escala inicial para hacer un efecto de zoom al aparecer
      ...(direction === 'left' && { x: -100 }), // Mueve el componente hacia la izquierda
      ...(direction === 'right' && { x: 100 }), // Mueve el componente hacia la derecha
      ...(direction === 'up' && { y: -100 }), // Mueve el componente hacia arriba
      ...(direction === 'down' && { y: 100 }), // Mueve el componente hacia abajo
    },
    show: {
      opacity: 1,
      scale: 1, // Restaura la escala original
      x: 0, // Reinicia la posición en el eje x
      y: 0, // Reinicia la posición en el eje y
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2, // Duración de la animación de salida
        ease: 'easeInOut', // Función de facilidad de la animación de salida
      },
    },
  });
  

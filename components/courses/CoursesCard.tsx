import { motion } from 'framer-motion';
import { FC } from 'react';
import { fadeIn } from '../utils/motion';
import Image from 'next/image';
import Link from 'next/link';

interface InsightCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
}

const GraduateCard: FC<InsightCardProps> = ({ imgUrl, title, subtitle, index }) => (
//<Link href="/graduate">
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    initial="animate"
    className="flex md:flex-col flex-col gap-4 px-2 py-2 mb-8 mx-auto rounded-2xl bg-primaryBlue hover:cursor-pointer "
    whileHover={{ scale: 1.1, backgroundColor: 'blue' }}
    whileTap={{ scale: 1 }}
  >
    <div className="flex justify-center ">
    <Image
      src={imgUrl}
      alt="planet-01"
      width={800}
      height={200}
      className=" rounded-3xl p-2 object-cover"
      priority={true}
    />
    </div>
    <div className="w-full flex items-center justify-center px-2">
      <div className="flex-1 flex flex-col max-w-[650px]">
        <h1 className='uppercase underline text-white text-xs font-extrabold text-left'>
          Diplomados
        </h1>
        <h2 className="font-extrabold lg:text-[26px] text-[20px] text-white">
          {title}
        </h2>
        <h3 className="mt-[16px] lg:mb-6 font-semibold lg:text-[15px] text-[13px] text-gray-200">
          {subtitle}
        </h3>
        <Link href="/graduate" className='uppercase text-xs font-extrabold text-white border p-2 md:mt-2 mt-6 mb-4 w-32 rounded-lg hover:scale-110 duration-200 hover:bg-customPurple'>
          Ver diplomado
        </Link>
      </div>
    </div>
  </motion.div>
//</Link>
);

export default GraduateCard;
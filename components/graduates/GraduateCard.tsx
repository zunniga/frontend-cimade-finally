import { motion } from 'framer-motion';
import { FC } from 'react';
import { zoomInFrom } from '../utils/motion';
import Image from 'next/image';
import Link from 'next/link';

interface InsightCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
}

const GraduateCard: FC<InsightCardProps> = ({ imgUrl, title, subtitle, index }) => (
  
  <motion.div
  variants={zoomInFrom}
  initial="hidden"
  animate="visible"
  exit = "hidden"
  className="flex md:flex-col flex-col gap-4 px-2 py-2 mb-8 mx-auto rounded-2xl bg-testCian/50 border border-testCian hover:bg-testCian/10   hover:cursor-pointer "

    whileHover={{ scale: 1.1, backgroundColor: '#3DA997' }}
    whileTap={{ scale: 1 }}


  >
    

    

    <div className="flex justify-center ">
    <Image
      src={imgUrl}
      alt="planet-01"
      width={900}
      height={200}
      className=" rounded-3xl p-2 object-cover"
      priority={true}
    />
    </div>
    <div className="w-full flex items-center justify-center px-2">
      <div className="flex-1 flex flex-col max-w-[650px] items-center">
      
        <Link href="/graduate" className='uppercase text-xs font-extrabold flex justify-center bg-transparent text-white border p-2 md:mt-2 mt-6 mb-4 w-36 rounded-lg hover:scale-110 duration-200 hover:bg-testBlue'>
          Ver diplomado
        </Link>
      </div>
    </div>
  
  </motion.div>
  
);

export default GraduateCard;
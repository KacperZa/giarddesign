import Masonry from 'react-masonry-css'

import garden from '../assets/garden.avif'
import garden2 from '../assets/garden2.avif'
import garden3 from '../assets/garden3.avif'
import garden5 from '../assets/garden5.avif'
import garden6 from '../assets/garden6.avif'
import garden7 from '../assets/garden7.avif'
import garden8 from '../assets/garden8.avif'
import garden9 from '../assets/garden9.avif'
import garden10 from '../assets/garden10.avif'
import garden11 from '../assets/garden11.avif'
import garden12 from '../assets/garden12.avif'

import { ArrowDown, ArrowUp } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'motion/react'

import Popup from '../ui/Popup'


const images = [garden, garden2, garden3, garden5, garden6, garden7, garden8, garden9, garden10, garden11, garden12, garden5, garden6, garden9, garden10, garden11, garden12, garden10, garden8,garden5, garden6, garden7,garden11, garden12,garden5, garden2, garden12, garden5,];

const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
};

const Projects = () => {
    const [expanded, setExpanded] = useState(false)
    const [popupVisible, setPopupVisible] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
        <div className='min-h-full h-fit w-full bg-beige flex flex-col md:pt-30 pt-20 md:gap-12 xl:gap-24 gap-6'>
            <div className="grid grid-cols-12 gap-x-16">
                <div className="flex flex-col gap-4 col-span-12 col-start-2">
                    <p className="text-green text-xs leading-[150%] tracking=[-1%] font-inter">Realizacje</p>
                    <p className=" text-4xl md:text-5xl font-montserrat leading-[115%] tracking-[-3%]">Nasze <span className="font-inter italic tracking-normal">projekty</span></p>
                </div>
            </div>
            <div className={` ${expanded ? 'max-h-[10000px]' : 'max-h-svh md:max-h-svh xl:max-h-[170svh]'} transition-[max-height] duration-700 ease-in-out w-full relative  overflow-hidden bg-linear-to-t from-beige to-[#D6B79E]/0`} >
                <Masonry
                breakpointCols={breakpointColumns}
                className='flex w-full '
                columnClassName='px-4 [&>*]:mb-4'
                >
                    {images.map((image, id) => (
                        <img src={image} key={id} className='w-full pointer-events-auto cursor-pointer' 
                        onClick={() => {
                            setPopupVisible(true)
                            setCurrentIndex(id)
                        }}
                        />
                    ))}

                </Masonry>

                {expanded ? 
                    <div className='absolute inset-0  flex items-end justify-center p-11 pointer-events-none'>
                        <motion.button whileTap={{scale: 0.95}} className='rounded-full border border-black pl-5.5 pr-5.5 pt-3 pb-3.5 flex flex-row gap-2 cursor-pointer pointer-events-auto font-inter leading-[150%]' onClick={() =>setExpanded(false)}>Zwiń<ArrowUp /></motion.button>
                    </div>
                :
                <div className='absolute inset-0 bg-linear-to-t from-beige to-[#D6B79E]/0 flex items-end justify-center p-11 pointer-events-none'>
                        <motion.button whileTap={{scale: 0.95}} className='rounded-full border border-black pl-5.5 pr-5.5 pt-3 pb-3.5 flex flex-row gap-2 cursor-pointer pointer-events-auto font-inter leading-[150%]' onClick={() =>setExpanded(true)}>Rozwiń<ArrowDown /></motion.button>
                    </div>
                }
            </div>
        </div>
                {popupVisible && <Popup images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setPopupVisible={setPopupVisible}/>}
    </>
  )
}

export default Projects
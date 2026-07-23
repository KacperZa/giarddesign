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
    const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
        <div className='min-h-full h-fit w-full bg-beige flex flex-col pt-30 gap-24'>
            <div className="grid grid-cols-12 gap-x-16">
                <div className="flex flex-col gap-4 col-span-12 col-start-2">
                    <p className="text-green text-xs leading-[150%]">Realizacje</p>
                    <p className="text-5xl font-montserrat leading-[115%]">Nasze <span className="font-inter italic">projekty</span></p>
                </div>
            </div>
            <div className={` ${expanded ? 'max-h-[10000px]' : 'max-h-[170svh]'} transition-[max-height] duration-700 ease-in-out w-full relative  overflow-hidden bg-linear-to-t from-beige to-[#D6B79E]/0`} >
                <Masonry
                breakpointCols={breakpointColumns}
                className='flex w-full '
                columnClassName='px-4 [&>*]:mb-4'
                >
                    {images.map((image, id) => (
                        <img src={image} key={id} className='w-full pointer-events-auto' 
                        onClick={() => {
                            setPopupVisible(true)
                            setSelectedImage(image)
                            console.log('Kliknąłem')
                        }} />
                    ))}

                </Masonry>

                {expanded ? 
                    <div className='absolute inset-0  flex items-end justify-center p-11 pointer-events-none'>
                        <button className='rounded-full border border-black pl-5.5 pr-5.5 pt-3 pb-3.5 flex flex-row gap-2 cursor-pointer pointer-events-auto' onClick={() =>setExpanded(false)}>Zwiń<ArrowUp /></button>
                    </div>
                :
                <div className='absolute inset-0 bg-linear-to-t from-beige to-[#D6B79E]/0 flex items-end justify-center p-11 pointer-events-none'>
                        <button className='rounded-full border border-black pl-5.5 pr-5.5 pt-3 pb-3.5 flex flex-row gap-2 cursor-pointer pointer-events-auto' onClick={() =>setExpanded(true)}>Rozwiń<ArrowDown /></button>
                    </div>
                }
            </div>
        </div>
                {popupVisible && <Popup src={selectedImage} />}
    </>
  )
}

export default Projects
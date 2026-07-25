import { useState } from 'react'
import garden from '../assets/garden.avif'
import garden2 from '../assets/garden2.avif'
import garden3 from '../assets/garden3.avif'
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from "motion/react"



const images = [garden, garden2, garden3];

const Introduction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

//  Funkcje do slidera 
const prevSlide = () => {
  setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
};

const nextSlide = () => {
  setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
};

  return (
    <>
    <AnimatePresence >
      <div className='overflow-hidden min-h-[90dvh]'>
        <motion.div
        className='flex min-h-[90dvh]'
        initial={{x: 0}}
        animate={{x: `-${currentIndex * 100}%`}}
        transition={{ type: 'spring', stiffness: 300, damping: 50}}
        >
        {images.map((image, id) =>  (
        <motion.section 
          className='max-h-[90dvh] min-w-full grid lg:grid-cols-12 lg:grid-rows-1 grid-rows-2'
          key={id}
          >
            
            {/* LEWA SEKCJA  */}
            <section className="col-span-1 lg:col-span-6 flex flex-col justify-start md:justify-center bg-beige pt-8 md:pt-0 xl:pl-22 px-11">
              {/* Pojemnik na elementy  */}
              <div className="grid grid-cols-6 gap-x-8 lg:gap-x-16">
                <div className="lg:col-span-5 col-span-6 justify-start flex flex-col gap-2 md:gap-8 lg:gap-20">
                  {/* Pojemnik na tekst */}
                  <div className="grid grid-cols-5 xl:gap-4 md:gap-6 lg:gap-11 w-full gap-3 ">
                    <p className="font-montserrat font-medium text-3xl md:text-5xl lg:text-6xl col-span-5 leading-tight md:leading-16 lg:leading-18"> Nowoczesna aranżacja Twojego ogrodu </p>
                    <p className="font-inter col-span-5 lg:col-span-4 text-pretty leading-[150%] md:text-base text-sm">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</p>
                  </div>
                  {/* Pojemnik na przyciski  */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 self-center">
                  <button className="bg-green rounded-full px-4 py-2 md:pl-6 md:pr-6 md:pt-3 md:pb-3.5 text-grey font-inter font-normal cursor-pointer leading-[150%] whitespace-nowrap">Skontaktuj się z nami</button>
                  <button className="border-green px-4 py-2 md:pl-5.5 md:pr-5.5 md:pt-3 md:pb-3.5 border rounded-full text-green font-inter font-normal flex text-sm md:text-base gap-1 items-center cursor-pointer leading-[150%] whitespace-nowrap">Zobacz nasze realizacje <ArrowDown /></button>
                  </div>

                </div>
              </div>

            </section>
            {/* PRAWA SEKCJA  */}
            <section className="col-span-1 lg:col-span-6 relative w-full h-full">
              <div className="w-full h-full">
                <img className="object-cover  w-full h-full" src={image} alt="" />
              </div>
              {/* Pojemnik na przyciski  */}
              <div className="absolute right-0 bottom-0 flex ">
                <button className="md:w-20 md:h-18 w-16 h-14 bg-white flex justify-center items-center cursor-pointer" onClick={prevSlide}><ArrowLeft /></button>
                <button className="md:w-20 md:h-18 w-16 h-14 bg-white flex justify-center items-center cursor-pointer" onClick={nextSlide}><ArrowRight /></button>
              </div>
            </section>
          </motion.section>
          ))} 

        </motion.div>
      </div>

    </AnimatePresence>

    </>
  )
}

export default Introduction
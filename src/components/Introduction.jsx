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
      <div className='overflow-hidden h-9/10'>
        <motion.div
        className='flex h-full'
        initial={{x: 0}}
        animate={{x: `-${currentIndex * 100}%`}}
        transition={{ type: 'spring', stiffness: 300, damping: 50}}
        >
        {images.map(image =>  (
        <motion.section 
          className='min-h-full min-w-full grid grid-cols-12'
          >
            
            {/* LEWA SEKCJA  */}
            <section className="col-span-6 flex flex-col justify-center bg-beige pl-22">
              {/* Pojemnik na elementy  */}
              <div className="grid grid-cols-6 gap-x-16">
                <div className="col-span-5 justify-start flex flex-col gap-20">
                  {/* Pojemnik na tekst */}
                  <div className="grid grid-cols-5 gap-11 w-full ">
                    <p className="font-montserrat font-medium text-6xl col-span-5 leading-18"> Nowoczesna aranżacja Twojego ogrodu </p>
                    <p className="font-inter col-span-4 text-pretty leading-[150%]">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</p>
                  </div>
                  {/* Pojemnik na przyciski  */}
                  <div className="flex flex-row gap-9">
                  <button className="bg-green rounded-full pl-6 pr-6 pt-3 pb-3.5 text-grey font-inter font-normal cursor-pointer leading-[150%]">Skontaktuj się z nami</button>
                  <button className="border-green pl-5.5 pr-5.5 pt-3 pb-3.5 border rounded-full text-green font-inter font-normal flex gap-1 items-center cursor-pointer leading-[150%]">Zobacz nasze realizacje <ArrowDown /></button>
                  </div>

                </div>
              </div>

            </section>
            {/* PRAWA SEKCJA  */}
            <section className="col-span-6 relative w-full max-h-full">
              <div className="w-full h-full">
                <img className="object-cover w-auto h-full" src={image} alt="" />
              </div>
              {/* Pojemnik na przyciski  */}
              <div className="absolute right-0 bottom-0 flex ">
                <button className="w-20 h-18 bg-white flex justify-center items-center cursor-pointer" onClick={prevSlide}><ArrowLeft /></button>
                <button className="w-20 h-18 bg-white flex justify-center items-center cursor-pointer" onClick={nextSlide}><ArrowRight /></button>
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
import { ArrowRight } from 'lucide-react'
import garden4 from '../assets/garden4.jpg'
import { motion } from 'motion/react'

const AboutUs = () => {
  return (
    <>
        <section 
        className='min-h-[90dvh] grid  lg:grid-cols-12 lg:grid-rows-1 grid-rows-2'
        >
          {/* LEWA SEKCJA  */}
          <section className=" col-span-1 lg:col-span-6 relative w-full h-full">
            <div className="w-full h-full">
              <img className="object-cover w-full h-full" src={garden4} alt="" />
            </div>
          </section>

          {/* PRAWA SEKCJA  */}
          <section className="col-span-1 lg:col-span-6 flex flex-col justify-start lg:justify-center bg-green md:pt-16 py-5 lg:pt-0 pl-22 ">
            {/* Pojemnik na elementy  */}
            <div className="grid grid-cols-6 gap-x-8 lg:gap-x-16">
              <div className="lg:col-span-5 col-span-6 justify-start flex flex-col gap-4 md:gap-8 lg:gap-20">
                {/* Pojemnik na tekst */}
                <div className="grid grid-cols-5 md:gap-6 lg:gap-11 w-full text-white">
                    <div className='col-span-4 grid grid-cols-4 gap-x-16 gap-2 md:gap-4'>
                        <p className='whitespace-nowrap text-grey text-xs font-inter leading-[150%] tracking-[-1%]'>O firmie</p>
                        <div className='flex flex-col col-span-4'>
                            <div className="grid grid-cols-4 gap-x-4 md:gap-x-8 lg:gap-x-16 md:gap-10 gap-3">
                                <p className="font-montserrat font-medium text-2xl md:text-3xl lg:text-5xl col-span-3 leading-[115%] tracking-[-3%] ">Tworzymy z  <span className='italic font-inter font-medium'>pasją</span></p>
                                <p className="font-inter col-span-5 lg:col-span-4 text-pretty leading-[150%] font-normal md:text-base text-xs">Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pojemnik na przyciski  */}
                <div>
                <motion.button whileTap={{scale: 0.95}} className="border-grey px-4 py-2 md:pl-5.5 md:pr-5.5 md:pt-3 md:pb-3.5 border rounded-full text-grey font-inter font-normal leading-[150%] flex gap-1 items-center cursor-pointer">Poznaj nas bliżej  <ArrowRight aria-hidden="true"/> </motion.button>
                </div>

              </div>
            </div>

          </section>
        </section>

    </>
  )
}

export default AboutUs
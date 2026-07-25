import LogoWhite from '../ui/svg/LogoWhite'
import LogoadRespect from '../ui/svg/LogoadRespect'

import { motion } from 'motion/react'

const Footer = () => {
  return (
    <footer className='max-w-full h-fit py-15 md:py-20 grid grid-cols-1 md:grid-cols-12 md:gap-x-16 bg-black px-10 md:px-11 lg:px-22 font-inter'>
        <div className="col-span-10 col-start-2  flex flex-col gap-30">

            <div className="gap-10 md:gap-15.5 flex flex-col">
                <div className="flex flex-col md:flex-row justify-between w-full md:gap-0 gap-5">
                    <LogoWhite />
                    <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-6">
                        <p className="text-grey leading-[150%] font-inter lg:text-base text-sm">Daj znać, co możemy dla Ciebie zrobić!</p>
                        <motion.button whileTap={{scale: 0.95}} className="bg-green rounded-full pl-6 pr-6 pt-3 pb-3.5 text-white leading-[150%] font-inter justify-self-center cursor-pointer">Skontaktuj się z nami</motion.button>
                    </div>
                </div>

                <hr  className='border-grey'/>

                <div className='flex flex-row text-grey justify-between'>
                    <div className='flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-12 leading-[150%] text-sm'>
                        <p>Kontakt</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>LinkedIn</p>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-2 lg:gap-12 text-sm leading-[150%]'>
                        <p>000-000-000</p>
                        <p>giarddesign@kontakt.pl</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between md:gap-0 gap-2'>
                <p className='font-inter leading-[150%] text-grey'>Prawa zastrzeżone © 2022</p>
                <div className='flex flex-row gap-4'>
                    <p className='font-inter leading-[150%] text-grey'>made by</p>
                    <LogoadRespect />
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
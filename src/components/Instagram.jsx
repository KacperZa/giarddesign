import { motion } from "motion/react"

const Instagram = () => {
  return (
    <>
        <div className='w-full h-fit grid  grid-cols-1 lg:grid-cols-12 gap-x-16 py-8 lg:py-15 bg-grey px-6 md:px-12 lg:px-22'>
            <div className="col-span-1 lg:col-span-10 lg:col-start-2 bg-green px-8 py-10 md:px-13.75 md:py-15 lg:px-27.5 lg:py-30 text-grey flex items-center">
                <div className="grid grid-cols-1 xl:grid-cols-11 lg:grid-cols-3 gap-6 lg:gap-x-8 xl:gap-x-16 lg:items-end">
                    <p className="xl:col-span-7 lg:col-span-3 xl:col-start-2 text-2xl md:text-3xl lg:text-4-5xl leading-[120%] font-montserrat md:tracking-[-2px]">Zostańmy w kontakcie! Znajdziesz nas na <span className="italic font-medium font-inter tracking-[1px]">Instagramie</span>.</p>
                    <div className="lg:col-span-3 xl:col-span-2 flex flex-col gap-4 md:gap-6 font-inter leading-[150%]">
                        <p className="font-inter text-sm md:text-base">Śledź nasze najnowsze realizacje!</p>
                        <motion.button whileTap={{scale: 0.95}} className="rounded-full pl-6 pr-6 pb-3 pt-2.5 bg-grey text-green font-inter cursor-pointer self-start">Instagram</motion.button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Instagram
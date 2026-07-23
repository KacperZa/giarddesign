import { ChevronRight, PencilSparkles, Eye, Sparkles } from "lucide-react"
import { motion } from "motion/react"

const Offer = () => {
  return (
    <>
        <div className='h-full w-full bg-grey grid grid-cols-12 gap-x-16  items-center'>
            {/* Pojemnik na tekst  */}
            <div className='col-span-8 flex flex-col col-start-2 '>
                <div className="grid grid-cols-10 gap-x-16 gap-4">
                    <div className=" col-span-10 font-inter text-xs text-green">Oferta</div>
                    <div className="flex flex-col gap-10 col-span-7">
                        <div className="flex flex-row text-5xl gap-1"> 
                            <div className="font-montserrat font-medium">Działamy</div>  
                            <div className="font-inter font-medium italic">kompleksowo</div>
                        </div>
                        <p className="text-left">Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem. </p>
                    </div>
                </div>
            </div>

            {/* Pojemnik na karty  */}
            <div className="col-span-12 flex flex-row px-22 gap-16 justify-between">

                <motion.div className="bg-white px-10 py-12 h-92.5 w-94.5 rounded-3xl flex flex-col justify-between cursor-pointer group"
                whileHover={{scale: 1.03}}>
                    <div className="flex flex-col gap-8">
                        <PencilSparkles size={35} rotate={18} />
                        <div className="flex flex-col gap-3">
                            <p className="font-montserrat text-2xl leading-[115%]">Projekty</p>
                            <p className="font-inter text-sm leading-[150%]">Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.</p>
                        </div>
                    </div>
                    <p className="flex flex-row text-green under underline-animate"> Dowiedz się więcej <ChevronRight /></p>
                </motion.div>

                <motion.div className="bg-white px-10 py-12 h-92.5 w-94.5 rounded-3xl flex flex-col justify-between cursor-pointer group"
                whileHover={{scale: 1.03}}>
                    <div className="flex flex-col gap-8">
                        <Eye size={35} rotate={18} />
                        <div className="flex flex-col gap-3">
                            <p className="font-montserrat text-2xl leading-[115%]">Wizualizacje</p>
                            <p className="font-inter text-sm leading-[150%]">Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.</p>
                        </div>
                    </div>
                    <p className="flex flex-row text-green under underline-animate"> Dowiedz się więcej <ChevronRight /></p>
                </motion.div>

                <motion.div className="bg-white px-10 py-12 h-92.5 w-94.5 rounded-3xl flex flex-col justify-between cursor-pointer group"
                whileHover={{scale: 1.03}}>
                    <div className="flex flex-col gap-8">
                        <Sparkles size={35} rotate={18} />
                        <div className="flex flex-col gap-3">
                            <p className="font-montserrat text-2xl leading-[115%]">Projekty</p>
                            <p className="font-inter text-sm leading-[150%]">Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.</p>
                        </div>
                    </div>
                    <p className="flex flex-row text-green under underline-animate"> Dowiedz się więcej <ChevronRight /></p>
                </motion.div>
            </div>
        </div>
    </>
  )
}

export default Offer
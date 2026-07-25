import { ChevronRight, PencilSparkles, Eye, Sparkles } from "lucide-react"
import { motion } from "motion/react"

const offers = [
    { icon: PencilSparkles, title: 'Projekty', desc: 'Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.'},
    { icon: Eye, title: 'Wizualizacje', desc: 'Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.'},
    { icon: Sparkles, title: 'Realizacje', desc: 'Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.'}
]

const Offer = () => {
  return (
    <>
        <div className='min-h-[90dvh] w-full bg-grey grid md:grid-cols-12 grid-cols-1 md:gap-x-16 gap-y-10 items-center py-16 md:py-8'>
            {/* Pojemnik na tekst  */}
            <div className='md:col-span-8  col-span-1 flex md:col-start-2 px-6 md:px-0'>
                <div className="grid grid-cols-1 md:grid-cols-10 md:gap-x-16 md:gap-4 gap-3">
                    <div className=" md:col-span-10 col-span-1 font-inter text-xs text-green leading-[150%] tracking-[-1%]">Oferta</div>
                    <div className="flex flex-col md:gap-10 col-span-1 md:col-span-7 gap-3">
                        <div className="text-2xl md:text-3xl lg:text-5xl  leading-[115%] font-medium"> 
                            <span className="font-montserrat tracking-[-3%]">Działamy </span>  
                            <span className="font-inter italic ">kompleksowo</span>
                        </div>
                        <p className="text-left font-inter lg:text-base text-sm leading-[150%]">Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem. </p>
                    </div>
                </div>
            </div>

            {/* Pojemnik na karty  */}
            <div className="col-span-1 md:col-span-12 flex flex-row md:px-22 px-6 md:gap-16 justify-between md:col-start-">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-x-16 w-full">
                    {offers.map(({icon: Icon, title, desc}, index) => (
                        <motion.div className="bg-white px-8 md:px-10 md:py-12 py-10 h-auto md:h-92.5 lg:col-span-4 rounded-3xl flex flex-col justify-between cursor-pointer group md:gap-0 gap-2"
                        whileHover={{scale: 1.03}}
                        key={index}
                        >
                            <div className="flex flex-col gap-8">
                                <Icon size={35} rotate={18} aria-hidden="true"/>
                                <div className="flex flex-col gap-3">
                                    <p className="font-montserrat text-2-5xl leading-[115%]">{title}</p>
                                    <p className="font-inter text-sm leading-[150%]">{desc}</p>
                                </div>
                            </div>
                            <p className="flex flex-row text-green underline md:underline-animate font-inter leading-[150%]"> Dowiedz się więcej <ChevronRight /></p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Offer
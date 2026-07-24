import { ArrowRight } from 'lucide-react'
import garden4 from '../assets/garden4.jpg'

const AboutUs = () => {
  return (
    <>
        <section 
        className='h-9/10 grid grid-cols-12'
        >
          {/* LEWA SEKCJA  */}
          <section className="col-span-6 relative w-full max-h-full">
            <div className="w-full h-full">
              <img className="object-cover w-auto h-full" src={garden4} alt="" />
            </div>
          </section>

          {/* PRAWA SEKCJA  */}
          <section className="col-span-6 flex flex-col justify-center bg-green pl-22">
            {/* Pojemnik na elementy  */}
            <div className="grid grid-cols-6 gap-x-16">
              <div className="col-start-2 col-span-5 justify-start flex flex-col gap-20">
                {/* Pojemnik na tekst */}
                <div className="grid grid-cols-5 gap-11 w-full text-white">
                    <div className='col-span-4 grid grid-cols-4 gap-x-16 gap-4'>
                        <p className='text-grey text-xs font-inter leading-[150%] tracking-[-1%]'>O firmie</p>
                        <div className='flex flex-col col-span-4'>
                            <div className="grid grid-cols-4 gap-x-16 gap-10">
                                <p className="font-montserrat font-medium text-5xl col-span-3 leading-[115%] tracking-[-3%] ">Tworzymy z  <span className='italic font-inter font-medium'>pasją</span></p>
                                <p className="font-inter col-span-4 text-pretty leading-[150%] font-normal">Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pojemnik na przyciski  */}
                <div>
                <button className="border-grey pl-5 pr-5 pt-3 pb-3.5 border rounded-full text-grey font-inter font-normal leading-[150%] flex gap-1 items-center">Poznaj nas bliżej  <ArrowRight /> </button>
                </div>

              </div>
            </div>

          </section>
        </section>

    </>
  )
}

export default AboutUs
import LogoWhite from '../ui/svg/LogoWhite'
import LogoadRespect from '../ui/svg/LogoadRespect'
const Footer = () => {
  return (
    <footer className='w-full h-fit py-20 grid grid-cols-12 gap-x-16 bg-black px-22 font-inter'>
        <div className="col-span-10 col-start-2  flex flex-col gap-30">

            <div className="gap-15.5 flex flex-col">
                <div className="flex flex-row justify-between w-full">
                    <LogoWhite />
                    <div className="flex flex-row items-center gap-6">
                        <p className="text-grey leading-[150%] font-inter">Daj znać, co możemy dla Ciebie zrobić!</p>
                        <button className="bg-green rounded-full pl-6 pr-6 pt-3 pb-3.5 text-white leading-[150%] font-inter justify-self-center">Skontaktuj się z nami</button>
                    </div>
                </div>

                <hr  className='border-grey'/>

                <div className='flex flex-row text-grey justify-between'>
                    <div className='flex flex-row gap-12 leading-[150%] text-sm'>
                        <p>Kontakt</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>LinkedIn</p>
                    </div>
                    <div className='flex flex-row gap-12 text-sm leading-[150%]'>
                        <p>000-000-000</p>
                        <p>giarddesign@kontakt.pl</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-between'>
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
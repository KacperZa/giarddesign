
const Offer = () => {
  return (
    <>
        <div className='h-full w-full bg-grey grid grid-cols-12 gap-x-16'>
            {/* Pojemnik na tekst  */}
            <div className='col-span-8 flex flex-col col-start-2 gap-4'>
                <div className="font-inter text-xs text-green">Oferta</div>
                <div className="flex flex-col gap-8">
                    <p className="flex flex-row text-5xl gap-1"> <div className="font-montserrat font-medium">Działamy</div>  <div className="font-inter font-medium italic">kompleksowo</div></p>
                    <p>Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem. </p>
                </div>
            </div>

            {/* Pojemnik na karty  */}
            <div className="col-span-12 flex flex-row">
                <div className="bg-white px-10 py-12 w-"></div>
            </div>
        </div>
    </>
  )
}

export default Offer
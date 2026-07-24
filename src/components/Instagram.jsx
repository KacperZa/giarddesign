const Instagram = () => {
  return (
    <>
        <div className='w-full h-fit grid grid-cols-12 gap-x-16 py-15 bg-grey px-22'>
            <div className="col-span-10 col-start-2 bg-green px-27.5 py-30 text-grey flex items-center">
                <div className="grid grid-cols-11 gap-x-16 items-end">
                    <p className="col-span-7 col-start-2 text-4-5xl leading-[120%] font-montserrat tracking-[-2px]">Zostańmy w kontakcie! Znajdziesz nas na <span className="italic font-medium font-inter tracking-[1px]">Instagramie</span>.</p>
                    <div className=" col-span-2 flex flex-col gap-6 font-inter leading-[150%]">
                        <p className="font-inter text-base">Śledź nasze najnowsze realizacje!</p>
                        <button className=" rounded-full pl-6 pr-6 pb-3 pt-2.5 bg-grey text-green font-inter cursor-pointer">Instagram</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Instagram
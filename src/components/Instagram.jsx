
const Instagram = () => {
  return (
    <>
        <div className='w-full h-fit grid grid-cols-12 gap-x-16 py-15 bg-grey px-22'>
            <div className="col-span-10 col-start-2  bg-green px-27.5 py-30 flex flex-row">
                <div className=" col-span-10 col-start-2 grid grid-cols-10 gap-x-16 justify-start">
                        <div className="col-span-6">
                            <p className="font-montserrat text-4-5xl leading-[120%] text-grey">Zostańmy w kontakcie! Znajdziesz nas na  <span className="italic font-inter font-medium">Instagramie.</span> </p>
                        </div>
                        <div className="col-span-2 flex flex-col gap-6 col-start-8">
                            <p className="leading-[150%] text-white">Śledź nasze najnowsze realizacje!</p>
                            <button className="bg-grey pl-6 pr-6 pt-2.5 pb-3 text-green rounded-full font-inter text-base">Instagram</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Instagram
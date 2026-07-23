
const Popup = ({src}) => {
  return (
    <>
        <div className='z-10 w-screen max-h-screen bg-black/50 flex justify-center items-center'>
            <img src={src} alt="Zdjęcie ogrodu" className="h-full" />
        </div>
    </>
  )
}

export default Popup
import ReactDom from 'react-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Popup = ({ images, currentIndex, setCurrentIndex, setPopupVisible}) => {

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  };

  
  return ReactDom.createPortal(
    <>
      <div className='z-100 min-w-screen max-h-screen min-h-screen bg-black/50 fixed top-0 left-0 flex justify-center items-center flex-row gap-10' onClick={() => setPopupVisible(false)}>
        <ChevronLeft color='white' size={40} className='cursor-pointer' onClick={(e) => {prevSlide(); e.stopPropagation()}}/>
        <img src={images[currentIndex]} alt="Zdjęcie ogrodu" className=" max-w-[70vw] max-h-[85vh] w-auto h-auto object-contain select-none" />
        <ChevronRight  color='white' size={40} className='cursor-pointer' onClick={(e) => {nextSlide(); e.stopPropagation()}}/>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Popup
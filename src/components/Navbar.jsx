import Logo from "../ui/svg/Logo"
import { Search, ChevronDown, Menu } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useRef, useState } from "react"

// Warianty dla strzałki przy "Oferta"
const arrowVariants = {
    rest: { rotate: 0},
    hover: { rotate: 180},
};

// Warianty dla containera dropdowna
const dropdownContainerVariants = {
    hidden: {
        height: 0
    },
    show: {
        height: 'auto',
        transition: {
            staggerChildren: 0.2,
        },
    },
    exit: {
        height: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    },
};

// Warianty dla div-ow w srodku dropdownu
const dropdownItemVariants = {
    hidden: {
        opacity: 0,
        y: -10
    },
    show: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.1
        }
    }
};


const Navbar = () => {
    const [searchBarVisible, setSearchBarVisible] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isPinned, setIsPinned] = useState(false)
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const isDropdownVisible = isPinned || isHovered

    const searchBarRef = useRef(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handler = (e) => {
            if(!searchBarRef.current?.contains(e.target)) {
                setSearchBarVisible(false)
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])

    useEffect(() => {
        const handler = (e) => {
            if(!dropdownRef.current?.contains(e.target)) {
                setIsPinned(false)
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])


  return (
    <>
        <nav className="w-full h-1/10 px-22 sticky top-0 z-50 bg-white ">
            <div className="flex items-center justify-between w-full h-full relative">
                <p className="flex items-center"> <Logo /></p>
                <div ref={searchBarRef} className={` hidden md:flex flex-row gap-6 lg:gap-12 font-inter  leading-[150%] tracking-[-1%]  justify-center items-center`}> 
                    
                    <motion.div 
                    className={`flex flex-row items-center gap-1  ${searchBarVisible ? 'opacity-0 pointer-events-none' : 'cursor-pointer'} transition-opacity duration-200 ease-in-out relative`}
                    initial="rest"
                    whileHover="hover"
                    onClick={() => setIsPinned(true)}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    ref={dropdownRef}
                        >
                        Oferta 
                        <motion.div 
                        variants={arrowVariants}
                        transition={{
                            damping:20
                        }}
                        >
                            <ChevronDown size={20}/>
                        </motion.div>
                        <AnimatePresence>
                            {isDropdownVisible && 
                                <motion.div className="absolute top-full left-1/2 -translate-x-1/2  flex flex-col gap-4 bg-white p-2 rounded-xl"
                                variants={dropdownContainerVariants}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                >
                                    <motion.div variants={dropdownItemVariants} className=" rounded-xl pl-6 pr-6 pt-3 pb-3.5 bg-grey">Projekty</motion.div>
                                    <motion.div variants={dropdownItemVariants} className=" rounded-xl pl-6 pr-6 pt-3 pb-3.5 bg-grey">Oferta</motion.div>
                                    <motion.div variants={dropdownItemVariants} className=" rounded-xl pl-6 pr-6 pt-3 pb-3.5 bg-grey">O firmie</motion.div>
                                    <motion.div variants={dropdownItemVariants} className=" rounded-xl pl-6 pr-6 pt-3 pb-3.5 bg-grey">Nasze projekty</motion.div>
                                </motion.div>
                            }
                        </AnimatePresence>
                    </motion.div>
                    <div className={` ${searchBarVisible ? 'opacity-0 pointer-events-none' : 'cursor-default'} transition-opacity duration-200 ease-in-out`}>O firmie</div>
                    <div className={` ${searchBarVisible ? 'opacity-0 pointer-events-none' : 'cursor-default'} transition-opacity duration-200 ease-in-out`}>Realizacje</div>
                    <div className={` ${searchBarVisible ? 'opacity-0 pointer-events-none' : 'cursor-default'} transition-opacity duration-200 ease-in-out`}>Kontakt</div>
                    <motion.div className={` ${searchBarVisible ? 'opacity-0 pointer-events-none' : 'cursor-pointer'} transition-opacity duration-200 ease-in-out`}  onClick={() => setSearchBarVisible(prev => !prev)}
                        whileTap={{scale: 0.85}}><Search /></motion.div>
                    <AnimatePresence>
                        {searchBarVisible && 
                            <motion.input className="absolute top-1/2  -translate-y-1/2 right-0 bg-beige rounded-full h-10  p-3 focus:outline-none "
                            autoFocus
                                initial={{width: '0', opacity: 0}}
                                animate={{width: '17.5rem', opacity: 1}}
                                exit={{width: '0', opacity: 0}}
                                transition={{ duration: 0.3}}
                            />
                        }
                    </AnimatePresence>
                </div>
                    <button className="md:hidden z-50" onClick={() => {setIsMenuVisible(prev => !prev)}}>
                        <Menu />
                    </button>
                    <AnimatePresence>
                        {isMenuVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25 }}
                            className="lg:hidden absolute top-full left-0 w-full bg-white flex flex-col items-center gap-6 py-10 shadow-md z-40"
                        >
                            <motion.a className="font-medium" onClick={() => setIsMenuVisible(false)} whileTap={{scale: 0.9}}>Oferta</motion.a>
                            <motion.a className="font-medium" onClick={() => setIsMenuVisible(false)} whileTap={{scale: 0.9}}>O firmie</motion.a>
                            <motion.a className="font-medium" onClick={() => setIsMenuVisible(false)} whileTap={{scale: 0.9}}>Realizacje</motion.a>
                            <motion.a className="font-medium" onClick={() => setIsMenuVisible(false)} whileTap={{scale: 0.9}}>Kontakt</motion.a>
                        </motion.div>
                        )}
                    </AnimatePresence>
            </div>
            <div></div>
        </nav>
    </>
  )
}

export default Navbar
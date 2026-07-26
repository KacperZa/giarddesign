import Logo from "../ui/svg/Logo"
import { Search, ChevronDown, Menu } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { useRef, useState } from "react"
import { useClickOutside } from "../hooks/useClickOutside";

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
            duration: 0.3
        }
    }
};

// Warianty dla containera dropdowna dla telefonów
const MobileDropdownContainerVariants = {
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
            duration: 0.8,
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    },
};

// Warianty dla div-ow w srodku dropdownu dla telefonów

const MobileDropdownItemVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.1
        }
    }
};

const Navbar = () => {
    const [searchBarVisible, setSearchBarVisible] = useState(false)
    const [mobileSearchBarVisible, setMobileSearchBarVisible] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isPinned, setIsPinned] = useState(false)
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [isMobileDropdownVisible, setIsMobileDropdownVisible] = useState(false)

    const isDropdownVisible = isPinned || isHovered

    const searchBarRef = useRef(null)
    const dropdownRef = useRef(null)

    useClickOutside(searchBarRef, () => setSearchBarVisible(false))
    useClickOutside(dropdownRef, () => setIsPinned(false))

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
                    <div className={` ${searchBarVisible ? 'opacity-0 pointer-events-none' : 'cursor-default'} transition-opacity duration-200 ease-in-out cursor-pointer`}>O firmie</div>
                    <div className={` ${searchBarVisible ? 'opacity-0 pointer-events-none' : 'cursor-default'} transition-opacity duration-200 ease-in-out cursor-pointer`}>Realizacje</div>
                    <div className={` ${searchBarVisible ? 'opacity-0 pointer-events-none' : 'cursor-default'} transition-opacity duration-200 ease-in-out cursor-pointer`}>Kontakt</div>
                    <motion.div className={` ${searchBarVisible ? 'opacity-0 pointer-events-none' : 'cursor-pointer'} transition-opacity duration-200 ease-in-out`}  onClick={() => setSearchBarVisible(prev => !prev)}
                        whileTap={{scale: 0.85}}><Search aria-label="Otwórz wyszukiwarkę"/></motion.div>
                        {/* Wysuwana wyszukiwarka dla ekranów większych niż telefon */}
                        <AnimatePresence>
                        {searchBarVisible &&
                            <motion.input
                                key="desktop-search-input"
                                className="absolute top-1/2 -translate-y-1/2 right-0 bg-beige rounded-full h-10 p-3 pr-10 focus:outline-none"
                                autoFocus
                                initial={{width: '0', opacity: 0}}
                                animate={{width: '17.5rem', opacity: 1}}
                                exit={{width: '0', opacity: 0}}
                                transition={{ duration: 0.3}}
                                placeholder="Wyszukaj"
                            />
                            }
                        </AnimatePresence>

                        <AnimatePresence>
                            {searchBarVisible &&
                            <motion.div
                                key="desktop-search-input-icon"
                                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                            >
                                <Search size={18} aria-hidden="true" />
                            </motion.div>
                            }
                        </AnimatePresence>
                </div>
                {/* // hamburger menu na telefony  */}
                    <button className="md:hidden z-50" onClick={() => {setIsMenuVisible(prev => !prev); setMobileSearchBarVisible(false)}} aria-label="Otwórz menu">
                        <Menu aria-hidden="true"/>
                    </button>
                    <AnimatePresence>
                        {isMenuVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25 }}
                            className="lg:hidden absolute top-full left-0 w-full bg-white flex flex-col items-center gap-6 py-10 px-5 shadow-md z-40"
                        >
                            {/* Wysuwana wyszukiwarka dla telefonów  */}
                            <AnimatePresence>
                                {mobileSearchBarVisible ? 
                                <div className="relative">
                                    <motion.input key="mobile-search-input" className=" w-full bg-beige rounded-full h-10 p-3 pr-10 focus:outline-none text-sm"
                                    placeholder="Wyszukaj"
                                    autoFocus
                                        initial={{width: '0', opacity: 0}}
                                        animate={{width: '100%', opacity: 1}}
                                        exit={{width: '0', opacity: 0}}
                                        transition={{ duration: 0.3}}
                                    /> 
                                    <Search key="mobile-search-icon" className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" size={18} aria-hidden="true"/>
                                    
                                </div>

                                :
                                <motion.div className={` ${searchBarVisible ? 'opacity-0 pointer-events-none' : 'cursor-pointer'} transition-opacity duration-200 ease-in-out `}  onClick={() => setMobileSearchBarVisible(prev => !prev)}
                                whileTap={{scale: 0.85}}><Search aria-label="Otwórz wyszukiwarkę"/></motion.div>
                                }
                            </AnimatePresence>
                            <motion.a className="font-medium flex flex-row items-center " onClick={() => setIsMobileDropdownVisible(prev => !prev)} whileTap={{scale: 0.9}}>Oferta <ChevronDown size={20}/></motion.a>
                            <AnimatePresence>
                                {isMobileDropdownVisible &&
                                    <motion.div className="flex flex-col gap-2 text-sm justify-center font-inter w-full items-center rounded-lg"
                                    initial='hidden'
                                    animate='show'
                                    exit='exit'
                                    variants={MobileDropdownContainerVariants}
                                    >
                                        
                                        <motion.div variants={MobileDropdownItemVariants} className="">Projekty</motion.div>
                                        <motion.div variants={MobileDropdownItemVariants} className="">Oferta</motion.div>
                                        <motion.div variants={MobileDropdownItemVariants} className="">O firmie</motion.div>
                                        <motion.div variants={MobileDropdownItemVariants} className="">Nasze projekty</motion.div>
                                    </motion.div>
                                }
                            </AnimatePresence>

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
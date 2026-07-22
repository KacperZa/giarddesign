import Logo from "../ui/Logo"
import { Search, ChevronDown } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

const Navbar = () => {
    const [searchBarVisible, setSearchBarVisible] = useState(false)
  return (
    <>
        <nav className="w-full h-1/10 px-22">
            <div className="flex items-center justify-between w-full h-full">
                <p className="flex items-center"> <Logo /></p>
                <div className="flex flex-row gap-12 font-inter"> 
                    <div className={`flex flex-row items-center gap-1 cursor-pointer tracking-wide ${searchBarVisible ? 'hidden' : null}`}>
                        Oferta 
                        <motion.div 
                        whileHover={{rotate: 180}}
                        transition={{
                            damping:20
                        }}
                        >
                            <ChevronDown size={20}/>
                        </motion.div>
                    </div>
                    <div className={`tracking-wide ${searchBarVisible ? 'hidden' : null}`}>O firmie</div>
                    <div className={`tracking-wide ${searchBarVisible ? 'hidden' : null}`}>Realizacje</div>
                    <div className={`tracking-wide ${searchBarVisible ? 'hidden' : null}`}>Kontakt</div>
                    <div onClick={() => setSearchBarVisible(prev => !prev)}><Search /></div>
                    {searchBarVisible && 
                    <>
                    <input /> dasd
                    </>
                    }
                </div>
            </div>
            <div></div>
        </nav>
    </>
  )
}

export default Navbar
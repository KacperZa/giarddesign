import './App.css'
import AboutUs from './components/AboutUs'
import Instagram from './components/Instagram'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import Projects from './components/Projects'

function App() {

  return (
    <>
    <div className='min-w-screen h-screen overflow-x-hidden relative'>
      <Navbar />
      <Introduction />
      <Offer />
      <AboutUs />
      <Projects />
      <Instagram />
    </div>
    </>
  )
}

export default App

import './App.css'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Offer from './components/Offer'

function App() {

  return (
    <>
    <div className='min-w-screen h-screen overflow-x-hidden'>
      <Navbar />
      <Introduction />
      <Offer />
    </div>
    </>
  )
}

export default App

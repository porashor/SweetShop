import React, {useState} from 'react'
import Navber from './Components/Navber'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Offer from "./Pages/Offer"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Foother from './Components/Foother'


const App = () => {
  const [light, setLight] = useState(true)
  return (
    <div className=''>
      <Navber light={light} setLight={setLight}/>
      <Router>
        <Routes>
          <Route path='/' element={<Home light={light}/>}/>
          <Route path='/about' element={<About light={light}/>}/>
          <Route path='/offer' element={<Offer light={light}/>}/>
          <Route path='/shop' element={<Blog light={light}/>}/>
          <Route path='/contact' element={<Contact light={light}/>}/>
        </Routes>
      </Router>
      <Foother light={light}/>
    </div>
  )
}

export default App

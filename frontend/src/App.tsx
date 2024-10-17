import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import { NavbarContainer } from './components/Navbar'
import { BackgroundBoxes } from './components/backgroundBoxes'

function App() {

  return (
    <BrowserRouter>
      {/* <Banner /> */}
      <div className='relative'>
        <BackgroundBoxes />
        <NavbarContainer />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import { NavbarContainer } from './components/Navbar'
import { BackgroundBoxes } from './components/backgroundBoxes'
import { Banner } from './components/Banner'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Banner />
      <NavbarContainer />
      <BackgroundBoxes>
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
        </div>
      </BackgroundBoxes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Events from './sections/Events'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '60vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box id="home" sx={{ height: { xs: 'auto', sm: '80vh' } }}>
          <Home />
        </Box>
        <Box id="about" sx={{ minHeight: { xs: 'auto', sm: '60vh' }, py: 4 }}>
          <About />
        </Box>
        <Box id="events" sx={{ minHeight: { xs: 'auto', sm: '60vh' }, py: 4 }}>
          <Events />
        </Box>
        <Box id="gallery" sx={{ minHeight: { xs: 'auto', sm: '60vh' }, py: 4 }}>
          <Gallery />
        </Box>
        <Box id="contact" sx={{ minHeight: { xs: 'auto', sm: '60vh' }, py: 4 }}>
          <Contact />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
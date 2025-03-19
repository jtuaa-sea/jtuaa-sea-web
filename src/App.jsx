import React from 'react'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Events from './sections/Events'
import Member from './sections/Member'
import Contact from './sections/Contact'

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box id="home" sx={{ minHeight: { xs: 'auto', sm: '100vh' }, pt: { xs: 8, sm: 0 }, pb: { xs: 4, sm: 0 }, mb: { xs: 2, sm: 4 } }}>
          <Home />
        </Box>
        <Box id="about" sx={{ minHeight: { xs: 'auto', sm: '100vh' }, pt: { xs: 4, sm: 6 }, pb: { xs: 4, sm: 6 }, mb: { xs: 2, sm: 4 } }}>
          <About />
        </Box>
        <Box id="events" sx={{ minHeight: { xs: 'auto', sm: '100vh' }, py: 6, mb: 4 }}>
          <Events />
        </Box>
        <Box id="member" sx={{ minHeight: { xs: 'auto', sm: '100vh' }, py: 6, mb: 4 }}>
          <Member />
        </Box>
        <Box id="contact" sx={{ minHeight: { xs: 'auto', sm: '100vh' }, py: 6 }}>
          <Contact />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
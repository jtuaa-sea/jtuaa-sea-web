import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LanguageIcon from '@mui/icons-material/Language'


function Navbar() {
  const { t, i18n } = useTranslation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null)
  const [langMenuAnchor, setLangMenuAnchor] = useState(null)

  const handleMobileMenuOpen = (event) => setMobileMenuAnchor(event.currentTarget)
  const handleMobileMenuClose = () => setMobileMenuAnchor(null)
  const handleLangMenuOpen = (event) => setLangMenuAnchor(event.currentTarget)
  const handleLangMenuClose = () => setLangMenuAnchor(null)

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
    handleLangMenuClose()
  }

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'events', label: t('nav.events') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'contact', label: t('nav.contact') }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      handleMobileMenuClose()
    }
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box
          onClick={() => scrollToSection('home')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexGrow: { xs: 1, md: 0 },
            mr: { md: 4 }
          }}
        >
          {/* Update the logo path to ensure it's correctly resolved */}
          <img 
            src={import.meta.env.BASE_URL + "logo.JPG"} 
            alt="JTUAA Seattle Logo" 
            style={{ height: 40, objectFit: 'contain' }} 
          />
          <Typography variant="h6" sx={{ ml: 1 }}>
            JTUAA Seattle
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              onClick={handleMobileMenuOpen}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                color="inherit"
                sx={{ mx: 1 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        <IconButton color="inherit" onClick={handleLangMenuOpen}>
          <LanguageIcon />
        </IconButton>
        <Menu
          anchorEl={langMenuAnchor}
          open={Boolean(langMenuAnchor)}
          onClose={handleLangMenuClose}
        >
          <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
          <MenuItem onClick={() => handleLanguageChange('zh')}>中文</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
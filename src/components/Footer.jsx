import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Link, Grid } from '@mui/material'

function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200]
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between" alignItems="left">
          <Grid item xs={12} sm={4} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', mb: 2 }}>
              <img 
                src={import.meta.env.BASE_URL + "logo.JPG"} 
                alt="JTUAA Seattle Logo" 
                style={{ height: 150, objectFit: 'contain' }} 
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'left', sm: 'left' } }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              JTU&CTUAA-SEA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('about.description')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'left', sm: 'left' } }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('nav.contact')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: jtuseattle@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {currentYear} JTU&CTUAA-SEA. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
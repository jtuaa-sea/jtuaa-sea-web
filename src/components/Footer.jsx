import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Link, Grid } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

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
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              JTUAA Seattle
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('about.description')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('nav.contact')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@jtuaaseattle.org
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('nav.membership')}
            </Typography>
            <Link
              component={RouterLink}
              to="/membership"
              color="inherit"
              underline="hover"
            >
              {t('membership.join')}
            </Link>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {currentYear} JTUAA Seattle. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
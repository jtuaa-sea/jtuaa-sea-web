import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography, Paper, Grid, Button } from '@mui/material'

function Home() {
  const { t } = useTranslation()

  return (
    <Box>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(/seattle-cover.png)',
          minHeight: { xs: 'auto', sm: '400px', md: '600px' },
          display: 'flex',
          alignItems: 'center',
          py: { xs: 4, sm: 6 }
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)'
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', py: 6 }}>
          <Typography
            component="h1"
            variant="h2"
            color="inherit"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            {t('home.welcome')}
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            {t('home.description')}
          </Typography>
          <Button
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
          >
            {t('nav.about')}
          </Button>
        </Container>
      </Paper>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              {t('about.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('home.description')}
            </Typography>
            <Button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              variant="outlined"
              color="primary"
            >
              {t('nav.about')}
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              {t('events.upcoming')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('home.events')}
            </Typography>
            <Button
              onClick={() => document.getElementById('events').scrollIntoView({ behavior: 'smooth' })}
              variant="outlined"
              color="primary"
            >
              {t('nav.events')}
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              {t('contact.reach')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('home.connect')}
            </Typography>
            <Button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              variant="outlined"
              color="primary"
            >
              {t('nav.contact')}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Typography, Paper, Grid, Box } from '@mui/material'

function About() {
  const { t } = useTranslation()

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('about.title')}
      </Typography>
      
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="body1" paragraph>
          {t('about.description')}
        </Typography>
        
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          {t('about.mission')}
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>{t('about.mission.1')}</li>
            <li>{t('about.mission.2')}</li>
            <li>{t('about.mission.3')}</li>
            <li>{t('about.mission.4')}</li>
            <li>{t('about.mission.5')}</li>
          </ul>
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" gutterBottom>
              {t('about.connect.title')}
            </Typography>
            <Typography variant="body1">
              {t('about.connect.description')}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" gutterBottom>
              {t('about.support.title')}
            </Typography>
            <Typography variant="body1">
              {t('about.support.description')}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" gutterBottom>
              {t('about.grow.title')}
            </Typography>
            <Typography variant="body1">
              {t('about.grow.description')}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {t('about.history.title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('about.history')}
        </Typography>
      </Paper>
    </Container>
  )
}

export default About
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
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          To foster a vibrant community of JiaoTong and ChiaoTung University alumni in the Seattle area,
          promoting professional networking, cultural exchange, and mutual support among members.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Connect
            </Typography>
            <Typography variant="body1">
              Building bridges between alumni through regular social gatherings and professional events.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Support
            </Typography>
            <Typography variant="body1">
              Providing resources and mentorship opportunities for new alumni in the Seattle area.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Grow
            </Typography>
            <Typography variant="body1">
              Fostering personal and professional growth through knowledge sharing and collaboration.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our History
        </Typography>
        <Typography variant="body1" paragraph>
          JTUAA Seattle was established as a chapter of CTUAA to serve the growing community of
          JiaoTong and ChiaoTung University alumni in the Greater Seattle area. We organize various
          activities throughout the year to strengthen our community bonds and support our members'
          professional development.
        </Typography>
      </Paper>
    </Container>
  )
}

export default About
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Typography, Paper, Grid, Box, Link } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

function Contact() {
  const { t } = useTranslation()

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('contact.reach')}
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
              {t('contact.email')}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ mr: 2 }} />
              <Link href="mailto:info@jtuaaseattle.org" underline="hover">
                info@jtuaaseattle.org
              </Link>
            </Box>
            <Typography variant="body1">
              Feel free to reach out to us with any questions or inquiries.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
              {t('contact.social')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LinkedInIcon sx={{ mr: 2 }} />
                <Link href="#" underline="hover">
                  JTUAA Seattle LinkedIn Group
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TwitterIcon sx={{ mr: 2 }} />
                <Link href="#" underline="hover">
                  @JTUAASeattle
                </Link>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Office Location
        </Typography>
        <Typography variant="body1">
          We are located in the Greater Seattle area. Our events are held at various locations
          throughout the region. Please contact us for specific event locations.
        </Typography>
      </Paper>
    </Container>
  )
}

export default Contact
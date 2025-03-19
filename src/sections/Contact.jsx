import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Typography, Paper, Grid, Box, Link } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import QrCodeIcon from '@mui/icons-material/QrCode'  // Using QR code icon for WeChat
import FavoriteIcon from '@mui/icons-material/Favorite'  // Using heart icon for Xiaohongshu

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
              jtuseattle@gmail.com
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
                <QrCodeIcon sx={{ mr: 2 }} />
                <Typography>
                  JTUAA Seattle 微信公众号
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FavoriteIcon sx={{ mr: 2 }} />
                <Link href="#" underline="hover">
                  JTUAA Seattle 小红书
                </Link>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {t('contact.location')}
        </Typography>
        <Typography variant="body1">
          {t('contact.location.description')}
        </Typography>
      </Paper>
    </Container>
  )
}

export default Contact
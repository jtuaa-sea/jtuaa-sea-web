import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Typography, Paper, Grid, Box, Link, Dialog, DialogContent, IconButton } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import QrCodeIcon from '@mui/icons-material/QrCode'  // Using QR code icon for WeChat
import FavoriteIcon from '@mui/icons-material/Favorite'  // Using heart icon for Xiaohongshu
import CloseIcon from '@mui/icons-material/Close'

function Contact() {
  const { t } = useTranslation()
  const [openQRCode, setOpenQRCode] = useState(false)

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
                <Link
                  component="button"
                  onClick={() => setOpenQRCode(true)}
                  underline="hover"
                  sx={{ textAlign: 'left' }}
                >
                  JTUAA Seattle 微信公众号
                </Link>
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


      <Dialog
        open={openQRCode}
        onClose={() => setOpenQRCode(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent sx={{ p: 2, position: 'relative' }}>
          <IconButton
            onClick={() => setOpenQRCode(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src="/wechat_qr.png"
            alt="WeChat QR Code"
            sx={{ width: '100%', height: 'auto', display: 'block', mt: 2 }}
          />
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export default Contact
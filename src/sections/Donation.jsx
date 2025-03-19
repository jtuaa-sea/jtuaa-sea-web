import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Typography, Paper, Box, Button } from '@mui/material'

function Donation() {
  const { t } = useTranslation()

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('contact.support.title')}
      </Typography>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="body1" paragraph>
          {t('contact.support.description')}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
          {t('contact.support.organization')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('contact.support.thanks')}
        </Typography>
      </Paper>
    </Container>
  )
}

export default Donation
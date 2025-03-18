import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Typography, Paper, Grid, Button } from '@mui/material'

function Membership() {
  const { t } = useTranslation()

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('membership.join')}
      </Typography>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          {t('membership.benefits')}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Networking
              </Typography>
              <Typography variant="body1">
                Connect with fellow alumni and expand your professional network.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Events
              </Typography>
              <Typography variant="body1">
                Priority access and special rates for all JTUAA Seattle events.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Resources
              </Typography>
              <Typography variant="body1">
                Access to exclusive resources and mentorship opportunities.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          How to Join
        </Typography>
        <Typography variant="body1" paragraph>
          Membership is open to all JiaoTong and ChiaoTung University alumni in the Seattle area.
          To become a member, please fill out our membership form or contact us directly.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Apply Now
        </Button>
      </Paper>
    </Container>
  )
}

export default Membership
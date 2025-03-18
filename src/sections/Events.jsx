import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Typography, Paper, Grid, Card, CardContent, Button } from '@mui/material'

function Events() {
  const { t } = useTranslation()

  const upcomingEvents = [
    {
      id: 1,
      title: 'Spring Networking Mixer',
      date: 'March X, 2025',
      location: 'Location',
      description: 'Join us for an evening of networking with fellow alumni.',
      registerable: false,
      registerLink: 'https://www.google.com'
    },
    {
      id: 2,
      title: 'Tech Industry Panel',
      date: 'April X, 2025',
      location: 'Location',
      description: 'Join us for an evening of networking with fellow alumni.',
      registerable: false,
      registerLink: ''
    }
  ]

  const pastEvents = [
    {
      id: 3,
      title: 'New Year Celebration',
      date: 'January 20, 2024',
      location: 'Bellevue',
      description: 'Annual new year gathering with cultural performances.'
    },
    {
      id: 4,
      title: 'Career Workshop',
      date: 'February 10, 2024',
      location: 'Seattle',
      description: 'Resume review and interview preparation workshop.'
    }
  ]

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('nav.events')}
      </Typography>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          {t('events.upcoming')}
        </Typography>
        <Grid container spacing={3}>
          {upcomingEvents.map((event) => (
            <Grid item key={event.id} xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {event.date} | {event.location}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {event.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ mt: 2 }}
                    disabled={!event.registerable}
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {t('events.past')}
        </Typography>
        <Grid container spacing={3}>
          {pastEvents.map((event) => (
            <Grid item key={event.id} xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {event.date} | {event.location}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  )
}

export default Events
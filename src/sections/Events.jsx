import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Typography, Paper, Grid, Card, CardContent, Button, CardActionArea, Box } from '@mui/material'

function Events() {
  const { t } = useTranslation()

  const upcomingEvents = [
    {
      id: 4,
      title: '【TBD】夏日烧烤',
      date: 'Sep, 2025',
      location: 'Bellevue, WA',
      description: '一年一度校友烧烤聚会',
      registerable: false,
      registerLink: '',
      eventLink: '',
      backgroundImg: ''
    }
  ]

  const pastEvents = [
    {
      id: 3,
      title: '【重磅嘉宾揭晓】交通大学美洲校友峰会火热报名中!',
      date: 'May 24-25, 2025',
      location: 'Santa Clara Convention Center, Santa Clara, CA 95054',
      description: '2025年5月24-25日，第十三届交通大学美洲校友联谊峰会将在科技创新之地加州硅谷盛大举行。',
      eventLink: 'https://mp.weixin.qq.com/s/FXaaTADfEGAX8x3qU_bqhw',
      backgroundImg: '/event_3.jpeg'
    },
    {
      id: 2,
      title: '白色情人节邂逅之约',
      date: 'March 22, 2025',
      location: 'Bellevue, WA',
      description: '白色情人节邂逅之约—交大西雅图校友会活动回顾。',
      eventLink: 'https://mp.weixin.qq.com/s/-E8CF1X9hfrfNlFNr77qyg',
      backgroundImg: '/event_2.png'
    },
    {
      id: 1,
      title: '白色情人节联谊活动—交大西雅图校友会',
      date: 'February 28, 2025',
      location: 'Bellevue, WA',
      description: '白色情人节联谊活动—交大西雅图校友会。',
      eventLink: 'https://mp.weixin.qq.com/s/8moN3QwHXtQwWVfhAj8DaQ',
      backgroundImg: '/event_1.png'
    },
    {
      id: 0,
      title: '交通大学西雅图地区秋日校友聚',
      date: 'Nov 10, 2024',
      location: 'Bellevue, WA',
      description: '每年的校友会保留活动：交通大学西雅图地区秋日校友聚会。',
      eventLink: 'https://mp.weixin.qq.com/s/AUEj9_wIDaLc3tcIPG1G5Q',
      backgroundImg: '/event_0.png'
    },
    {
      id: -1,
      title: '【茶映人生•一年之计在于春】大西雅图地区交大人一起品茶',
      date: 'April 28, 2024',
      location: 'Bellevue, WA',
      description: '由交大校友会西雅图分会与TEA EDUCATION ASSOCIATION联合举办的系列沙龙活动“茶映人生”第一次主题活动。',
      eventLink: 'https://mp.weixin.qq.com/s/IADL0CWz9xYYJTbLXyK4nw',
      backgroundImg: '/event__1.png'
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
                <CardActionArea 
                  href={event.eventLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{
                    backgroundImage: event.backgroundImg ? `url(${event.backgroundImg})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch'
                  }}
                >
                  <CardContent sx={{
                    background: event.backgroundImg ? 'transparent': 'rgba(255, 255, 255, 0.9)',
                    borderRadius: 1,
                    height: '100%',
                    flex: 1,
                    p: 3
                  }}>
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
                </CardActionArea>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                  <Button 
                    variant="outlined" 
                    href={event.eventLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    disabled={!event.registerable}
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </Button>
                </Box>
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
                <CardActionArea 
                  href={event.eventLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{
                    backgroundImage: event.backgroundImg ? `url(${event.backgroundImg})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch'
                  }}
                >
                  <CardContent sx={{
                    background: event.backgroundImg ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                    borderRadius: 1,
                    height: '100%',
                    flex: 1,
                    p: 3
                  }}>
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
                </CardActionArea>
                <Box sx={{ p: 2 }}>
                  <Button 
                    variant="outlined" 
                    href={event.eventLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  )
}

export default Events
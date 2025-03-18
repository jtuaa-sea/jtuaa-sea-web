import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'

function Gallery() {
  const { t } = useTranslation()

  // Sample gallery items - replace with actual data
  const galleryItems = [
    {
      id: 1,
      title: 'Annual Gathering 2023',
      image: '/images/placeholder.jpg',
      description: 'Members gathering at the annual meeting'
    },
    {
      id: 2,
      title: 'Tech Talk Series',
      image: '/images/placeholder.jpg',
      description: 'Knowledge sharing session'
    },
    {
      id: 3,
      title: 'Summer Picnic',
      image: '/images/placeholder.jpg',
      description: 'Community outdoor event'
    }
  ]

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('nav.gallery')}
      </Typography>

      <Grid container spacing={4}>
        {galleryItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
                sx={{
                  backgroundColor: 'grey.300'
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Gallery
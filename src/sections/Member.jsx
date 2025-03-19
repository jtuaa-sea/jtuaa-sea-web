import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
//   CardMedia,
  Box
} from '@mui/material'

const boardMembers = [
  {
    id: 1,
    name: '程潜',
    nameZh: '程潜',
    role: 'President',
    roleZh: '会长',
    // bio: 'Class of 2010, Computer Science',
    // bioZh: '2010级计算机科学',
    // image: 'https://via.placeholder.com/300x400'
  },
  {
    id: 2,
    name: '谢晋',
    nameZh: '谢晋',
    role: 'Vice President',
    roleZh: '副会长',
    // bio: 'Class of 2012, Electrical Engineering',
    // bioZh: '2012级电气工程',
    // image: 'https://via.placeholder.com/300x400'
  },
  {
    id: 3,
    name: '张哲慧',
    nameZh: '张哲慧',
    role: 'Secretary',
    roleZh: '秘书长',
    // bio: 'Class of 2015, Business Administration',
    // bioZh: '2015级工商管理',
    // image: 'https://via.placeholder.com/300x400'
  },
  {
    id: 4,
    name: '郑亚娟 Wendy',
    nameZh: '郑亚娟 Wendy',
    role: 'Treasurer',
    roleZh: '财长',
    // bio: 'Class of 2014, Finance',
    // bioZh: '2014级金融',
    // image: 'https://via.placeholder.com/300x400'
  },
  {
    id: 5,
    name: '朱允文',
    nameZh: '朱允文',
    role: 'Media Director',
    roleZh: '媒体总监',
    // bio: 'Class of 2016, Marketing',
    // bioZh: '2016级市场营销',
    // image: 'https://via.placeholder.com/300x400'
  },
  {
    id: 6,
    name: '胡瑶',
    nameZh: '胡瑶',
    role: 'PR Director',
    roleZh: '外联总监',
    // bio: 'Class of 2013, Communications',
    // bioZh: '2013级传播学',
    // image: 'https://via.placeholder.com/300x400'
  },
  {
    id: 7,
    name: '应倩',
    nameZh: '应倩',
    role: 'Board Member',
    roleZh: 'Board Member',
    // bio: 'Class of 2011, Software Engineering',
    // bioZh: '2011级软件工程',
    // image: 'https://via.placeholder.com/300x400'
  },
  {
    id: 8,
    name: '李明',
    nameZh: '李明',
    role: 'Board Member',
    roleZh: 'Board Member',
    // bio: 'Class of 2011, Software Engineering',
    // bioZh: '2011级软件工程',
    // image: 'https://via.placeholder.com/300x400'
  },
  {
    id: 9,
    name: '程健',
    nameZh: '程健',
    role: 'Board Member',
    roleZh: 'Board Member',
    // bio: 'Class of 2011, Software Engineering',
    // bioZh: '2011级软件工程',
    // image: 'https://via.placeholder.com/300x400'
  },
  {
    id: 10,
    name: '李俊霖',
    nameZh: '李俊霖',
    role: 'Board Member',
    roleZh: 'Board Member',
    // bio: 'Class of 2011, Software Engineering',
    // bioZh: '2011级软件工程',
    // image: 'https://via.placeholder.com/300x400'
  },
  {
    id: 11,
    name: '赵景浩',
    nameZh: '赵景浩',
    role: 'Board Member',
    roleZh: 'Board Member',
    // bio: 'Class of 2011, Software Engineering',
    // bioZh: '2011级软件工程',
    // image: 'https://via.placeholder.com/300x400'
  },
  {
    id: 12,
    name: '李陶然',
    nameZh: '李陶然',
    role: 'Board Member',
    roleZh: 'Board Member',
    // bio: 'Class of 2011, Software Engineering',
    // bioZh: '2011级软件工程',
    // image: 'https://via.placeholder.com/300x400'
  },  
]

function Member() {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === 'en'

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom align="center">
        {t('member.title')}
      </Typography>
      
      <Box sx={{ overflow: 'auto', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <Grid container spacing={6} sx={{ flexWrap: 'nowrap', pb: 2 }} justifyContent="flex-start">
          {boardMembers.map((member) => (
            <Grid item key={member.id} xs={12} sm={6} md={3} sx={{ minWidth: { xs: '100%', sm: '50%', md: '25%' }, px: 2 }}>
              <Card sx={{
                height: '498px',
                width: '100%',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                }
              }}>
                {/* <CardMedia
                  component="img"
                  height="398px"
                  image={member.image}
                  alt={isEnglish ? member.name : member.nameZh}
                  sx={{ objectFit: 'cover' }}
                /> */}
                <CardContent sx={{ flexGrow: 0, height: '100px' }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {isEnglish ? member.name : member.nameZh}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {isEnglish ? member.role : member.roleZh}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {isEnglish ? member.bio : member.bioZh}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Member
import { Box, Typography, styled } from '@mui/material'
import Button from 'components/Button/Button'
import React from 'react'
import theme from 'theme'
import section1Bg from 'assets/home/desktop/create-and-share.jpg';
import section2Bg from 'assets/home/desktop/beautiful-stories.jpg';
import section3Bg from 'assets/home/desktop/designed-for-everyone.jpg'
import {ReactComponent as ArrowIcon} from 'assets/shared/desktop/arrow.svg';
import './Home.css'

const TextBlock = styled(Box,{
  shouldForwardProp: (prop)=> prop !== 'invertColors',
})(({ invertColors, theme }) => ({
  minWidth: 610,
  height: '100%',
  backgroundColor: invertColors ? theme.palette.black : theme.palette.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexBasis: '40%',
  flexGrow: 1
}));

const ImageBlock = styled(Box)(({ theme }) => ({
  objectFit: 'cover', 
  flexBasis: '60%', 
  flexShrink: 1, 
  width: '50%', 
  overflow: 'hidden', 
  maxWidth: 830
}));

const TextBlockHeader = styled(Typography,{
  shouldForwardProp: (prop)=> prop !== 'invertColors',
})(({ invertColors, theme }) => ({
  textTransform: 'uppercase',
  color: invertColors ? theme.palette.white : theme.palette.black
}));

const TextBlockBody = styled(Typography)(({ theme }) => ({
  marginTop: '21px', color: theme.palette.darkgrey
}));

const TextBlockActions = styled(Box)(({ theme }) => ({
  marginTop: '44px', display: 'flex', alignItems: 'center'
}));


const sections = [
  {
    className: 'section1',
    header: 'Create and share your photo Stories.',
    body: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    actionText: 'Get an invite',
    invertColors: true,
    image: section1Bg
  },
  {
    className: 'section2',
    header: 'Beautiful stories every time',
    body: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
    actionText: 'View the stories',
    invertColors: false,
    image: section2Bg
  },
  {
    className: 'section3',
    header: 'Create and share your photo Stories.',
    body: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    actionText: 'View the stories',
    invertColors: false,
    image: section3Bg
  },
]

function Home() {
  return (
    <>
      {sections.map(s => 
        <Box className={s.className} key={s.className}>
          <TextBlock invertColors={s.invertColors}>
            <Box className='text-block'>
              {s.className === 'section1' && <Box sx={{position: 'absolute', width: 6, height: '100%', background: theme.palette.gradient}}/>}
              <Box className='text-block-text'>
                <TextBlockHeader variant='h1' invertColors={s.invertColors}>{s.header}</TextBlockHeader>
                <TextBlockBody variant='body' component='p'>{s.body}</TextBlockBody>
                <TextBlockActions>
                  <Button variant='underlined' invertColors={s.invertColors}>{s.actionText}</Button>
                  <Box sx={{'& g':{stroke: s.invertColors ? '#fff' : '#000'}, ml: '18px' }}><ArrowIcon/></Box>
                </TextBlockActions>
              </Box>
            </Box>
          </TextBlock>
          <ImageBlock component='img' src={s.image} alt="background image"/>
        </Box>
      )}
        
      <Box 
        sx={{
          height: 500,
          display: 'flex',
        }}
        className='section4'
      >

      </Box>
     

      

      

      

      View the stories

      The Mountains
      by John Appleseed
      Read Story

      Sunset Cityscapes
      by Benjamin Cruz
      Read Story

      18 Days Voyage
      by Alexei Borodin
      Read Story

      Architecturals
      by Samantha Brooke
      Read Story

      100% Responsive

      No matter which the device you’re on, our site is fully responsive and stories 
      look beautiful on any screen.

      No Photo Upload Limit

      Our tool has no limits on uploads or bandwidth. Freely upload in bulk and 
      share all of your stories in one go.

      Available to Embed

      Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, 
      Google Maps, and more. 

      Home
      Stories
      Features
      Pricing

      Get an invite

      Copyright 2019. All Rights Reserved
    </>
  )
}

export default Home
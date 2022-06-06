import { Box, Typography } from '@mui/material'
import Button from 'components/Button/Button'
import React from 'react'
import theme from 'theme'
import jumbotronBg from 'assets/home/desktop/create-and-share.jpg';
import {ReactComponent as ArrowIcon} from 'assets/shared/desktop/arrow.svg';

function Home() {
  return (
    <>
      <Box 
        sx={{
          height: 650,
          display: 'flex'
        }}
      >
        <Box 
          sx={{
            minWidth: 610,
            height: '100%',
            bgcolor: theme.palette.black,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexBasis: '40%',
            flexGrow: 1
          }}
        >
          <Box sx={{position: 'relative'}}>
            <Box sx={{position: 'absolute', width: 6, height: '100%', background: `linear-gradient(0deg, ${theme.palette.a1} 0%, ${theme.palette.a2} 50%, ${theme.palette.a3} 100%)`}}/>
            <Box sx={{mx: '112px'}}>
              <Typography variant='h1' sx={{color: theme.palette.white, textTransform: 'uppercase'}}>Create and share your photo Stories.</Typography>
              <Typography variant='body' sx={{mt: '21px', color: theme.palette.grey}} component='p'>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</Typography>
              <Box sx={{mt: '44px', display: 'flex', alignItems: 'center'}}>
                <Button variant='underlined' invertColors>get an invite</Button>
                <Box sx={{'& g':{stroke:'#fff'}, ml: '18px' }}><ArrowIcon/></Box>
              </Box>
              
            </Box>
          </Box>
        </Box>

        <Box component='img' src={jumbotronBg} alt="background image" sx={{objectFit: 'cover', flexBasis: '60%', flexShrink: 1, width: '50%', overflow: 'hidden', maxWidth: 830}}/>
        
      </Box>

      

      Beautiful stories every time
      
      We provide design templates to ensure your stories look terrific. Easily add 
      photos, text, embed maps and media from other networks. Then share your story 
      with everyone.

      View the stories

      Designed for everyone

      Photosnap can help you create stories that resonate with your audience.  Our 
      tool is designed for photographers of all levels, brands, businesses you name it. 

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
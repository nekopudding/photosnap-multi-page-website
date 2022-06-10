import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowButton from './Button/ArrowButton'
import { SectionGradientBar } from './HeaderSection'
import betaBg from 'assets/shared/desktop/bg-beta.jpg'
import theme from 'theme'

function BetaSection() {
  return (
    <Box sx={{
      position: 'relative',
    }}>
      <SectionGradientBar/>
      <Box component='img' src={betaBg} sx={{
        position: 'absolute',
        objectFit: 'cover', 
        zIndex: -1, 
        width: '100%', height: '100%', left: 0, top: 0
      }}/>
      <Box sx={{
        px: {laptop: '165px', tablet: '40px', mobile: '32px'}, 
        height: '100%', 
        py: {mobile: '64px', tablet: '68px'},
        display: 'flex', alignItems: {tablet: 'center', mobile: 'start'}, 
        '& *': {color: 'white !important', stroke: 'white'},
        flexDirection: {tablet: 'row', mobile: 'column'},
      }}>
        <Typography variant='h1' sx={{
          textTransform: 'uppercase', 
          display: 'inline-block',
          width: 400,
          [theme.breakpoints.down('tablet')]: {...theme.typography.mobileH1, width: 'auto'},
        }}>We're in Beta. Get your invite today!</Typography>
        <Box sx={{flexGrow: 1}}/>
        
        <ArrowButton sx={{mt: {tablet: 0, mobile: 3} }}>Get an invite</ArrowButton>
      </Box>
      
    </Box>
  )
}

export default BetaSection
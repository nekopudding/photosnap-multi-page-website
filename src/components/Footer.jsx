import { Box,Stack, Typography } from '@mui/material'
import React from 'react'
import theme from 'theme'
import {ReactComponent as Logo } from 'assets/shared/desktop/logo.svg'
import {ReactComponent as Facebook } from 'assets/shared/desktop/facebook.svg'
import {ReactComponent as Youtube } from 'assets/shared/desktop/youtube.svg'
import {ReactComponent as Twitter } from 'assets/shared/desktop/twitter.svg'
import {ReactComponent as Pinterest } from 'assets/shared/desktop/pinterest.svg'
import {ReactComponent as Instagram } from 'assets/shared/desktop/instagram.svg'
import {ReactComponent as ArrowIcon} from 'assets/shared/desktop/arrow.svg';

import Button from './Button/Button'
import ArrowButton from './Button/ArrowButton'

const icons = [
  () => <Facebook/>,
  () => <Youtube/>,
  () => <Twitter/>,
  () => <Pinterest/>,
  () => <Instagram/>,
]
const pages = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Stories',
    to: '/stories',
  },
  {
    name:'Features',
    to: '/features',
  },
  {
    name: 'Pricing',
    to: '/pricing'
  },
]
const baseRoute = 'photosnap-multi-page-website'

function Footer(props) {
  const {windowW} = props;
  
  return (
    <>
    {windowW > theme.breakpoints.values.tablet &&
      <Box sx={{py: {tablet: 8}, px: {laptop: '171px', tablet: 5, mobile:4}, display: 'flex', alignItems: 'center', bgcolor: theme.palette.black}}>
        <Box sx={{display: 'flex', height: {tablet: 156, laptop: 122}, flexGrow: 1}}>
          <Stack sx={{'& .logo-white path:first-of-type': {fill: theme.palette.white} }}>
            <Box sx={{flexGrow: {laptop: 1, tablet: 0}}}><Logo className='logo-white'/></Box>
            {windowW <= theme.breakpoints.values.laptop && 
              <Box sx={{mt: 4, flexGrow: 1, '& > * + *': {ml: '26px'} }}>
                {pages.map(({name,to}) => 
                  <Button variant='text' invertColors key={name} link to={baseRoute + to}>{name}</Button>
                )}
              </Box>
              }
            <Box sx={{width: 154, display:'flex', justifyContent: 'space-between', mt: 9}}>
              {icons.map(icon => 
              <React.Fragment key={icon.toString()}>
                <Box sx={{
                  display: 'flex', alignItems:'center',
                  '&:not(:hover) path': {
                    fill: theme.palette.white
                  },
                }}>
                  {icon()}
                </Box>  
              </React.Fragment>)}
            </Box>
          </Stack>
          {windowW > theme.breakpoints.values.laptop &&
            <Stack sx={{ml: '109px', justifyContent: 'space-between'}}>
              {pages.map(({name,to}) => 
                <Button variant='text' invertColors key={name} link to={baseRoute + to}>{name}</Button>
              )}
            </Stack>
          }
          <Box sx={{flexGrow: 1}}/>
          
          <Stack sx={{justifyContent: 'space-between', alignItems: 'end'}}>
            <Box sx={{display: 'flex',alignItems: 'center', '&:hover *': { textDecoration: 'underline' }}}>
              <Button variant='underlined' invertColors>Get an invite</Button>
              <Box sx={{'& g':{stroke: '#fff' }, ml: '18px', display: 'flex', alignItems: 'center' }}><ArrowIcon/></Box>
            </Box>
            <Typography sx={{color: theme.palette.grey, opacity: 0.525}}>Copyright 2022. All Rights Reserved</Typography>
          </Stack>
        </Box>
      </Box>
    }
    
    {windowW <= theme.breakpoints.values.tablet &&
      <Stack sx={{py: 7, px: 4, alignItems: 'center', bgcolor: theme.palette.black}}>
        <Box sx={{flexGrow: {laptop: 1, tablet: 0},'& .logo-white path:first-of-type': {fill: theme.palette.white}}}><Logo className='logo-white'/></Box>
        <Box sx={{mt: 4, width: 154, display:'flex', justifyContent: 'space-between'}}>
          {icons.map(icon => 
          <React.Fragment key={icon.toString()}>
            <Box sx={{
              display: 'flex', alignItems:'center',
              '&:not(:hover) path': {
                fill: theme.palette.white
              },
            }}>
              {icon()}
            </Box>  
          </React.Fragment>)}
        </Box>
        <Stack sx={{mt: 6, alignItems:'center'}} spacing={2.5}>
          {pages.map(({name,to}) => 
            <Button variant='text' invertColors key={name} link to={baseRoute + to}>{name}</Button>
          )}
        </Stack>      
        <ArrowButton sx={{mt: 15}} invertColors>Get an Invite</ArrowButton>
        <Typography sx={{mt: 4.25, color: theme.palette.grey, opacity: 0.525}}>Copyright 2022. All Rights Reserved</Typography>
      </Stack>
    }
    </>
  )
}

export default Footer
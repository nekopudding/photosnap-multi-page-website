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

function Footer() {
  return (
    <>
    <Box sx={{height: 250, display: 'flex', alignItems: 'center', bgcolor: theme.palette.black}}>
      <Box sx={{display: 'flex', height: 122, flexGrow: 1, mx: '171px'}}>
        <Stack sx={{justifyContent: 'space-between', '& .logo-white path:first-of-type': {fill: theme.palette.white} }}>
          <Logo className='logo-white'/>
          <Box sx={{width: 154, display:'flex', justifyContent: 'space-between'}}>
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
        <Stack sx={{ml: '109px', flexGrow: 1, justifyContent: 'space-between'}}>
          {pages.map(({name,to}) => 
            <Button variant='text' invertColors key={name} link to={baseRoute + to}>{name}</Button>
          )}
        </Stack>
        <Stack sx={{justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex','&:hover *': { textDecoration: 'underline' }}}>
            <Button variant='underlined' invertColors>Get an invite</Button>
            <Box sx={{'& g':{stroke: '#fff' }, ml: '18px' }}><ArrowIcon/></Box>
          </Box>
          <Typography sx={{color: theme.palette.grey, opacity: 0.525}}>Copyright 2022. All Rights Reserved</Typography>
        </Stack>

      </Box>
    </Box>
    </>
  )
}

export default Footer
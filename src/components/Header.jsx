import { AppBar, Toolbar,Container,Box,IconButton, Typography, } from '@mui/material'
import {ReactComponent as Logo } from 'assets/shared/desktop/logo.svg'
import React from 'react'
import theme from 'theme'
import Button from './Button/Button'

const pages = [
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

function Header() {
  return (
    <>
      <AppBar position="fixed" sx={{bgcolor: theme.palette.white, boxShadow: 'none'}}>
        <Toolbar disableGutters sx={{height: 72, px: {laptop: '165px', tablet: 5, mobile: 3} }}>
          <Logo/>
          <Box 
            sx={{ 
              display: 'flex', 
              textTransform: 'uppercase', 
              mx: 'auto', 
              '& > * + *': {
                ml: '37px',
              }
            }}
          >
            {pages.map(({name,to}) => (
              <Button key={name} variant='text' link to={baseRoute + to}>
                {name}
              </Button>
            ))}
          </Box>
          <Box>
            <Button variant='contained'>Get an Invite</Button>
          </Box>
        </Toolbar>
    </AppBar>
    <Box sx={{height: 72}}/>
    </>
  )
}

export default Header
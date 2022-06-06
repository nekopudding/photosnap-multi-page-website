import { AppBar, Toolbar,Container,Box,IconButton, Typography, } from '@mui/material'
import {ReactComponent as Logo } from 'assets/shared/desktop/logo.svg'
import React from 'react'
import theme from 'theme'
import Button from './Button/Button'

const pages = [
  'Stories','Features','Pricing'
]
function Header() {
  return (
    <>
      <AppBar position="fixed" sx={{bgcolor: theme.palette.white, boxShadow: 'none'}}>
        <Toolbar disableGutters sx={{height: 72, px: '165px'}}>
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
            {pages.map((page) => (
              <Button key={page} variant='text'>
                {page}
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
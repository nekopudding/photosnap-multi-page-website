import { AppBar, Toolbar,Container,Box,IconButton, Typography, Modal, Stack, Divider } from '@mui/material'
import {ReactComponent as Logo } from 'assets/shared/desktop/logo.svg'
import React, {useState} from 'react'
import theme from 'theme'
import Button from './Button/Button'
import {ReactComponent as MenuIcon} from 'assets/shared/mobile/menu.svg'
import {ReactComponent as CloseIcon} from 'assets/shared/mobile/close.svg'


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

function Header(props) {
  const {windowW} = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed" sx={{bgcolor: theme.palette.white, boxShadow: 'none'}}>
        <Toolbar disableGutters sx={{height: 72, px: {laptop: '165px', tablet: 5, mobile: 3} }}>
          <Logo/>
          <Box 
            sx={{ 
              display: {tablet: 'flex', mobile: 'none'}, 
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
          <Box sx={{ml: 'auto'}}>
            {windowW > theme.breakpoints.values.tablet ? 
              <Button variant='contained'>Get an Invite</Button>
              :
              <IconButton sx={{borderRadius: 0, width: 36, height: 36, '&:hover': {bgcolor: 'transparent'}}} onClick={()=>setOpen(!open)}>
                {open ? <CloseIcon/> :<MenuIcon/>}
              </IconButton>
            }
          </Box>
        </Toolbar>
        <Modal
          open={open}
          aria-labelledby="modal-menu"
          aria-describedby="header menu"
          sx={{zIndex: 1000}}
        >
          <Stack sx={{p:4, textAlign: 'center', '& > *+*': {mt: '20px !important'},position: 'absolute', top: 72, width: '100%',bgcolor: theme.palette.white}}>
            {pages.map(({name,to}) => (
              <Button key={name} variant='text' link to={baseRoute + to} typography='mobileLinks' onClick={()=>setOpen(false)}>
                {name}
              </Button>
            ))}
            <Divider sx={{borderColor: theme.palette.black, opacity: 0.25}}/>
            <Button variant='contained' sx={{width: 'auto'}} onClick={()=>setOpen(false)}>Get an Invite</Button>
          </Stack>
        </Modal>
    </AppBar>
    <Box sx={{height: 72}}/>
    
    </>
  )
}

export default Header
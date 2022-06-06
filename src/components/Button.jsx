import { Box, Typography} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import theme from 'theme';

function Button(props) {
  const {sx,children,variant, invertColors, to, link} = props;

  return (
    <>
    {(variant === 'contained') &&
      <Box sx={{
        bgcolor: invertColors ? theme.palette.white : theme.palette.black,
        display: 'inline-flex',
        width: 158,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        '& *': {
          textDecoration: 'none',
          color: invertColors ? theme.palette.black : theme.palette.white,
          textTransform: 'uppercase',
        },
        '&:hover *, &:hover': {
          color: theme.palette.black,
          bgcolor: theme.palette.grey
        },
        ...sx
      }}>
        {link ? 
          <Link to={to}>
            <Typography variant='h4' children={children}/>
          </Link>
          :
          <Typography variant='h4' children={children}/>
        }
      </Box>
    }


    {(variant === 'text') &&
      <Box sx={{
        display: 'inline-block',
        '& *': {
          color: invertColors ? theme.palette.white : theme.palette.black,
          textTransform: 'uppercase',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          }
        },
        ...sx
      }}>
        {link ? 
          <Link to={to}>
            <Typography variant='h4' children={children}/>
          </Link>
          :
          <Typography variant='h4' children={children}/>
        }
      </Box>
    }
    
    </>
  )
}

Button.defaultProps = {
  to: '/',
  variant: 'contained',
  link: false,
  invertColors: false
}

export default Button
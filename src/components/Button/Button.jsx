import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import {ContainedButton, TextButton} from  './Button.styles.jsx'


function Button(props) {
  const {children,variant,to, link} = props;
  return (
    <>
    {(variant === 'contained') &&
      <ContainedButton {...props}>
        {link ? 
          <Link to={to}>
            <Typography variant='h4' children={children}/>
          </Link>
          :
          <Typography variant='h4' children={children}/>
        }
      </ContainedButton>
    }

    {(variant === 'text') &&
      <TextButton {...props}>
        {link ? 
          <Link to={to}>
            <Typography variant='h4' children={children}/>
          </Link>
          :
          <Typography variant='h4' children={children}/>
        }
      </TextButton>
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
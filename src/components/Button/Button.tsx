import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import {ContainedButton, TextButton,UnderlinedButton} from  './Button.styles'

const Button: React.FC<{
  children: string, 
  variant: string, 
  to: string, 
  link: boolean, 
  invertColors: boolean
}> = (props) => {
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

    {(variant === 'underlined') &&
      <UnderlinedButton {...props}>
        {link ? 
          <Link to={to}>
            <Typography variant='h4' children={children}/>
          </Link>
          :
          <Typography variant='h4' children={children}/>
        }
      </UnderlinedButton>
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

export default Button;
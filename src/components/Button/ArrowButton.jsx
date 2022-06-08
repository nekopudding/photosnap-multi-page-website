import React from 'react'
import theme from 'theme';
import Button from './Button'
import { Box  } from '@mui/material'
import {ReactComponent as ArrowIcon} from 'assets/shared/desktop/arrow.svg';

function ArrowButton(props) {
  const {invertColors, children, sx} = props;
  return (
    <>
      <Box {...props} sx={{display: 'flex',alignItems: 'center', '&:hover *': { textDecoration: 'underline' }, width: 'fit-content',...sx}}>
        <Button variant='underlined' invertColors={invertColors} children={children}/>
        <Box className="ArrowButton-arrow" sx={{'& g':{stroke: invertColors ? theme.palette.white : theme.palette.black}, ml: '18px', display: 'flex' }}><ArrowIcon/></Box>
      </Box>
    </>
  )
}

export default ArrowButton
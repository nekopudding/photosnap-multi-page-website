import { Switch,Box, Typography } from '@mui/material'
import React from 'react'
import theme from 'theme'

function PlanToggle(props) {
  const {isYearly,setIsYearly, sx} = props;
  return (
    <Box sx={{ 
      width: 255, 
      display: 'flex', 
      alignItems: 'center', 
      '& > * + *': {
        ml: '32px !important'
      },
      ...sx
    }}>
      <Typography variant='h3' sx={{opacity: isYearly ? 0.5 : 1}}>Monthly</Typography>
      <Switch 
        checked={isYearly}
        onChange={()=>setIsYearly(!isYearly)}
        aria-label="toggle yearly/monthly plan"
        sx={{
          p: 0, 
          height: 32,
          width: 64,
          borderRadius: '16px',
          bgcolor: isYearly ? (theme.palette.black + " !important") : (theme.palette.grey  + " !important"),
          "& > .MuiSwitch-switchBase": {
            p: '4px',
            display: 'flex',
            alignItems: 'center'
          },
          "& .Mui-checked": {
            transform: 'translateX(32px)',
          },
          "& .MuiSwitch-thumb": {
            width: '24px',
            height: '24px',
            color: isYearly ? (theme.palette.white + " !important") : (theme.palette.black  + " !important"),
          },
          "& .MuiSwitch-input": {
            height: '32px',
            width: "96px",
            left: '-32px',
          },
          '& .MuiSwitch-track': {
            bgcolor: 'transparent !important'
          }
        }}
      />
      <Typography variant='h3' sx={{opacity: isYearly ? 1 : 0.5}}>Yearly</Typography>
    </Box>
  )
}

export default PlanToggle
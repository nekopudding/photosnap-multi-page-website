import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

function FeatureCard({title,content,icon}) {
  return (
   <>
    <Stack key={title} sx={{
          gridColumn: {laptop: 'span 4', mobile: 'span 12'},
          alignItems: 'center',justifyContent:'flex-end'}}>
      <Box sx={{flexGrow: 1, display:'flex',alignItems:'center'}}>{icon()}</Box>
      <Typography variant='h3' sx={{mt: 6}}>{title}</Typography>
      <Typography variant='body' sx={{mt: 2, textAlign: 'center'}}>{content}</Typography>
    </Stack>
   </>
  )
}

export default FeatureCard
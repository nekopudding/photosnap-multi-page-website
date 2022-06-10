import React from 'react'
import { Box, Typography, styled, Divider, Stack } from '@mui/material'
import {ReactComponent as ArrowIcon} from 'assets/shared/desktop/arrow.svg';
import theme from 'theme';


function Card(props) {
  const {title,author,image, date} = props;
    return (
      <Box
        {...props}
        sx={{ 
          gridColumn: {laptop: 'span 3', tablet: 'span 6', mobile: 'span 12'},
          height: 500, 
          flexGrow: 1, display: 'flex', 
          position: 'relative',
          transition: 'transform 0.4s cubic-bezier(.23,.09,.33,.88)',
          '&:hover': {
            transform: 'translateY(-24px)',
          },
          '&:hover .hover-border': {
            background: theme.palette.horizontalGradient,
            height: 6
          },
          ...props.sx
        }}
      >
        <Box component='img' src={image} alt={title} sx={{position: 'absolute', objectFit: 'cover',  width: '100%', height: '100%'}}/>
        <Box 
          sx={{
            position: 'absolute', 
            bottom: 0, 
            height: 350, 
            width: '100%', 
            background: `linear-gradient(${theme.palette.gradientBW})`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: 5,
            '& *': {
              color: theme.palette.white,
              stroke: theme.palette.white,
            },
          }}
        >
          {date && <Typography sx={{fontSize: 13, mt: '4px'}}>{date}</Typography>}
          <Typography variant='h3' sx={{mt: '4px'}}>{title}</Typography>
          <Typography sx={{fontSize: 13, mt: '4px'}}>by {author}</Typography>
          <Divider sx={{mt: 2, borderColor: theme.palette.white, opacity: 0.25}}/>
          <Box sx={{display: 'flex', justifyContent: 'space-between',mt: 2.5}}>
            <Typography variant='h4' sx={{textTransform: 'uppercase'}}>Read Story</Typography>
            <ArrowIcon/>
          </Box>
        </Box>
        <Box className='hover-border'
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}
        />
      </Box>
    )
}

export default Card
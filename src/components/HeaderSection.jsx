import { Box,Typography,styled } from '@mui/material'
import React from 'react'
import theme from 'theme';
import ArrowButton from './Button/ArrowButton';

const TextBlock = styled(Box,{
  shouldForwardProp: (prop)=> prop !== 'invertColors',
})(({ invertColors, theme }) => ({
  height: '100%',
  backgroundColor: invertColors ? theme.palette.black : theme.palette.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexBasis: '40%',
  flexGrow: 1
}));

const ImageBlock = styled(Box)(({ theme }) => ({
  objectFit: 'cover', 
  flexBasis: '60%', 
  flexShrink: 1, 
  width: '50%', 
  overflow: 'hidden', 
  [theme.breakpoints.down('tablet')]: {
    width: '100%',
    height: '271px',
    flexBasis:'auto'
  }
}));

export const SectionGradientBar = styled(Box)(({ theme }) => ({
  position: 'absolute', width: 6, height: '100%', 
  background: theme.palette.verticalGradient,
  [theme.breakpoints.down('tablet')]:{
    top: 0,
    height: 6,
    width: 128,
    marginLeft: '33px',
    background: theme.palette.horizontalGradient,
  }
}));

const TextBlockContent = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  width: '387px',
  [theme.breakpoints.down('tablet')]: {
    width: 'auto',
    height: 'auto',
    margin: '72px 24px 72px 33px'
  }
}));

const TextBlockHeader = styled(Typography,{
  shouldForwardProp: (prop)=> prop !== 'invertColors',
})(({ invertColors, theme }) => ({
  textTransform: 'uppercase',
  color: invertColors ? theme.palette.white : theme.palette.black
}));

const TextBlockBody = styled(Typography,{
  shouldForwardProp: (prop)=> prop !== 'invertColors',
})(({ invertColors, theme }) => ({
  marginTop: '21px',
  color: invertColors ? theme.palette.white : theme.palette.black,
  [theme.breakpoints.down('tablet')]: {
    marginTop: '16px'
  }
}));

function HeaderSection({sx, header,body,actionText,invertColors,image,id}) {
  return (
    <>
      <Box sx={{ ...sx, display: 'flex', [theme.breakpoints.down('tablet')]: {height: 'auto', flexDirection: 'column-reverse'} }}>
          <TextBlock invertColors={invertColors} 
            sx={{
              minWidth: {laptop: '610px', tablet: '495px', mobile: 'auto'},
              position: 'relative'
            }}>
            <Box sx={{width: '100%', position: {tablet: 'relative',mobile: 'static'}}}>
              {id === 1 && <SectionGradientBar/>}
              <TextBlockContent>
                <TextBlockHeader variant='h1' invertColors={invertColors} sx={{
                  [theme.breakpoints.down('tablet')]: theme.typography.mobileH1
                }}>{header}</TextBlockHeader>
                <TextBlockBody variant='body' invertColors={invertColors} component='p'>{body}</TextBlockBody>
                {actionText && <ArrowButton invertColors={invertColors} sx={{mt:{tablet: 5.5, mobile: 3}}}>{actionText}</ArrowButton>}
              </TextBlockContent>
            </Box>
          </TextBlock>
          <ImageBlock component='img' src={image} alt="background image" sx={{
            [theme.breakpoints.down('tablet')]: {
              ...(id === 1 && {
                height: 294,
              })
            }
          }}/>
        </Box>
    </>
  )
}

export default HeaderSection
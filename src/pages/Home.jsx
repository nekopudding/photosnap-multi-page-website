import { Box, Typography, styled, Divider, Stack } from '@mui/material'
import React from 'react'
import theme from 'theme'
import createAndShare from 'assets/home/desktop/create-and-share.jpg';
import beautifulStories from 'assets/home/desktop/beautiful-stories.jpg';
import designedForEveryone from 'assets/home/desktop/designed-for-everyone.jpg'
import theMountains from 'assets/stories/desktop/mountains.jpg'
import sunsetCityscapes from 'assets/stories/desktop/cityscapes.jpg'
import eighteenDaysVoyage from 'assets/stories/desktop/18-days-voyage.jpg'
import architecturals from 'assets/stories/desktop/architecturals.jpg'
import {ReactComponent as ArrowIcon} from 'assets/shared/desktop/arrow.svg';
import {ReactComponent as Responsive} from 'assets/features/desktop/responsive.svg';
import {ReactComponent as NoLimit} from 'assets/features/desktop/no-limit.svg';
import {ReactComponent as Embed} from 'assets/features/desktop/embed.svg';
import ArrowButton from 'components/Button/ArrowButton';
import Card from 'components/Card/Card';

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

const SectionGradientBar = styled(Box)(({ theme }) => ({
  position: 'absolute', width: 6, height: '100%', 
  background: `linear-gradient(88deg, ${theme.palette.a1} -10%, ${theme.palette.a2} 30%, ${theme.palette.a3} 90%)`,
  [theme.breakpoints.down('tablet')]:{
    top: 0,
    height: 6,
    width: 128,
    marginLeft: '33px',
    background: `linear-gradient(3deg, ${theme.palette.a1} -10%, ${theme.palette.a2} 30%, ${theme.palette.a3} 90%)`,
  }
}));

const TextBlockContent = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  width: '387px',
  height: '304px',
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


const headerSections = [
  {
    id: 1,
    sx: {height: 650},
    header: 'Create and share your photo Stories.',
    body: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    actionText: 'Get an invite',
    invertColors: true,
    image: createAndShare
  },
  {
    id: 2,
    sx: {height: 600, flexDirection: 'row-reverse'},
    header: 'Beautiful stories every time',
    body: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
    actionText: 'View the stories',
    invertColors: false,
    image: beautifulStories
  },
  {
    id: 3,
    sx: {height: 600},
    header: 'Create and share your photo Stories.',
    body: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    actionText: 'View the stories',
    invertColors: false,
    image: designedForEveryone
  },
]

const stories = [
  {
    title: 'The Mountains',
    author: 'John Appleseed',
    image: theMountains
  },
  {
    title: 'Sunset Cityscapes',
    author: 'Benjamin Cruz',
    image: sunsetCityscapes
  },
  {
    title: '18 Days Voyage',
    author: 'Alexei Borodin',
    image: eighteenDaysVoyage
  },
  {
    title: 'Architecturals',
    author: 'Samantha Brooke',
    image: architecturals
  },
]

const features = [
  {
    icon: ()=><Responsive/>,
    title: '100% Responsive',
    content: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
  },
  {
    icon: ()=> <NoLimit/>,
    title: 'No Photo Upload Limit',
    content: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
  },
  {
    icon: ()=><Embed/>,
    title: 'Available to Embed',
    content: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
  },
]

function Home() {
  return (
    <>
      {headerSections.map(section => {
        const {sx, header,body,actionText,invertColors,image,id} = section;
        return (
          <Box key={id} sx={{ ...sx, display: 'flex', [theme.breakpoints.down('tablet')]: {height: 'auto', flexDirection: 'column-reverse'} }}>
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
                <ArrowButton invertColors={invertColors} sx={{mt:{tablet: 5.5, mobile: 3}}}>{actionText}</ArrowButton>
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
        )
      }
        
      )}
        
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
        {stories.map(story => <Card {...story} key={story.title}/>)}
      </Box>
      <Box sx={{
        display: 'flex',
        my: {tablet: '120px', mobile: 10},
        [theme.breakpoints.up('laptop')]: { mx: '165px', '& > * + *': { ml: '30px' }, },
        [theme.breakpoints.down('laptop')]: { 
          flexDirection: 'column', 
          '& > *': { width: {tablet: 457, mobile: 310}, mx: 'auto'},
          '& > * + *': { mt: 10 },
        }
      }}>
        {features.map(feature => {
          const {icon,title,content} = feature;
          return (
            <Stack key={title} sx={{alignItems: 'center',justifyContent:'flex-end'}}>
              <Box sx={{flexGrow: 1, display:'flex',alignItems:'center'}}>{icon()}</Box>
              <Typography variant='h3' sx={{mt: 6}}>{title}</Typography>
              <Typography variant='body' sx={{mt: 2, textAlign: 'center'}}>{content}</Typography>
            </Stack>
          )
        })}

      </Box>
    </>
  )
}

export default Home
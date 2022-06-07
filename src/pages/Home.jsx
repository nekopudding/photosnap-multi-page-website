import { Box, Typography, styled, Divider, Stack } from '@mui/material'
import Button from 'components/Button/Button'
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
import './Home.css'

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
  color: invertColors ? theme.palette.white : theme.palette.black
}));

export const TextBlockActions = styled(Box)(({ theme }) => ({
  marginTop: '44px', display: 'flex', alignItems: 'center',
  width: 'fit-content',
  '&:hover *': { textDecoration: 'underline' }
}));


const sections = [
  {
    className: 'section1',
    header: 'Create and share your photo Stories.',
    body: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    actionText: 'Get an invite',
    invertColors: true,
    image: createAndShare
  },
  {
    className: 'section2',
    header: 'Beautiful stories every time',
    body: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
    actionText: 'View the stories',
    invertColors: false,
    image: beautifulStories
  },
  {
    className: 'section3',
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
      {sections.map(section => {
        const {className, header,body,actionText,invertColors,image} = section;
        return (
          <Box className={className} key={className}>
          <TextBlock invertColors={invertColors} sx={{minWidth: {laptop: '610px', tablet: '495px', mobile: 'auto'},}}>
            <Box className='text-block'>
              {className === 'section1' && <Box sx={{position: 'absolute', width: 6, height: '100%', background: `linear-gradient(88deg, ${theme.palette.a1} -10%, ${theme.palette.a2} 30%, ${theme.palette.a3} 90%)`}}/>}
              <Box className='text-block-text'>
                <TextBlockHeader variant='h1' invertColors={invertColors}>{header}</TextBlockHeader>
                <TextBlockBody variant='body' invertColors={invertColors} component='p'>{body}</TextBlockBody>
                <TextBlockActions>
                  <Button variant='underlined' invertColors={invertColors}>{actionText}</Button>
                  <Box sx={{'& g':{stroke: invertColors ? '#fff' : '#000'}, ml: '18px', display: 'flex' }}><ArrowIcon/></Box>
                </TextBlockActions>
              </Box>
            </Box>
          </TextBlock>
          <ImageBlock component='img' src={image} alt="background image"/>
        </Box>
        )
      }
        
      )}
        
      <Box 
        display="grid" gridTemplateColumns="repeat(12, 1fr)"
        sx={{
        }}
        className='section4'
      >
        {stories.map(story => {
          const {title,author,image} = story;
          return (
            <Box
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
                  background: `linear-gradient(1deg, ${theme.palette.a1} 25%, ${theme.palette.a2} 50%, ${theme.palette.a3} 75%)`,
                  height: 6
                }
              }}
              key={title}
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
                <Typography variant='h3'>{title}</Typography>
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
        })}
      </Box>
      <Box sx={{
        display: 'flex',
        my: '120px',
        
        [theme.breakpoints.up('laptop')]: {
            mx: '165px',
          '& > * + *': {
            ml: '30px'
          },
        },
        [theme.breakpoints.down('laptop')]: {
          flexDirection: 'column',
          '& > *': {
            width: 457,
            mx: 'auto',
          },
          '& > * + *': {
            mt: 10
          },
        }
      }}>
        {features.map(feature => {
          const {icon,title,content} = feature;
          return (
            <Stack key={title} sx={{alignItems: 'center',justifyContent:'flex-end'}}>
              <Box sx={{flexGrow: 1, display:'flex',alignItems:'center'}}>{icon()}</Box>
              <Typography variant='h3' sx={{mt: 6}}>{title}</Typography>
              <Typography variant='body' sx={{mt: 2}}>{content}</Typography>
            </Stack>
          )
        })}

      </Box>
    </>
  )
}

export default Home
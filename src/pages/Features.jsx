import React from 'react'
import hero from 'assets/features/desktop/hero.jpg'
import betaBg from 'assets/shared/desktop/bg-beta.jpg'
import HeaderSection, { SectionGradientBar } from 'components/HeaderSection'
import {ReactComponent as Responsive} from 'assets/features/desktop/responsive.svg';
import {ReactComponent as NoLimit} from 'assets/features/desktop/no-limit.svg';
import {ReactComponent as Embed} from 'assets/features/desktop/embed.svg';
import {ReactComponent as CustomDomain} from 'assets/features/desktop/custom-domain.svg';
import {ReactComponent as BoostExposure} from 'assets/features/desktop/boost-exposure.svg';
import {ReactComponent as DragDrop} from 'assets/features/desktop/drag-drop.svg';
import { Box } from '@mui/system';
import theme from 'theme';
import FeatureCard from 'components/FeatureCard';
import { Typography } from '@mui/material';
import ArrowButton from 'components/Button/ArrowButton';

const heroSection =  {
  id: 1,
  sx: {height: 490},
  header: 'Features',
  body: 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
  invertColors: true,
  image: hero
}

const featuresList = [
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
  {
    icon: ()=><CustomDomain/>,
    title: 'Custom Domain',
    content: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
  },
  {
    icon: ()=><BoostExposure/>,
    title: 'Boost Your Exposure',
    content: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
  },
  {
    icon: ()=><BoostExposure/>,
    title: 'Drag & Drop Image',
    content: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
  },
]

function Features() {
  return (
    <>
      <HeaderSection {...heroSection}/>
      
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" sx={{
        py: {tablet: '120px', mobile: 10},
        gridRowGap: {laptop: '104px', tablet: '72px', mobile: '56px'},
        gridColumnGap: {laptop: '30px', tablet: '12px',mobile: '0px'},
        '& > *': {
          gridColumn: {laptop: 'span 4', tablet: 'span 6', mobile: 'span 12'},
          width: {tablet: 'auto', mobile: 310},
          mx: 'auto'
        },
        px: {laptop: '165px', tablet: '40px', mobile: '32px'},
      }}>
        {featuresList.map(feature => {
          const {icon,title,content} = feature;
          return (
            <FeatureCard {...feature} key={title}/>
          )
        })}
      </Box>
      <Box sx={{
        position: 'relative',
      }}>
        <SectionGradientBar/>
        <Box component='img' src={betaBg} sx={{
          position: 'absolute',
          objectFit: 'cover', 
          zIndex: -1, 
          width: '100%', height: '100%', left: 0, top: 0
        }}/>
        <Box sx={{
          px: {laptop: '165px', tablet: '40px', mobile: '32px'}, 
          height: '100%', 
          py: {mobile: '64px', tablet: '68px'},
          display: 'flex', alignItems: {tablet: 'center', mobile: 'start'}, 
          '& *': {color: 'white', stroke: 'white'},
          flexDirection: {tablet: 'row', mobile: 'column'},
        }}>
          <Typography variant='h1' sx={{
            textTransform: 'uppercase', 
            display: 'inline-block',
            width: 400,
            [theme.breakpoints.down('tablet')]: {...theme.typography.mobileH1, width: 'auto'},
          }}>We're in Beta. Get your invite today!</Typography>
          <Box sx={{flexGrow: 1}}/>
          
          <ArrowButton sx={{mt: {tablet: 0, mobile: 3} }}>Get an invite</ArrowButton>
        </Box>
        
      </Box>
    </>
  )
}

export default Features
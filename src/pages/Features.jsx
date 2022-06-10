import React from 'react'
import hero from 'assets/features/desktop/hero.jpg'
import HeaderSection, { SectionGradientBar } from 'components/HeaderSection'
import {ReactComponent as Responsive} from 'assets/features/desktop/responsive.svg';
import {ReactComponent as NoLimit} from 'assets/features/desktop/no-limit.svg';
import {ReactComponent as Embed} from 'assets/features/desktop/embed.svg';
import {ReactComponent as CustomDomain} from 'assets/features/desktop/custom-domain.svg';
import {ReactComponent as BoostExposure} from 'assets/features/desktop/boost-exposure.svg';
import {ReactComponent as DragDrop} from 'assets/features/desktop/drag-drop.svg';
import { Box } from '@mui/system';
import FeatureCard from 'components/FeatureCard';
import BetaSection from 'components/BetaSection';

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
          gridColumn: {laptop: 'span 4 !important', tablet: 'span 6 !important', mobile: 'span 12 !important'},
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
      <BetaSection/>
    </>
  )
}

export default Features
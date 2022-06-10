import { Box } from '@mui/material'
import React from 'react'
import theme from 'theme'
import createAndShare from 'assets/home/desktop/create-and-share.jpg';
import beautifulStories from 'assets/home/desktop/beautiful-stories.jpg';
import designedForEveryone from 'assets/home/desktop/designed-for-everyone.jpg'
import theMountains from 'assets/stories/desktop/mountains.jpg'
import sunsetCityscapes from 'assets/stories/desktop/cityscapes.jpg'
import eighteenDaysVoyage from 'assets/stories/desktop/18-days-voyage.jpg'
import architecturals from 'assets/stories/desktop/architecturals.jpg'
import {ReactComponent as Responsive} from 'assets/features/desktop/responsive.svg';
import {ReactComponent as NoLimit} from 'assets/features/desktop/no-limit.svg';
import {ReactComponent as Embed} from 'assets/features/desktop/embed.svg';
import Card from 'components/Card/Card';
import FeatureCard from '../components/FeatureCard';
import HeaderSection from 'components/HeaderSection';


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
      {headerSections.map(section =><HeaderSection key={section.id} {...section}/>)}
        
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
        {stories.map(story => <Card {...story} key={story.title}/>)}
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" sx={{
        my: {tablet: '120px', mobile: 10},
        gridRowGap: {tablet: '80px', mobile: '56px'},
        gridColumnGap: '30px',
        [theme.breakpoints.up('laptop')]: { mx: '165px', },
        [theme.breakpoints.down('laptop')]: { 
          '& > *': { width: {tablet: 457, mobile: 310}, mx: 'auto'},
        }
      }}>
        {features.map(feature => {
          const {icon,title,content} = feature;
          return (
            <FeatureCard {...feature} key={title}/>
          )
        })}

      </Box>
    </>
  )
}

export default Home
import { Box, Typography } from '@mui/material'
import Card from 'components/Card/Card'
import React, { useEffect, useState } from 'react'
import moonOfAppalacia from 'assets/stories/desktop/moon-of-appalacia.jpg'
import theMountains from 'assets/stories/desktop/mountains.jpg'
import sunsetCityscapes from 'assets/stories/desktop/cityscapes.jpg'
import eighteenDaysVoyage from 'assets/stories/desktop/18-days-voyage.jpg'
import architecturals from 'assets/stories/desktop/architecturals.jpg'

import behindTheWaves from 'assets/stories/desktop/behind-the-waves.jpg'
import calmWaters from 'assets/stories/desktop/calm-waters.jpg'
import darkForest from 'assets/stories/desktop/dark-forest.jpg'
import kingOfAfrica from 'assets/stories/desktop/king-on-africa.jpg'
import landOfDreams from 'assets/stories/desktop/land-of-dreams.jpg'
import milkyWay from 'assets/stories/desktop/milky-way.jpg'
import rageOfTheSea from 'assets/stories/desktop/rage-of-the-sea.jpg'
import runningFree from 'assets/stories/desktop/running-free.jpg'
import somwarpet from 'assets/stories/desktop/somwarpet.jpg'
import tripToNowhere from 'assets/stories/desktop/trip-to-nowhere.jpg'
import unforseenCorners from 'assets/stories/desktop/unforeseen-corners.jpg'
import worldTour from 'assets/stories/desktop/world-tour.jpg'
import ArrowButton from 'components/Button/ArrowButton'
import theme from 'theme'



function Stories({windowW}) {
  const [stories,setStories] = useState([
    {
      title: 'The Mountains',
      author: 'John Appleseed',
      image: theMountains,
      date: 'April 16th 2020'
    },
    {
      title: 'Sunset Cityscapes',
      author: 'Benjamin Cruz',
      image: sunsetCityscapes,
      date: 'April 14th 2020'
    },
    {
      title: '18 Days Voyage',
      author: 'Alexei Borodin',
      image: eighteenDaysVoyage,
      date: 'April 11th 2020'
    },
    {
      title: 'Architecturals',
      author: 'Samantha Brooke',
      image: architecturals,
      date: 'April 9th 2020'
    },
    {
      date: 'April 7th 2020',
      title: 'World Tour 2019',
      author: 'Timothy Wagner',
      image: worldTour
    },
    {
      date: 'April 3rd 2020',
      title: 'Unforeseen Corners',
      author: 'William Malcolm',
      image: unforseenCorners
    },
    { 
      date: 'March 29th 2020',
      title: 'King on Africa: Part II',
      author: 'Tim Hillenburg',
      image: kingOfAfrica
    },
    {
      date: 'March 21st 2020',
      title: 'The Trip to Nowhere',
      author: 'Felicia Rourke',
      image: tripToNowhere
    },
    {
      date: 'March 19th 2020',
      title: 'Rage of The Sea',
      author: 'Mohammed Abdul',
      image: rageOfTheSea
    },
    {
      date: 'March 16th 2020',
      title: 'Running Free',
      author: 'Michelle',
      image: runningFree
    },
    {
      date: 'March 11th 2020',
      title: 'Behind the Waves',
      author: 'Lamarr Wilson',
      image: behindTheWaves
    },
    {
      date: 'March 9th 2020',
      title: 'Calm Waters',
      author: 'Samantha Brooke',
      image: calmWaters
    },
    {
      date: 'March 5th 2020',
      title: 'The Milky Way',
      author: 'Benjamin Cruz',
      image: milkyWay
    },
    {
      date: 'March 4th 2020',
      title: 'Night at The Dark Forest',
      author: 'Mohammed Abdul',
      image: darkForest
    },
    {
      date: 'March 1st 2020',
      title: 'Somwarpet’s Beauty',
      author: 'Michelle',
      image: somwarpet
    },
    {
      date: 'February 25th 2020',
      title: 'Land of Dreams',
      author: 'William Malcolm',
      image: landOfDreams
    }
  ])

  useEffect(()=> {
    async function fetchImg() {
      if (windowW < theme.breakpoints.values.laptop) {
        let img = await import ('assets/stories/mobile/mountains.jpg');
        let updatedStories = stories;
        updatedStories[0].image = img.default;
        setStories(updatedStories);
      }
    }
    fetchImg();
    
  },[windowW])
  

  return (
    <>
      <Box sx={{height: 650, width: '100%', display: 'flex', alignItems: 'center'}}>
        <Box component='img' src={moonOfAppalacia} sx={{position: 'absolute', objectFit: 'cover', zIndex: -1, width: '100%', height: '100%'}}/>
        <Box sx={{width: 387, '& *':{color: 'white !important', stroke: 'white'}, ml: '112px', my: '122px' }}>
          <Typography variant='h4' sx={{textTransform: 'uppercase'}}>Last month's featured story</Typography>
          <Typography variant='h1' sx={{textTransform: 'uppercase', mt: 3}}>Hazy full moon of Appalachia</Typography>
          <Box sx={{mt: 2}}>
            <Typography variant='subheading' sx={{opacity: 0.75}}>March 2nd 2020</Typography>
            <Typography component='span' variant='subheading' sx={{ml: 1}}>by John Appleseed</Typography>
          </Box>
          <Typography variant='body' component='p' sx={{my: 3}}>
            The dissected plateau area, while not actually made up of geological mountains, 
            is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
            and while the ridges are not high, the terrain is extremely rugged.
          </Typography>
          <ArrowButton>Read the story</ArrowButton>
        </Box>
      </Box>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
        {stories.map(story => <Card {...story} key={story.title}/>)}
      </Box>
    </>
  )
}

export default Stories
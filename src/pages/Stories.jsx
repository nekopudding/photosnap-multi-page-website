import { Box, Typography } from '@mui/material'
import Card from 'components/Card/Card'
import React, { useEffect, useState } from 'react'
// import theMountains from 'assets/stories/desktop/mountains.jpg'
// import sunsetCityscapes from 'assets/stories/desktop/cityscapes.jpg'
// import eighteenDaysVoyage from 'assets/stories/desktop/18-days-voyage.jpg'
// import architecturals from 'assets/stories/desktop/architecturals.jpg'

// import behindTheWaves from 'assets/stories/desktop/behind-the-waves.jpg'
// import calmWaters from 'assets/stories/desktop/calm-waters.jpg'
// import darkForest from 'assets/stories/desktop/dark-forest.jpg'
// import kingOfAfrica from 'assets/stories/desktop/king-on-africa.jpg'
// import landOfDreams from 'assets/stories/desktop/land-of-dreams.jpg'
// import milkyWay from 'assets/stories/desktop/milky-way.jpg'
// import rageOfTheSea from 'assets/stories/desktop/rage-of-the-sea.jpg'
// import runningFree from 'assets/stories/desktop/running-free.jpg'
// import somwarpet from 'assets/stories/desktop/somwarpet.jpg'
// import tripToNowhere from 'assets/stories/desktop/trip-to-nowhere.jpg'
// import unforseenCorners from 'assets/stories/desktop/unforeseen-corners.jpg'
// import worldTour from 'assets/stories/desktop/world-tour.jpg'
import ArrowButton from 'components/Button/ArrowButton'
import theme from 'theme'



const stories = [
  {
    title: 'The Mountains',
    author: 'John Appleseed',
    image: 'mountains.jpg',
    date: 'April 16th 2020'
  },
  {
    title: 'Sunset Cityscapes',
    author: 'Benjamin Cruz',
    image: 'cityscapes.jpg',
    date: 'April 14th 2020'
  },
  {
    title: '18 Days Voyage',
    author: 'Alexei Borodin',
    image: '18-days-voyage.jpg',
    date: 'April 11th 2020'
  },
  {
    title: 'Architecturals',
    author: 'Samantha Brooke',
    image: 'architecturals.jpg',
    date: 'April 9th 2020'
  },
  {
    date: 'April 7th 2020',
    title: 'World Tour 2019',
    author: 'Timothy Wagner',
    image: 'world-tour.jpg'
  },
  {
    date: 'April 3rd 2020',
    title: 'Unforeseen Corners',
    author: 'William Malcolm',
    image: 'unforeseen-corners.jpg'
  },
  { 
    date: 'March 29th 2020',
    title: 'King on Africa: Part II',
    author: 'Tim Hillenburg',
    image: 'king-on-africa.jpg'
  },
  {
    date: 'March 21st 2020',
    title: 'The Trip to Nowhere',
    author: 'Felicia Rourke',
    image: 'trip-to-nowhere.jpg'
  },
  {
    date: 'March 19th 2020',
    title: 'Rage of The Sea',
    author: 'Mohammed Abdul',
    image: 'rage-of-the-sea.jpg'
  },
  {
    date: 'March 16th 2020',
    title: 'Running Free',
    author: 'Michelle',
    image: 'running-free.jpg'
  },
  {
    date: 'March 11th 2020',
    title: 'Behind the Waves',
    author: 'Lamarr Wilson',
    image: 'behind-the-waves.jpg'
  },
  {
    date: 'March 9th 2020',
    title: 'Calm Waters',
    author: 'Samantha Brooke',
    image: 'calm-waters.jpg'
  },
  {
    date: 'March 5th 2020',
    title: 'The Milky Way',
    author: 'Benjamin Cruz',
    image: 'milky-way.jpg'
  },
  {
    date: 'March 4th 2020',
    title: 'Night at The Dark Forest',
    author: 'Mohammed Abdul',
    image: 'dark-forest.jpg'
  },
  {
    date: 'March 1st 2020',
    title: 'Somwarpet’s Beauty',
    author: 'Michelle',
    image: 'somwarpet.jpg'
  },
  {
    date: 'February 25th 2020',
    title: 'Land of Dreams',
    author: 'William Malcolm',
    image: 'land-of-dreams.jpg'
  }
]

function Stories({windowW}) {
  const [images,setImages] = useState([])
  const [headerImg,setHeaderImg] = useState('');
  const [widthState,setWidthState] = useState(0); //0=desktop, 1=tablet, 2=mobile

  function fetchStoriesImg() {
    console.log('changing img');
    let updatedStories = stories;
    let imageList = [];
    if (windowW >= theme.breakpoints.values.laptop) {
      updatedStories.forEach((story) => {
        import('assets/stories/desktop/' + story.image)
        .then(img => imageList.push(img.default))
      })
      setImages(imageList);
    }
    else {
      updatedStories.forEach((story) => {
        import('assets/stories/mobile/' + story.image)
        .then(img => imageList.push(img.default))
      })
      setImages(imageList);
    }
  }

  function fetchHeaderImg(){
    let updatedStories = stories;
    let imageList = [];
    if (windowW >= theme.breakpoints.values.laptop) {
      import('assets/stories/desktop/' + 'moon-of-appalacia.jpg')
        .then(img => setHeaderImg(img.default))
    }
    else if (windowW >= theme.breakpoints.values.tablet){
      import('assets/stories/tablet/' + 'moon-of-appalacia.jpg')
        .then(img => setHeaderImg(img.default))
    }
    else {
      import('assets/stories/mobile/' + 'moon-of-appalacia.jpg')
      .then(img => setHeaderImg(img.default))
    }
  }

  useEffect(()=> {
    updateWidthState();
  },[windowW])
  
  useEffect(()=> {
    updateWidthState();
    fetchStoriesImg();
  },[])

  function updateWidthState(){
    if (windowW < theme.breakpoints.values.tablet) setWidthState(2);
    else if (windowW < theme.breakpoints.values.laptop) setWidthState(1);
    else setWidthState(2)
  }

  useEffect(()=>{
    fetchStoriesImg();
    fetchHeaderImg();
  },[widthState])
  

  return (
    <>
      <Box sx={{height: 650, width: '100%', pl: '112px', py: '122px', position: 'relative' }}>
        <Box component='img' src={headerImg} sx={{position: 'absolute', objectFit: 'cover', zIndex: -1, width: '100%', height: '100%', left: 0, top: 0}}/>
        <Box sx={{width: 387, '& *':{color: 'white !important', stroke: 'white'}}}>
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
        {images.length === stories.length && stories.map((story,index) => <Card {...story} image={images[index]} key={story.title}/>)}
      </Box>
    </>
  )
}

export default Stories
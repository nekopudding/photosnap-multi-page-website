import HeaderSection from 'components/HeaderSection'
import React, { useState } from 'react'
import hero from 'assets/pricing/desktop/hero.jpg'
import BetaSection from 'components/BetaSection'
import { Box, Stack, Typography } from '@mui/material'
import Button from 'components/Button/Button'
import PlanToggle from 'components/PlanToggle'
import theme from 'theme'

const heroSection =  {
  id: 1,
  sx: {height: 490},
  header: 'Pricing',
  body: 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
  invertColors: true,
  image: hero
}

const monthlyPlans = [
  {
    title: 'Basic',
    body: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
    price: '$19.00',
  },
  {
    title: 'Pro',
    body: 'More advanced features available. Recommended for photography veterans and professionals.',
    price: '$39.00',
  },
  {
    title: 'Business',
    body: 'Additional features available such as more detailed metrics. Recommended for business owners.',
    price: '$99.00',
  },
]
const yearlyPrices = ['$190.00','$390.00','$990.00']

function Pricing() {
  const [isYearly,setIsYearly]= useState(false);
  return (
    <>
      <HeaderSection {...heroSection}/>
      <Box sx={{mt: '120px', mb: '160px'}}>
        <PlanToggle isYearly={isYearly} setIsYearly={setIsYearly} sx={{mx: 'auto'}}/>
        <Box sx={{mt: 6, display: 'flex', justifyContent: 'center', '& > * + *': {ml: '30px'}, alignItems: 'center'}}>
          {monthlyPlans.map(({title,body,price}, i) => {
            return (
              <Stack key={title} sx={{
                width: 350, 
                position: 'relative',
                height: 'fit-content',
                bgcolor: '#f5f5f5', 
                pt: (i === 1) ? 11 : 7, 
                pb: (i===1) ? 9 : 5, 
                px: 5, 
                justifyContent: 'center', 
                '& *': {textAlign: 'center'},
                ...(i === 1 && {
                  bgcolor: theme.palette.black,
                  '& > *': {color: theme.palette.white,textAlign: 'center'}
                })
              }}>
                {i === 1 && <Box sx={{
                  background: theme.palette.horizontalGradient,
                  position: 'absolute', top: 0, left: 0,
                  height: 6, width: '100%',
                }}/>}
                <Typography variant='h2'>{title}</Typography>
                <Typography variant='body' sx={{mt: '18px'}}>{body}</Typography>
                <Typography variant='h1' sx={{
                  mt: '40px'
                }}>{isYearly ? yearlyPrices[i] : price}</Typography>
                <Typography variant='body'>{isYearly ? 'per year' : 'per month'}</Typography>
                <Button variant='contained' sx={{width: '100%', mt: '40px'}} invertColors={i=== 1}>Pick Plan</Button>
              </Stack>
            )
          })}
        </Box>
      </Box>
      
      
      <Typography variant='h1' sx={{
        textTransform: 'uppercase',
        textAlign: 'center'
      }}>Compare</Typography>

      The Features

      Basic
      Pro
      Business

      Unlimited Story Posting
      Unlimited Photo Upload
      Embedding Custom Content
      Customize Metadata
      Advanced Metrics
      Photo Downloads
      Search Engine Indexing
      Custom Analytics

      <BetaSection/>
    </>
  )
}

export default Pricing
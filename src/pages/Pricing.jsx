import HeaderSection from 'components/HeaderSection'
import React, { useState } from 'react'
import hero from 'assets/pricing/desktop/hero.jpg'
import BetaSection from 'components/BetaSection'
import { Box, Stack, Typography, Table,TableBody,TableCell,TableContainer,TableHead, TableRow, Paper } from '@mui/material'
import Button from 'components/Button/Button'
import PlanToggle from 'components/PlanToggle'
import {ReactComponent as CheckIcon} from 'assets/pricing/desktop/check.svg'
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

const rows = [
  createData('Unlimited Story Posting', true,true,true),
  createData('Unlimited Photo Upload', true,true,true),
  createData('Embedding Custom Content', false,true,true),
  createData('Customize Metadata', false,true,true),
  createData('Advanced Metrics', false,false,true),
  createData('Photo Downloads', false,false,true),
  createData('Search Engine Indexing', false,false,true),
  createData('Custom Analytics', false,false,true),
];
function createData(title, basic,pro,business) {
  return { title, basic,pro,business };
}

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
      
      <Box sx={{mb: 20, mx: '354px'}}>
        <Typography variant='h1' sx={{
          textTransform: 'uppercase',
          textAlign: 'center'
        }}>Compare</Typography>
        
        <TableContainer sx={{ mt: 7}}>
      <Table sx={{ 
        minWidth: 650, 
        borderColor: theme.palette.grey,
        '& *': {textAlign: 'center'},
        '& th': {p: 3, }, 
        '& tr th:first-of-type *': {textAlign: 'left'},
        '& > thead th': {borderColor: 'black',p: 3, pt: 0 }, 
        '& td': {position: 'relative'},
      }} aria-label="pricing features table">
        <TableHead>
          <TableRow>
            <TableCell><Typography variant='h4'>The Features</Typography></TableCell>
            <TableCell><Typography variant='h4'>Basic</Typography></TableCell>
            <TableCell><Typography variant='h4'>Pro</Typography></TableCell>
            <TableCell><Typography variant='h4'>Business</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({title,basic,pro,business}) => (
            <TableRow
              key={title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant='h4'>{title}</Typography>
              </TableCell>
              <TableCell>{basic && <Box sx={{ mx: 'auto', width: '18px', height: '18px'}}><CheckIcon/></Box>}</TableCell>
              <TableCell>{pro && <Box sx={{ mx: 'auto', width: '18px', height: '18px'}}><CheckIcon/></Box>}</TableCell>
              <TableCell>{business && <Box sx={{ mx: 'auto', width: '18px', height: '18px'}}><CheckIcon/></Box>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
      </Box>
      

      <BetaSection/>
    </>
  )
}

export default Pricing
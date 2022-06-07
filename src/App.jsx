import Footer from 'components/Footer';
import Header from 'components/Header';
import React, { useEffect, useState } from 'react';
import Home from 'pages/Home';
import Features from 'pages/Features';
import Pricing from 'pages/Pricing';
import Stories from 'pages/Stories';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'theme';

function App(props) {
  const [windowW,setWindowW] = useState(window.innerWidth);

  useEffect(()=> {
    window.addEventListener('resize', () => {
      setWindowW(window.innerWidth);
    })
  },[])

  return (
    <>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
        <Routes>
          <Route path="photosnap-multi-page-website">
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="stories" element={<Stories />} />
          </Route>
        </Routes>
        <Footer windowW={windowW}/>
    </ThemeProvider>
    </BrowserRouter>
    </>
  );
}

export default App;

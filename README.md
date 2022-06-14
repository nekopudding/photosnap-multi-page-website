# Frontend Mentor - Photosnap Website solution

This is a solution to the [Photosnap Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site

### Screenshot

![](public/screenshot.png)


### Links

- Live Site URL: [Photosnap](https://nekopudding.github.io/photosnap-multi-page-website)

## My process

### Built with

- HTML, CSS
- [React](https://reactjs.org/) - JS library
- [MUI](https://mui.com/) - React component library


### What I learned
- [runtime imports](https://javascript.info/modules-dynamic-imports) to adjust for images at different screen sizes
```js
updatedStories.forEach((story) => {
  import('assets/stories/desktop/' + story.image)
  .then(img => imageList.push(img.default))
})
```
- using CSS grid for responsive layout of repeated cards at different dimensions
- using styled components as lightweight styling for reused components
- use opacity for creating fainter text colors for body text instead of setting the color directly allows it to be usable for both light and dark themes
- learn to better use figma - [measuring distances between layers](https://help.figma.com/hc/en-us/articles/360039956974-Measure-distances-between-layers)



### Continued development
I will reduce my reliance on UI librarys: Practice good practises in development using React from scratch - 
[PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html), 
[CSS variables](https://atomizedobjects.com/blog/react/how-to-use-css-variables-with-react/)

Practice using typescript.


## Author

- Website - [Dean Yang](https://nekopudding.github.io/portfolio/) (In development)
- Frontend Mentor - [@nekopudding](https://www.frontendmentor.io/profile/nekopudding)


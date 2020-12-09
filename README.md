# Photo Gallery App
[![Netlify Status](https://api.netlify.com/api/v1/badges/f060bf59-3202-4307-b938-3d263be70294/deploy-status)](https://app.netlify.com/sites/dmatis-photogallery/deploys)

This app was created as part of the [Modern React with Redux Course](https://www.udemy.com/course/react-redux/) on Udemy.
[![Photo Gallery Screenshot](public/img/photo-gallery.png)](https://dmatis-photogallery.netlify.app/)

## To Start the Development Server

- Ensure that you have Node.JS and npm installed
- Clone the repository
- Register for an Unsplash API key [here](https://unsplash.com/developers)
- In the root directory, create a `.env` file
- In `.env`, add `REACT_APP_UNSPLASH_API_KEY` with the Unsplash API key
- In a terminal:
  - `npm install`
  - `npm run start`
- Go to `localhost:3000` in your browser

## How to Use

- Type a search query in the "Image Search" box and hit Enter

## Core Concepts

- Utilizes `React.createRef()` in order to dynamically space image elements of varying heights
- Developed using the [Unsplash Developer API](https://unsplash.com/developers) to retrieve photos

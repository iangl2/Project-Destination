import React from 'react'
import About from './about'
import Hero from './hero'
import VisitUs from './visitus'
import Hashtag from './hashtag'

function Home() {
  return (
    <div>
        <Hero></Hero>
        <About></About>
        <VisitUs></VisitUs>
        <Hashtag></Hashtag>
    </div>
  )
}

export default Home
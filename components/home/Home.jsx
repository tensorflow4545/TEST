import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import Course from "../allcourses/CourseHome";
import Hero from "./hero/Hero"

import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Course/>
      <Testimonal />
     
      
    </>
  )
}

export default Home

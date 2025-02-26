import React from 'react'
import PageView from '../Components/PageView'
import BestSweets from '../Components/BestSweets'
import BestCake from '../Components/BestCake'
import ShapeSlide from '../Components/ShapeSlide'
const About = ({light}) => {
  return (
    <div>
      <PageView light={light} title="About"/>
      <BestSweets/>
      <BestCake/>
      <ShapeSlide/>
    </div>
  )
}

export default About

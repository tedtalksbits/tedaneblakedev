import React from 'react'
import { CardsWrapper } from '../components/Card/Card'
import { MainContentWrapper } from '../components/utils/mainComponents'
import { themeColors } from '../data/appColors'
import { Heading } from './InfoSection'
import { projectsData } from '../data/projects'
import ImgCard from '../components/Card/ImgCard'


const ParralaxCards = () => {
   return (
      <MainContentWrapper
         background={`linear-gradient(90deg, ${themeColors.primary} 0%, #764ba2 100%)`}
         id="projects"
         className="section"
      >
         <Heading>Projects</Heading>
         <CardsWrapper size="300px" style={{ gap: '2.5rem', margin: '5rem 0', overflow: 'hidden' }}>
            {projectsData.map((project, key) => (



               <ImgCard
                  key={key}
                  img={project.preview}
                  title={project.title}
                  tags={project.techs}
                  link={project.link}
                  desc={project.desc}
                  type={project.type}
                  demo={project.demo}
               />


            ))}
         </CardsWrapper>
      </MainContentWrapper>
   )
}

export default ParralaxCards

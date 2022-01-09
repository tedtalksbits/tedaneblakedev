import React from 'react'
import { CardsWrapper } from '../components/Card/Card'
import { MainContentWrapper } from '../components/utils/mainComponents'
import { themeColors } from '../data/appColors'
import { Heading } from './InfoSection'
import { projectsData } from '../data/projects'
import ImgCard from '../components/Card/ImgCard'
import glowImg from '../images/gradient-right-dark-next-ui.svg'
import styled from 'styled-components'

const CustomContentWrapper = styled(MainContentWrapper)`

   background: ${themeColors.page};
   position: relative;
   background-image: url(${glowImg});
   background-position: center left;
   background-size: cover;
   background-repeat: no-repeat;
   min-height: 100vh;
   padding: 1rem 2rem;
`
const ParralaxCards = () => {
   return (
      <CustomContentWrapper

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
      </CustomContentWrapper>
   )
}

export default ParralaxCards

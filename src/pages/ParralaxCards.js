import React from 'react'
import { CardsWrapper } from '../components/Card/Card'
import { Button, MainContentWrapper } from '../components/utils/mainComponents'
import { themeColors } from '../data/appColors'
import { Heading } from './InfoSection'
import { projectsData } from '../data/projects'
import styled from 'styled-components'

const Project = styled.div`
   background: ${themeColors.black};
   padding: 1.4rem;
   border-radius: 6px;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   justify-content: space-between;


   :hover{

      .img{
         transform: scale(1.2);
      }
   }

   .img{
      transition: all ease-in-out .3s;
   }

   

`
const TextContainer = styled.div`

   margin: 2rem 0;

   .tags{
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.2rem;
      p{
         color: ${themeColors.white_60};
         font-size: 12px;
         margin: 0 .25rem;
         font-weight: 300;
      }
   }

`
const ParralaxCards = () => {
   return (
      <MainContentWrapper background={`linear-gradient(90deg, ${themeColors.primary} 0%, #764ba2 100%)`} id="projects">
         <Heading style={{ color: themeColors.white }}>Projects</Heading>
         <CardsWrapper size="350px">

            {projectsData.map((project, key) => (

               <Project className="project" id={project.id} key={key}>

                  <div className="img">
                     <img src={project.preview} alt="project preview" />
                  </div>

                  <TextContainer className="text">
                     <h3>{project.title}</h3>
                     <div className="tags">
                        {project.techs.map((tech, key) => (
                           <p key={key}>{tech}</p>
                        ))}
                     </div>
                  </TextContainer>
                  <Button
                     background={themeColors.secondary}
                     hoverBackground={themeColors.black}
                     href={project.link}>View
                  </Button>
               </Project>
            ))}




         </CardsWrapper>

      </MainContentWrapper>
   )
}

export default ParralaxCards

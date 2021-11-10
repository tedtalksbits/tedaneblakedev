import React from 'react'
import { CardsWrapper } from '../components/Card/Card';
import Card from '../components/Card/Card'
import ImageCard from '../components/ImageCard/ImageCard'
import { Container, MainContentWrapper } from '../components/utils/mainComponents'
import profile from '../images/tedaneprofile.JPG';
import ScrollableCards from '../components/ScrollableCards/ScrollableCards';
import { techCards } from '../data/techCardData'
import styled from 'styled-components';
import { themeColors } from '../data/appColors';

const Heading = styled.h1`
   margin-bottom: 1.6rem;
   color: ${themeColors.secondary};
   font-weight: 500;
`
const InfoSection = ({ primary_05 }) => {
   return (
      <MainContentWrapper style={{ height: '100%', background: `${primary_05}` }} id='info'>


         <Container>
            <Heading>Profile</Heading>
            <ImageCard
               highlighted="About me"
               heading="Tedane Blake"
               subheading={
                  <>
                     <ul>
                        <li><p>An Information Tech. graduate aspiring to be a Software/Web Developer.</p></li>

                     </ul>
                     <ul>

                        <li><p>B.S. Degree Program in Computer Programming Inf. Sys, Farmingdale State College, Farmingdale, NY</p></li>
                        <li><p>A.S. Degree Information Technology, Nassau Community College, Garden City, NY</p></li>
                     </ul>
                  </>

               }
               src={profile}

            />
         </Container>

         <div id="tech"></div>

         <Container  >
            <Heading>Technologies</Heading>
            <CardsWrapper >
               {techCards.map((e, index) => (
                  <Card key={index} icon={e.icon} title={e.title} />
               ))}
            </CardsWrapper>
         </Container>

         <div id="projects"></div>
         <Container>
            <Heading>Projects</Heading>
            <ScrollableCards style={{ margin: '0' }} />
         </Container>
      </MainContentWrapper>
   )
}

export default InfoSection

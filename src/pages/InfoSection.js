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
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

const Heading = styled.h1`
   margin-bottom: 1.6rem;
   color: ${themeColors.secondary};
   font-weight: 500;
`
const InfoSection = ({ primary_05 }) => {
   return (
      <MainContentWrapper style={{ height: '100%', background: `${primary_05}` }} id='info'>

         <Slide left>

            <Container>
               <Heading>Profile</Heading>
               <ImageCard
                  highlighted="About me"
                  heading="Tedane Blake"
                  subheading={
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro fugit minima itaque excepturi adipisci ipsam provident repellat, enim qui corrupti deleniti. Maiores, sit illo?</p>
                  }
                  src={profile}

               />
            </Container>
         </Slide>
         <div id="tech"></div>
         <Fade >
            <Container  >
               <Heading>Technologies</Heading>
               <CardsWrapper >
                  {techCards.map((e, index) => (
                     <Card key={index} text={e.text} icon={e.icon} title={e.title} />
                  ))}
               </CardsWrapper>
            </Container>
         </Fade>
         <div id="projects"></div>
         <Container>
            <Heading>Projects</Heading>
            <ScrollableCards style={{ margin: '0' }} />
         </Container>
      </MainContentWrapper>
   )
}

export default InfoSection

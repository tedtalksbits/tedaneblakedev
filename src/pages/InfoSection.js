import React from 'react'
import ImageCard from '../components/ImageCard/ImageCard'
import { Container, MainContentWrapper } from '../components/utils/mainComponents'
import profile from '../images/tedaneprofile.JPG';
import styled from 'styled-components';
import { themeColors } from '../data/appColors';
import IconBox from '../components/IconBox';

export const Heading = styled.h1`
   margin-bottom: 1.6rem;
   color: ${themeColors.secondary};
   font-weight: 500;
`
const InfoSection = ({ primary_05 }) => {

   return (
      <MainContentWrapper style={{ height: '100%', background: `${primary_05}` }} id='info' className="section">


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

         <div className="socials" style={{ display: 'flex' }}>
            <a href="https://twitter.com/iam_tcb">

               <IconBox icon="bx bxl-twitter" hovertext="Go" background={themeColors.primary} />
            </a>
            <a href="https://github.com/tedtalksbits">

               <IconBox icon="bx bxl-github" hovertext="Go" background={themeColors.primary} />
            </a>
            <a href="https://www.linkedin.com/in/tedane-blake-042918158/">

               <IconBox icon="bx bxl-linkedin" hovertext="Go" background={themeColors.primary} />
            </a>
         </div>


      </MainContentWrapper>
   )
}

export default InfoSection

import React, { useMemo, useRef, useState } from 'react'
import ImageCard from '../components/ImageCard/ImageCard'
import { Container, MainContentWrapper } from '../components/utils/mainComponents'
import profile from '../images/tedaneprofile.JPG';
import styled from 'styled-components';
import { themeColors } from '../data/appColors';
import IconBox from '../components/IconBox';
import { useEffect } from 'react';

export const Heading = styled.h1`
   margin-bottom: 1.6rem;
   color: ${themeColors.white};
   font-weight: 700;
`
const ProfileAnimation = styled.div`
   opacity: 0;
   transition: all .4s linear;

   &.inView{
      animation: show .6s cubic-bezier(0.4, 0, 0.2, 1) forwards .2s;
     
   }
  
   @keyframes show{
         0%{
            opacity: 0;
            transform: translateY(-20px);
         }
         100%{
            opacity: 1;
            transform: translateY(0);
         }
      }

`
const InfoSection = ({ primary_05 }) => {

   const targetRef = useRef(null);
   const [isVisible, setIsVisible] = useState(false)

   const callbackFunction = entries => {
      const [entry] = entries; // sames as doing entry = entries[0], since we're only trageting one element
      setIsVisible(entry.isIntersecting);
   }



   const options = useMemo(() => {
      return {

         root: null, //use browser as viewport
         rootMarging: '0px',
         threshold: .1 // when 10% is visible
      }
   }, []);

   useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);
      const currentTarget = targetRef.current;
      if (currentTarget) {
         observer.observe(currentTarget)
      }
      return () => {
         if (currentTarget) {
            observer.unobserve(currentTarget);
         }
      }
   }, [targetRef, options])


   return (
      <MainContentWrapper style={{ height: '100%', background: `${primary_05}` }} id='info' className="section info_section" ref={targetRef}>

         <ProfileAnimation className={`profile-card ${isVisible && 'inView'}`}>
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
         </ProfileAnimation>


      </MainContentWrapper>
   )
}

export default InfoSection

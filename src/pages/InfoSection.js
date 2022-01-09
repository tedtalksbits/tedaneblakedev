import React, { useMemo, useRef, useState } from 'react'
import ImageCard from '../components/ImageCard/ImageCard'
import { Container, MainContentWrapper } from '../components/utils/mainComponents'
import profile from '../images/man-laptop.png';
import styled from 'styled-components';
import { themeColors } from '../data/appColors';
import IconBox from '../components/IconBox';
import { useEffect } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimeLine, { TimeLineHeading } from '../components/TimeLine';
import { fsc, ncc, work1, work2, work3 } from '../data/timeline';
import Bounce from 'react-reveal/Bounce';

export const Heading = styled.h1`
   margin-bottom: 1.6rem;
   color: ${themeColors.white};
   font-weight: 700;

   /* ::first-letter{
     text-decoration: underline;
   } */
`
const ProfileAnimation = styled.div`
   opacity: 0;
   transition: all .4s linear;
   display: flex; 
   flex-direction: column;

   .socials{
      margin-left: auto;
   }

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
            <Heading>Profile</Heading>
            <Container>
               <ImageCard
                  highlighted="About me"
                  heading="Tedane Blake"
                  subheading={
                     <>
                        <p>I am a current student at Farmingdale State College where I am studying to complete a B.S. Degree in Computer Programming and Information Systems.</p>
                        <br />
                        <p>I have taken a wide variety of computer courses:  programming, software development, database management, systems design, maintenance and troubleshooting. In my current position at Estee Lauder LLC USA, I have worked with several computer technicians and have learned the importance of teamwork and customer service in the computer field.</p>
                        <p style={{ margin: '4rem 0 1rem' }}>Socials: </p>
                        <div className="socials" style={{ display: 'flex' }}>
                           <Bounce >

                              <a href="https://twitter.com/iam_tcb">
                                 <IconBox icon="bx bxl-twitter" hovertext="Go" background={themeColors.primary} />
                              </a>
                              <a href="https://github.com/tedtalksbits">
                                 <IconBox icon="bx bxl-github" hovertext="Go" background={themeColors.primary} />
                              </a>
                              <a href="https://www.linkedin.com/in/tedane-blake-042918158/">
                                 <IconBox icon="bx bxl-linkedin" hovertext="Go" background={themeColors.primary} />
                              </a>
                           </Bounce>
                        </div>
                     </>
                  }
                  src={profile}
               />
            </Container>
            <Container>
               <TimeLineHeading heading="School" />
               <VerticalTimeline>
                  <TimeLine type='school' {...ncc} />
                  <TimeLine type='school' {...fsc} />
               </VerticalTimeline>

               <TimeLineHeading heading="Experience" />
               <VerticalTimeline>
                  <TimeLine type='work' {...work1} />
                  <TimeLine type='work' {...work2} />
                  <TimeLine type='work' {...work3} />

               </VerticalTimeline>
            </Container>

         </ProfileAnimation>
      </MainContentWrapper>
   )
}

export default InfoSection

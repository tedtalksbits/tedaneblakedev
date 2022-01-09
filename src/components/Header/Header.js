import React from 'react'
import styled from 'styled-components'
import { themeColors } from '../../data/appColors'
import headerImg from '../../images/floatingmancompressed.png'
import { mixin } from '../NavBar/NavBar'
import { Button } from '../utils/mainComponents'
import Fade from 'react-reveal/Fade';

const Container = styled.header`
   max-width: 1200px;
   margin: 0 auto;
   padding: 4rem 4rem 0;
   min-height: 100vh;
   display: grid;
   grid-template-columns: 1fr 1fr;
   place-items: center;
   gap: 2rem;
   position: relative;
   
   
   img{
      width: 100%;
      max-height: 800px;
      object-fit: contain;
      animation: floating 5s infinite ease-in-out;

      @keyframes floating { 
         0% { transform: translate(0,  0px); } 
         50%  { transform: translate(0, 15px); } 
         100%   { transform: translate(0, -0px); }     
      } 
   }

   @media screen and (max-width: ${mixin}){
      grid-template-columns: none;
      padding: 6rem 2.2rem;
      min-height: 100%;
      gap: 4rem;

      img{
         max-height: 550px;
      }
   }
`
const Heading = styled.h1`
   font-size: clamp(3rem, 8vw, 5.5rem);
`
const SubHeading = styled.p`
   margin-bottom: 2.2rem;
   font-size: 1.4rem;
   color: ${themeColors.white_80};
`
const Header = () => {
   return (
      <Container className="section" id='home' style={{ overflow: 'hidden' }}>
         <div className="text">
            <Fade top>

               <Heading>Hi, </Heading>
               <Heading>I'm Tedane.</Heading>
               <SubHeading>A Full-Stack Web Developer studying computer programming.</SubHeading>
            </Fade>
            <div className="button-container" style={{ display: 'flex', justifyContent: 'start' }}>
               <Button background={themeColors.primary} hoverBackground={themeColors.primary} href="#projects">Projects <i className='bx bx-right-arrow-alt' ></i></Button>
            </div>
         </div>
         <Fade right>

            <div className="img">


               <img src={headerImg} alt="header ilustration" />

            </div>
         </Fade>
      </Container>
   )
}

export default Header

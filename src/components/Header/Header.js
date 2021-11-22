import React from 'react'
import styled from 'styled-components'
import { themeColors } from '../../data/appColors'
import headerImg from '../../images/floatingmancompressed.png'
import { mixin } from '../NavBar/NavBar'
import { Button } from '../utils/mainComponents'

const Container = styled.header`
   max-width: 1200px;
   margin: 0 auto;
   padding-top: 4rem;
   min-height: 100vh;
   display: grid;
   grid-template-columns: .7fr 1.3fr;
   place-items: center;
   gap: 2rem;

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
      padding: 6rem 1rem;
      min-height: 100%;
      gap: 6rem;
   }
`
const Heading = styled.h1`
   font-size: clamp(5rem, 8vw, 7rem);
`
const SubHeading = styled.p`
   margin-bottom: 2.2rem;
   font-size: 1.4rem;
   color: ${themeColors.white_80};
`
const Header = () => {
   return (
      <Container className="section" id='home'>
         <div className="text">
            <Heading>Hello, I'm Tedane.</Heading>
            <SubHeading>A Full-Stack Web Developer and Meditation Enthusiast.</SubHeading>
            <div className="button-container" style={{ display: 'flex', justifyContent: 'start' }}>
               <Button background={themeColors.primary} hoverBackground={themeColors.secondary} href="#info">Learn More <i className='bx bx-right-arrow-alt' ></i></Button>
            </div>
         </div>
         <div className="img">
            <img src={headerImg} alt="header ilustration" />
         </div>
      </Container>
   )
}

export default Header

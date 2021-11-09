import React from 'react'
import styled from 'styled-components'
import headerimg from '../../images/moon.png'
import headerimg2 from '../../images/stars.png'
import { MainContentWrapper } from '../utils/mainComponents'
import BlobbyButton from '../BlobbyButton'
import { blobButtonPrimary } from '../BlobbyButton/Data'
import GlassMorpCard from '../utils/GlassMorpCard'
import { ComponentOne, ComponentTwo } from './HeaderFloatingCards'
import { themeColors } from '../../data/appColors'


const HeaderContainer = styled.header`
   position: relative;
   display: flex;
   /* place-items: center; */
   height: 100vh;
   justify-content: center;
   align-items: center;
   
   &::before{
      content: '';
      height: 100px;
      background: linear-gradient(0deg, ${themeColors.page || 'red'}, transparent);
      position: absolute;
      bottom: 0;
      width: 100%;
      z-index: 50;
   }
`
const HeaderContentContainer = styled.div`
   /* margin: 4rem 0 2rem; */
   text-align: center;
   align-items: center;
   background: linear-gradient(transparent, transparent), url(${headerimg2}) center center no-repeat;

   /* @media screen and (min-width : 740px){
      display: flex;
   } */
   
`
const HeaderCenter = styled.div`
   position: absolute; 
   text-align: center;
   z-index: 20;
   display: flex;
   flex-direction: column;

  

`
const Heading = styled.h1`
   font-size: clamp(2rem, 8vw, 5rem);
   text-align: center;
   font-weight: 700;
   margin-bottom: 2rem;
   color: ${props => props.color};
   /* position: absolute; */
   z-index: 30;
   text-shadow: 6px 9px 9px black;


`
const HeaderImageContainer = styled.div`
   
   /* max-height: 300px; */
   width: 100%;
   height: 100vh;
 

   > img{
      object-fit: cover;
      width: 100%;
      /* height: calc(100vh - 5rem); */
      height: 100vh;
      mix-blend-mode: screen;
      /* height: 500px; */
   }
`
const Subtitle = styled.p`
   font-size: 1.3rem;
   color: ${themeColors.white_70};
   animation-delay: 0.5s;
   margin-bottom: 4rem;
`
const Header = ({ white_10 }) => {
   return (
      <HeaderContainer id="top">
         <GlassMorpCard
            background={white_10} borderColor={white_10} isHeaderCard={true}
            left="6"
            top="14"
            hideOnMobile={true}
            component={<ComponentOne />}
            animation="animate__fadeInDown"

         />
         <GlassMorpCard
            background={white_10} borderColor={white_10} isHeaderCard={true}
            right="none"
            bottom="0"
            component={<ComponentTwo />}
            animation="animate__fadeInUp"

         />
         <HeaderCenter>
            <Heading
               className="animate__animated animate__fadeInUp"
               color='white'>
               Hi, I'm Tedane
            </Heading>

            <Subtitle
               className="animate__animated animate__fadeInRight para">
               Computer Programming Student and Web Dev Enthusiast
            </Subtitle>
            <a href="mailto:blakt7@farmindale.edu" id="email" style={{ display: 'grid', placeContent: 'center' }}>
               <BlobbyButton {...blobButtonPrimary} />
            </a>
         </HeaderCenter>

         <MainContentWrapper >
            <HeaderContentContainer className='full-view'>

               <HeaderImageContainer>
                  <img src={headerimg} alt="stars" />
               </HeaderImageContainer>

            </HeaderContentContainer >

         </MainContentWrapper>
      </HeaderContainer>
   )
}

export default Header

import React from 'react'
import styled from 'styled-components'
import headerimg from '../../images/css-stars-2.svg'
import headerimg2 from '../../images/bg.svg'
import { MainContentWrapper } from '../utils/mainComponents'
import BlobbyButton from '../BlobbyButton'
import { blobButtonPrimary } from '../BlobbyButton/Data'
import GlassMorpCard from '../utils/GlassMorpCard'
import { HeaderCardHtmlOne, HeaderCardHtmlTwo } from '../HeaderCardHtml'


const HeaderContainer = styled.header`
   position: relative;
   display: flex;
   /* place-items: center; */
   height: 100vh;
   justify-content: center;
   align-items: center;
`
const HeaderContentContainer = styled.div`
   margin: 4rem 0 2rem;
   text-align: center;
   align-items: center;
   
   
   background: linear-gradient(transparent, transparent), url(${headerimg2}) center center no-repeat;

   /* @media screen and (min-width : 740px){
      display: flex;
   } */
   
`
const Heading = styled.h1`
   font-size: clamp(2rem, 8vw, 5rem);
   text-align: center;
   font-weight: 700;
   margin-bottom: 2rem;
   color: ${props => props.color};
   /* position: absolute; */
   z-index: 20;


`
const HeaderImageContainer = styled.div`
   
   /* max-height: 300px; */
   width: 100%;
   height: 100vh;
 

   > img{
      object-fit: cover;
      width: 100%;
      height: calc(100vh - 5rem);
      /* height: 500px; */
   }
`
const Subtitle = styled.p`
   font-size: 1.3rem;
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
            text={
               <div className="animate__animated animate__fadeInDown">
                  <HeaderCardHtmlOne />
               </div>

            }

         />
         <GlassMorpCard
            background={white_10} borderColor={white_10} isHeaderCard={true}
            right="6"
            bottom="14"
            text={
               <div className="animate__animated animate__fadeInUp">
                  <HeaderCardHtmlTwo />
               </div>
            }

         />
         <div style={{ position: 'absolute', textAlign: 'center', zIndex: '20', display: 'flex', flexDirection: 'column' }}>

            <Heading className="animate__animated animate__fadeInUp" color='white'>Header will go here big boss</Heading>
            <Subtitle className="animate__animated animate__fadeInRight para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, debitis!</Subtitle>
            <BlobbyButton {...blobButtonPrimary} />

         </div>
         <MainContentWrapper style={{
            padding: '0', backGround: 'linear-gradient( 1deg, #02040e 25%, #0c012e 100%)',
            opacity: '.3'
         }}>

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

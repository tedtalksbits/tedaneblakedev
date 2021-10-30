import React from 'react'
import styled from 'styled-components'
import { themeColors } from '../../data/appColors'
import { mixin } from '../NavBar/NavBar'

const ImageCardContainer = styled.div`

   display: grid;
   grid-template-rows: 1fr 1fr;
   gap: 4rem;
   height: fit-content;
  

   @media screen and (min-width: 640px){
      grid-template-columns: .7fr 1.3fr;
      grid-template-rows: none;
   }
`

const CardImage = styled.div`
   /* overflow: hidden;
   border-radius: 20px; */
   
   max-height: 340px;
`

const Image = styled.img`

   width: 100%;
   height: 100%;
   object-fit: cover;
   filter: grayscale(1);
   border-radius: 3rem 31% 38px 15rem;
  
/* 
   animation: border-transform 30s linear infinite alternate forwards;

   @keyframes border-transform{
    0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
	14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
	28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
	42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
	56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
	70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
	84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; } 
} */

`

const CardText = styled.div`
   /* max-width: 60%; */

`

const CardTextHighlighted = styled.h4`
   color: blueviolet;
`

const CardHeading = styled.h1`
   margin: 2rem 0 .8rem;
`

const CardSubHeading = styled.div`
   p{
      
      color: ${themeColors.white_70}
   }
`


const ImageCard = ({ src, heading, subheading, highlighted }) => {
   return (
      <ImageCardContainer>
         <CardImage>
            <Image src={src} />
         </CardImage>
         <CardText>
            <CardTextHighlighted>{highlighted}</CardTextHighlighted>
            <CardHeading>{heading}</CardHeading>
            <CardSubHeading>{subheading}</CardSubHeading>
         </CardText>

      </ImageCardContainer>
   )
}

export default ImageCard

import React from 'react'
import styled from 'styled-components'
import { themeColors } from '../../data/appColors'

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
   
   max-height: 340px;
`

const Image = styled.img`

   width: 100%;
   height: 100%;
   object-fit: cover;
   filter: grayscale(1);
   border-radius: 3rem 31% 38px 15rem;


`

const CardText = styled.div`


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
            <CardSubHeading>
               {subheading}
            </CardSubHeading>
         </CardText>

      </ImageCardContainer>
   )
}

export default ImageCard

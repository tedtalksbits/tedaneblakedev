import React from 'react'
import ImageCard from '../components/ImageCard/ImageCard'
import { MainContentWrapper } from '../components/utils/mainComponents'
import profile from '../images/tedaneprofile.JPG';

const InfoSection = ({ primary_05 }) => {
   return (
      <MainContentWrapper style={{ height: '100vh', background: `${primary_05}` }} id='info'>
         <ImageCard
            highlighted="About me"
            heading="lorem Ipsum"
            subheading={
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro fugit minima itaque excepturi adipisci ipsam provident repellat, enim qui corrupti deleniti. Maiores, sit illo?</p>
            }
            src={profile}

         />
      </MainContentWrapper>
   )
}

export default InfoSection

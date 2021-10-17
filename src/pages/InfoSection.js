import React from 'react'
import Card, { CardContainer } from '../components/Card/Card';
import IconBox from '../components/IconBox';
import ImageCard from '../components/ImageCard/ImageCard'
import { MainContentWrapper } from '../components/utils/mainComponents'
import { themeColors } from '../data/appColors';
import profile from '../images/tedaneprofile.JPG';
import image from '../images/3d-flame-264.png';
import ScrollableCards from '../components/ScrollableCards/ScrollableCards';

const InfoSection = ({ primary_05 }) => {
   return (
      <MainContentWrapper style={{ height: '100%', background: `${primary_05}` }} id='info'>


         <ImageCard
            highlighted="About me"
            heading="lorem Ipsum"
            subheading={
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro fugit minima itaque excepturi adipisci ipsam provident repellat, enim qui corrupti deleniti. Maiores, sit illo?</p>
            }
            src={profile}

         />



         <CardContainer background={themeColors.white_10} outlineColor={themeColors.white_20} >
            <h1>Javascript!</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio magnam ut qui earum, dolorem cum!</p>
            <IconBox
               icon={<i className='bx bxl-javascript' ></i>}
            />
         </CardContainer>



         <div style={{ margin: '2rem 0' }}>

            <ScrollableCards style={{ margin: '0' }} />
         </div>
         <div style={{ margin: '2rem 0' }}>

            <ScrollableCards style={{ margin: '0' }} />
         </div>
         <div style={{ margin: '2rem 0' }}>

            <ScrollableCards style={{ margin: '0' }} />
         </div>






      </MainContentWrapper>
   )
}

export default InfoSection

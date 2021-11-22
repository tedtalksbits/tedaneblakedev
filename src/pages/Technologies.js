import React from 'react'
import { MainContentWrapper } from '../components/utils/mainComponents'
import { techCards } from '../data/techCardData'
import styled from 'styled-components'
import { themeColors } from '../data/appColors'
import { Heading } from './InfoSection'
import Anime from 'react-anime'


const IconsScrollWrapper = styled.div`
   

`
const IconsContainer = styled.div`
   max-width: 500px;
   margin: 0 auto;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
   grid-gap: 1rem;
  
   img {
   width: 100%;
   height: 200px;
   object-fit:cover;
   }
`
const IconDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   user-select: none;

   i{
      font-size: 5rem;
      color: ${themeColors.white_40};
   }

`
const Technologies = () => {
   return (
      <MainContentWrapper id="tech" className="section">
         <Heading>Technologies</Heading>
         <IconsScrollWrapper>

            <IconsContainer>
               <Anime
                  opacity={[0, 1]}
                  translateY={['0', '1em']}
                  delay={(e, i) => i * 200}
               >
                  {techCards.map((tech, key) => (
                     <IconDiv key={key}>
                        {tech.icon}
                     </IconDiv>
                  ))}
               </Anime>
            </IconsContainer>
         </IconsScrollWrapper>
      </MainContentWrapper>
   )
}

export default Technologies

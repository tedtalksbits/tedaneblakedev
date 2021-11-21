import React from 'react'
import styled from 'styled-components'
import IconBox from '../IconBox';
import { themeColors } from '../../data/appColors'


export const CardsWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(${props => props.size}, 1fr));
   grid-gap: 1rem;

   
   img {
   width: 100%;
   height: 300px;
   object-fit:cover;
   }

`

const CardContainer = styled.div`

   background: ${props => props.background || themeColors.white_10};
   backdrop-filter: blur(25px) saturate(1.2);
   border-radius: 12px;
   border: 1px ${props => props.outlineColor || themeColors.white_20} solid; 
   padding: 1rem; 
   margin: 1rem 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1em;
   transition: all ease-in-out .4s;
   box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
   overflow: hidden;
   /* box-shadow: ${props => props.background} 0px 10px 15px -3px, ${props => props.background} 0px 4px 6px -2px; */

   :hover{
      box-shadow: ${themeColors.primary_20} 0px 19px 38px;
      
   }


   h1{
      /* color: ${props => props.headColor}; */
      font-weight: 400;
      user-select: none;
   }
   p{
      color: ${themeColors.white_50};
      font-weight: 300;
      text-align: center;
      font-size: 1em;
      user-select: none;
   }

`
const Card = ({ icon, title, text, background, outline }) => {
   return (
      <CardContainer background={background} outlineColor={outline}>
         <IconBox icon={icon} background={themeColors.primary} />
         <h1>{title}</h1>
         <p>{text}</p>

      </CardContainer>
   )
}

export default Card

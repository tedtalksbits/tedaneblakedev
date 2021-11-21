import React from 'react'
import styled from 'styled-components';
import { mixin } from '../NavBar/NavBar';
const GlassCard = styled.div`

  
   background: ${props => props.background};
   backdrop-filter: blur(100px) saturate(1.2);
   border-radius: 12px;
   border: 1px ${props => props.borderColor} solid;
   color: white;
   margin-bottom: 2rem;
   padding: 2em;
   min-height: 150px;
   min-width: 250px;
   box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
   position: relative;
   z-index: 20;
   left: ${props => props.left}%;
   right: ${props => props.right}%;
   top: ${props => props.top}%;
   bottom: ${props => props.bottom}%;
   display: grid;
   place-items: center;
   user-select: none;


   @media screen and (max-width: ${mixin}){
      display: ${({ hideOnMobile }) => hideOnMobile ? 'none' : ''};
   }

`
const AnimationDiv = styled.div`

`
const GlassMorpCard = ({ background, borderColor, isHeaderCard, left, right, bottom, top, children, hideOnMobile, animation }) => {

   return (
      <GlassCard
         background={background}
         borderColor={borderColor}
         left={left}
         right={right}
         top={top}
         bottom={bottom}
         hideOnMobile={hideOnMobile}
      >
         <AnimationDiv className={`animate__animated ${animation}`}>
            {children}
         </AnimationDiv>
      </GlassCard>
   )
}

export default GlassMorpCard;

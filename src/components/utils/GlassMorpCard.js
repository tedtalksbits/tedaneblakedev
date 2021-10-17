import React from 'react'
import styled from 'styled-components';

const GlassCard = styled.div`
   background: ${props => props.background};
   backdrop-filter: blur(25px) saturate(1.2);
   border-radius: 12px;
   border: 1px ${props => props.borderColor} solid;
   color: white;
   margin-bottom: 2rem;
   padding: 2em;
   min-height: 150px;
   min-width: 250px;
   box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
/* 
   position: absolute;
   z-index: 7;
   left: 20%;
   top: 14%; */

`
const GlassMorpCard = ({ background, borderColor, isHeaderCard, left, right, bottom, top, text }) => {

   return (
      <GlassCard
         background={background} borderColor={borderColor} style={isHeaderCard ? {
            position: "absolute",
            zIndex: "20",
            left: `${left}%`,
            right: `${right}%`,
            top: `${top}%`,
            bottom: `${bottom}%`,
            display: 'grid',
            placeItems: 'center',
            userSelect: 'none'
         } : null}
      >
         {text}
      </GlassCard>
   )
}

export default GlassMorpCard

import React from 'react'
import styled from 'styled-components'

const InnerBox = styled.div`
   width: 4rem;
   height: 4rem;
   background: ${props => props.background + "a6"};
   border-radius: 1rem;
   display: block;
   place-items: center;
   border: 1px solid ${props => props.background};
   transition: all ease-in-out .2s;
   position: relative;
   display: grid;
   place-items: center;
   cursor: pointer;
   backdrop-filter: blur(12px);


   span{
      opacity: 0;
      transform: translateY(4px);
      transition: .3s all cubic-bezier(0.6, -0.28, 0.735, 0.045);
      position: absolute;
      bottom: 2px;
      font-size: 11px;
   }

:hover{
   background: ${props => props.background};
   /* transform: scale(1.1); */

   i{
      transform: translateY(-4px);
   }
   span{
      transform: translateY(-4px);
      opacity: 1;
      
   }


   
}

`

const Icon = styled.div`
   display: grid;
   place-items: center;

   i {
      transition: .3s all cubic-bezier(0.6, -0.28, 0.735, 0.045);
      color: white;
      font-size: 2.5rem;
   }
`
const IconBox = ({ background, icon, hovertext }) => {
   return (
      <InnerBox background={background}>
         <Icon>{icon}</Icon>
         <span>{hovertext}</span>
      </InnerBox>
   )
}

export default IconBox

import React from 'react'
import styled from 'styled-components'
import { themeColors } from '../../data/appColors'
import IconBox from '../IconBox';


const CodeLine = styled.p`
   font-size: .9rem;
`
const Syntax = styled.code`
   color: ${({ col }) => col === '1' ? '#ffffffa1' : col === '2' ? 'blueviolet' : themeColors.secondary};
`
export const ComponentOne = () => {
   return (
      <>
         <CodeLine >
            <Syntax col='2' >import </Syntax>
            <Syntax col='1'>CompScienceDeg </Syntax>
            <Syntax col='2'>from </Syntax>
            <Syntax col='3'>'./FarmingdaleStateCollege'; </Syntax>

         </CodeLine>
         <CodeLine >
            <Syntax col='2' >import </Syntax>
            <Syntax col='1'>ITDeg </Syntax>
            <Syntax col='2'>from </Syntax>
            <Syntax col='3'>'./NassauCommunityCollege'; </Syntax>

         </CodeLine>
         <CodeLine >
            <Syntax col='2' >import </Syntax>
            <Syntax col='1'>WebDevBootCamp </Syntax>
            <Syntax col='2'>from </Syntax>
            <Syntax col='3'>'./google'; </Syntax>

         </CodeLine>

         <br />
         <CodeLine >
            <Syntax col='2'>return</Syntax>
            <Syntax col='1'>(</Syntax>
            <Syntax> Hire Me! </Syntax>
            <Syntax col='1'>)</Syntax>

         </CodeLine>
      </>
   )
}



export const ComponentTwo = () => {
   return (
      <div style={{ display: 'flex', gap: '1.5rem' }}>

         <a href="https://twitter.com/iam_tcb" target="_blank">
            <IconBox
               background={themeColors.primary}
               icon={<i className='bx bxl-twitter' ></i>}
               hovertext="twitter"

            />
         </a>

         <a href="https://github.com/tedtalksbits" target="_blank">
            <IconBox
               background={themeColors.primary}
               icon={<i className='bx bxl-github' ></i>}
               hovertext="github"

            />
         </a>

         <a href="https://www.linkedin.com/in/tedane-blake-042918158/" target="_blank">
            <IconBox
               background={themeColors.primary}
               icon={<i className='bx bxl-linkedin' ></i>}
               hovertext="linkedin"

            />
         </a>

      </div>
   )
}



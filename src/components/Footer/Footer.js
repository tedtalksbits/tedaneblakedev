import React from 'react'
import styled from 'styled-components'
import IconBox from '../IconBox'

const FooterContainer = styled.footer`
   position: relative;
`
const ScrollUpContainer = styled.div`
   position: absolute;
   top: -2rem;
   right: 2rem;

`
const Footer = ({ primary }) => {
   return (
      <FooterContainer id="bottom" style={{ height: '15rem' }}>
         <h1>Footer here big boss</h1>

         <ScrollUpContainer>

            <a href="#top">
               <IconBox
                  icon={<i className='bx bx-up-arrow-alt' ></i>}
                  background={primary}
                  hovertext="top"
               />

            </a>
         </ScrollUpContainer>
      </FooterContainer>
   )
}

export default Footer

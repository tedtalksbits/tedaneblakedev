import React from 'react'
import styled from 'styled-components'
import { themeColors } from '../../data/appColors'
import IconBox from '../IconBox'
import { mixin } from '../NavBar/NavBar'

const FooterContainer = styled.footer`
   position: relative;
   display: grid;
   grid-template-columns: .2fr .2fr .2fr .4fr;
   height:  15rem;
   z-index: 2;
   background: ${themeColors.black};

   @media screen and (max-width: ${mixin}){
      display: block;
      height: 100%;
      
     
   }

   .full-bleed {
      width:100%;
      grid-column: 1 / 4;
   } 
`
const Colomn = styled.div`

   ul{
      text-decoration: none;
      list-style: none;
      color: ${themeColors.white_50};
      
      li{
         display: flex;
         align-items: center;
         gap: 4px;
         
        
      }
   }
  
`
const ScrollUpContainer = styled.div`
   position: absolute;
   top: -2rem;
   right: 2rem;

`
const Footer = ({ primary }) => {
   return (
      <FooterContainer  >
         <ScrollUpContainer>
            <a href="#top">
               <IconBox
                  icon='bx bx-up-arrow-alt'
                  background={primary}
                  hovertext="top"
               />

            </a>
         </ScrollUpContainer>

         <Colomn>
            <ul>
               <li><h3>Contact</h3></li>
               <li>
                  <a href="mailto:blakt7@farmindale.edu" id="email" >Email</a>
                  <i className='bx bx-mail-send'></i>
               </li>
               <li>
                  <a href="linkedin.com">LinkedIn</a>
                  <i className='bx bxl-linkedin-square' ></i>
               </li>
               <li>
                  <a href="https://paypal.me/tedtalks190?country.x=US&locale.x=en_US">
                     Buy Me Coffee
                  </a>
                  <i className='bx bx-coffee-togo' ></i>
               </li>
            </ul>
         </Colomn>
         <Colomn hideOnMobile={true}>
            <ul>
               <li><h3>Other Projects</h3></li>
               <li>Coming Soon...</li>
            </ul>
         </Colomn>
         <Colomn hideOnMobile={true}>
            <ul>
               <li><h3>Phi Theta Kappa</h3></li>
               <li>Member Since 2019</li>
               <li>Learn More</li>
            </ul>
         </Colomn>
         <Colomn>
            <ul>
               <li><h3>Blog</h3></li>
               <li>Coming Soon...</li>
               <li>Illustration by <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a></li>
            </ul>

         </Colomn>

      </FooterContainer>
   )
}

export default Footer

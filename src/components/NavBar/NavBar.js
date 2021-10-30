import React, { useState } from 'react'
import styled from 'styled-components'
import { themeColors } from '../../data/appColors';
import { links } from '../../data/linkData';
import Logo from '../Logo';


export const mixin = '940px';
export const bRadius = '12px';

const Nav = styled.nav`
   /* background: ${props => props.background}; */
   position: fixed;
   width: 100%;
   height: 70px;
   padding: .5rem 1rem;
   backdrop-filter: blur(100px);
   display: flex;
   align-items: center;
   z-index: 2000;
   

`
const NavContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   max-width: 1440px;
   margin: auto;

`

const NavLinksContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 2rem;

`

const NavLinks = styled.div`
   align-items: center;
   justify-content: space-between;
   gap: 2.3rem;
   font-size: 1.2rem;
   transition: .3s;
   display: none;
   backdrop-filter: blur(25px) saturate(6);
   

   @media screen and (min-width: ${mixin}){
      display: flex;
   }
   
`
const NavLinkItem = styled.a`
   padding: .4rem 1.5rem;
   border: 1px white solid;
   border-radius: ${bRadius};
   font-size: 1.875rem;
   transition: .4s ease all;

   @media  screen and (min-width: ${mixin}){
      font-size: .9rem;
   }
   :hover, &.active{
      background: ${themeColors.white_80};
      color: ${themeColors.gradientDark}
   }
`
const MobileMenu = styled.div`
   

   @media screen and (min-width: ${mixin}){
      display: none;
   }
`
const MobileLinksContainer = styled.div`

   display: ${({ openMobile }) => openMobile ? 'grid' : 'none'};
   place-items: center;
   min-height: 100vh;
   width: 100%;
   background: ${themeColors.gradientDark};
   position: absolute;
   left: 0;
   top: 0;
   backdrop-filter: blur(1px);
   animation-duration: .3s;
   transition: all ease .3s;
   overflow: hidden;

   @media screen and (min-width: ${mixin}){
      display: none;
   }
`
const MobileLinks = styled.nav`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   align-items: center;
   justify-content: center;
`

const NavIcon = styled.div`
   width: ${({ small }) => small ? '35px' : '60px'};
   height: ${({ small }) => small ? '25px' : '45px'};
   position: relative;
   transform: rotate(0deg);
   transition: .5s ease-in-out;
   cursor: pointer;
   z-index: 2000;

   & span{
      display: block;
      position: absolute;
      height: ${({ small }) => small ? '5px' : '9px'};
      width: 100%;
      background: ${props => props.color || '#d3531a'};
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;
   }
   & span:nth-child(1) {
      top: 0px;
   }

   & span:nth-child(2) {
      top: ${({ small }) => small ? '12px' : '18px'};
   }

   & span:nth-child(3) {
      top: ${({ small }) => small ? '24px' : '36px'};
   }
   

   & span:nth-child(1) {
         /* top: ${({ small }) => small ? '12px' : '18px'}; */
         transform: ${({ iconOpen }) => iconOpen ? 'rotate(180deg)' : ''};
      }
   

   & span:nth-child(2) {
        
         opacity: ${({ iconOpen }) => iconOpen ? '0' : ''};
         left: ${({ iconOpen }) => iconOpen ? '-60px' : ''};
      }
   

   & span:nth-child(3) {
         /* top: ${({ small }) => small ? '12px' : '18px'}; */
         transform: ${({ iconOpen }) => iconOpen ? 'rotate(180deg)' : ''};
      } 

`



const NavBar = ({ white_80, white }) => {

   const [isOpen, setIsOpen] = useState(false)

   const handleOpen = () => {
      setIsOpen(!isOpen)
      const body = document.getElementById("body");
      if (isOpen === true) {
         body.classList.remove('mobile-no-scroll')
      }
      else {
         body.classList.add('mobile-no-scroll')
      }
   }

   const handleClose = () => {
      setIsOpen(false);
      const body = document.getElementById("body");
      setTimeout(() => {
         body.classList.remove('mobile-no-scroll')
      }, 500)
   }

   // active link

   const removeClass = () => {

      const allLinks = document.querySelectorAll('.my-link');
      allLinks.forEach(link => link.classList.remove('active'));
   }


   const handleActive = (e) => {
      removeClass()
      e.target.classList.add('active')

   }


   return (
      <Nav background={white_80} >
         <MobileLinksContainer openMobile={isOpen} className='animate__animated animate__slideInRight'>

            <MobileLinks className="mobile-links-container" onClick={handleClose}  >
               {links.map((link, index) => (

                  <NavLinkItem href={link.href} key={index} >{link.title}</NavLinkItem>
               ))}

            </MobileLinks>
         </MobileLinksContainer>

         <NavContainer>

            <Logo
               href="https://tedtalksbits.github.io/tedaneblakedev"
               text="TedDev"
               icon="bx bxs-cloud"
            />

            <NavLinksContainer>
               <NavLinks>
                  {links.map((link, index) => (
                     <NavLinkItem href={link.href} key={index} className={link.class} onClick={handleActive}>{link.title}</NavLinkItem>
                  ))}
               </NavLinks>
               <MobileMenu onClick={handleOpen}>
                  <NavIcon small={true} color={white} id="nav-icon" iconOpen={isOpen} >
                     <span></span>
                     <span></span>
                     <span></span>
                  </NavIcon>
               </MobileMenu>
            </NavLinksContainer>

         </NavContainer>
      </Nav>
   )
}

export default NavBar

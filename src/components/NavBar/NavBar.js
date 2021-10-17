import React, { useState } from 'react'
import styled from 'styled-components'


export const mixin = '640px';

const Nav = styled.nav`
   /* background: ${props => props.background}; */
   position: fixed;
   width: 100%;
   height: 70px;
   padding: .5rem 1rem;
   backdrop-filter: blur(55px);
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
const NavLogoContainer = styled.div`
   margin-right: 1rem;
   display: flex;
   align-items: center;
   gap: .4rem;
`
const Logo = styled.h1`
   font-size: clamp(6px,8vw,1.5rem);
   /* font-style: italic; */
   font-weight: 600;
   white-space: nowrap;
   color: #fff;
   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;

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

   @media screen and (min-width: ${mixin}){
      display: flex;
   }
`
const NavLinkItem = styled.a`

   font-size: 3rem;

   @media  screen and (min-width: ${mixin}){
      font-size: 1rem;
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
   height: 100vh;
   width: 100%;
   background: black;
   position: absolute;
   left: 0;
   top: 0;
   backdrop-filter: blur(1px);
   animation-duration: .3s;
   transition: all ease .3s;

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

      if (isOpen == true) {

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
      }, 1000)

   }
   return (
      <Nav background={white_80} >
         <MobileLinksContainer openMobile={isOpen} className='animate__animated animate__slideInRight'>

            <MobileLinks className="mobile-links-container" onClick={handleClose}  >
               <NavLinkItem href="#top">Home</NavLinkItem>
               <NavLinkItem href="#info">More Info</NavLinkItem>
               <NavLinkItem href="#bottom">Go to bottom</NavLinkItem>
            </MobileLinks>
         </MobileLinksContainer>

         <NavContainer>
            <NavLogoContainer>
               <i className='bx bxs-cloud' style={{ fontSize: '2rem', color: '#39fecd' }}></i>
               <a href="#top">

                  <Logo>TedDev</Logo>
               </a>

            </NavLogoContainer>

            <NavLinksContainer>
               <NavLinks>
                  <p>test</p>
                  <NavLinkItem href="#info">More Info</NavLinkItem>
                  <NavLinkItem href="#bottom">Go to bottom</NavLinkItem>
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

import styled from 'styled-components'
import { mixin } from '../NavBar/NavBar'

export const MainContentWrapper = styled.div`

   display: grid;
   grid-template-columns: 1fr min(120ch, 100%) 1fr;
   background: ${props => props.background};
   color: ${props => props.color};
   transition: .3s all;
   width: 100%;
   padding: 2rem 1rem;
   /* margin: 4rem 0; */
   min-height: 50vh;

   > * input{
      color: ${props => props.color};
   }
   > * {
      grid-column: 2;
   }
   > *.full-view {
      width:100%;
      grid-column: 1 / 4;
   }

   @media screen and (min-width: 768px){
      height: 100%;
   }

   

`

export const Container = styled.div`

   margin: 9rem 0;

   @media screen and (max-width: ${mixin}){
      margin: 6.5rem 0;
   }
`

export const Button = styled.a`

   background: ${props => props.background + "a6"};
   padding: .675rem 2.2rem;
   border-radius: 1rem;
   display: block;
   place-items: center;
   border: 1px solid ${props => props.background};
   transition: all ease-in-out .2s;
   cursor: pointer;
   backdrop-filter: blur(12px);
   text-align: center;
   color: ${props => props.color};

   :hover{
      background: ${props => props.hoverBackground}; 
      border: 1px solid ${props => props.hoverBackground};
      color: ${props => props.hoverColor};
   }

`

export const ResponsiveGrid = styled.div`

   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-gap: 1rem;
   
   /* img {
      width: 100%;
      height: 200px;
      object-fit:cover;
   } */
`

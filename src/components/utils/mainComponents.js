import styled from 'styled-components'
import { mixin } from '../NavBar/NavBar'

export const MainContentWrapper = styled.div`

   display: grid;
   grid-template-columns: 1fr min(120ch, 100%) 1fr;
   background: ${props => props.background};
   color: ${props => props.color};
   transition: .3s all;
   width: 100%;
   padding: 4.5rem 1rem 0;

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
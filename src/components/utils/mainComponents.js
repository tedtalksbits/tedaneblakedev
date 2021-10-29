import styled from 'styled-components'

export const MainContentWrapper = styled.div`

   display: grid;
   grid-template-columns: 1fr min(120ch, 100%) 1fr;
   background: ${props => props.background};
   color: ${props => props.color};
   transition: .3s all;
   width: 100%;
   padding: 4.5rem 1rem;

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

   margin: 12.5rem 0;
`
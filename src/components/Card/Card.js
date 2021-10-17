
import styled from 'styled-components'


export const CardContainer = styled.div`

   background: ${props => props.background};
   backdrop-filter: blur(25px) saturate(1.2);
   border-radius: 12px;
   outline: 1px ${props => props.outlineColor} solid; 
   padding: 1rem; 


`

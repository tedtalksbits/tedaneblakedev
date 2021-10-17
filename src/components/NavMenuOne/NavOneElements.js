import styled from 'styled-components';

export const NavMenuOne = styled.div`
   width: ${({ small }) => small ? '35px' : '60px'};
   height: ${({ small }) => small ? '25px' : '45px'};
   position: relative;
   transform: rotate(0deg);
   transition: .5s ease-in-out;
   cursor: pointer;

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

   &.open {
      span:nth-child(1) {
         top: ${({ small }) => small ? '12px' : '18px'};
         transform: rotate(135deg);
      }
   }

   &.open{
      span:nth-child(2) {
         opacity: 0;
         left: -60px;
      }
   } 

&.open{
   span:nth-child(3) {
      top: ${({ small }) => small ? '12px' : '18px'};
      transform: rotate(-135deg);
   } 
}
`
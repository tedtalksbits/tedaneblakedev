import styled from 'styled-components';

export const BlobButton = styled.button`
   align-self: ${props => props.alignment || ''};
   overflow: hidden;
   outline: none;
   display: flex;
   color: ${props => props.color || "#9a02ff"};
   background-color: transparent;
   text-align: center;
   position: relative;
   border: none;
   padding: ${({ small }) => small ? '5px 7px' : '1rem 2rem'};
   border-radius: 4px;
   transition: color calc(0.5s * .75);
   font-weight: 900;
   cursor: pointer;
   align-items: center;
   letter-spacing: 2px;
   justify-content: center;
   z-index: 1;
   font-size: 16px;

   :hover{
      color: ${({ whiteButton }) => whiteButton ? props => props.altColor : 'red'};
      .blob{
         transform: translateZ(0) scale(1.7);
         color: white;
      }
   }
   &::before{
      width: 100%;
      left: 0;
      height: 100%;
      position: absolute;
      border: 3px solid ${props => props.color || "#9a02ff"};
      border-radius: 4px;
      top: 0;
      content: "";
      z-index: 1;
   }
   & > svg{
      display: none;
   }
   & .blob{
      background: ${props => props.color || "#9a02ff"};
   }
   & .blob:nth-child(1) {
      left: 0;
      transition-delay: 0;
   }
   & .blob:nth-child(2) {
      left: calc(120% / 4);
      transition-delay: calc((0.5s * .12) * 1);
   }
   & .blob:nth-child(3) {
      left: calc(2 * (120% / 4));
      transition-delay: calc((0.5s * .12) * 2);
   }
   & .blob:nth-child(4) {
      left: calc(3 * (120% / 4));
      transition-delay: calc((0.5s * .12) * 3);
   }

`
export const Blobs = styled.span`
   
   position: relative;
   display: block;
   height: 100%;
   filter: url('#goo');

`
export const Blob = styled.span`

   position: absolute;
   top: 3px;
   width: calc(100% / 4);
   height: 100%;
   /* background: ${props => props.color || "#9a02ff"}; */
   border-radius: 100%;
   transform: translate3d(0,150%,0) scale(1.7);
   transition: transform 0.5s;

`
export const Inner = styled.span`

   z-index: -1;
   overflow: hidden;
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
`

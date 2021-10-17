import styled from 'styled-components';

export const AnimButton = styled.button`
   overflow: hidden;
   color: #fff;
   background-color: ${props => props.color || '#b60000'};
   position: relative;
   padding: .75rem 1rem;
   border: none;
   border-radius: 4px;
   transition: all 0.15s ease-out;
   cursor: pointer;

   :hover{
      background-color: #f9285b;

      .text{
         transform: translateX(calc(-100% - 3em));
      }
      .icons{
         width: 100%;
         transform: scale(1.3);
      }
   }
   & > .text {
      padding-right: 1.5em;
      display: block;
      position: relative;
      text-transform: uppercase;
      padding: .5em 1em;
      transition: all 0.15s ease-out;
      font-weight: 700;
      border-right: 2px solid rgba(255,255,255,.1);
      letter-spacing: 1px;
      margin-right: 3em;
      font-size: 13px;

   }
   & .cross::after, .cross::before {
      display: block;
      background-color: #fff;
      margin-left: auto;
      width: 1em;
      left: 0;
      height: .2em;
      position: absolute;
      transition: all 0.15s ease-out;
      content: "";
      right: 0;
      margin-right: auto;
   }
 
   & .cross {
      margin-top: -2px;
   }
   & .cross::after {
      transform: rotate(45deg);
   }
   & .cross::before {
      transform: rotate(-45deg);
   }
   & > .icons {
      display: flex;
      width: 3em;
      height: 100%;
      position: absolute;
      flex-direction: column;
      top: 0;
      transition: all 0.15s ease-out;
      align-items: center;
      right: 0;
      justify-content: center;
   }

`
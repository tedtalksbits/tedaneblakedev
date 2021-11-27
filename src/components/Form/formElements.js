import styled from "styled-components";
import { themeColors } from "../../data/appColors";


export const InputContainer = styled.div`
   padding: .75rem 1rem;
   border-radius: 0.28571429rem;
   background: ${themeColors.white_40};
   display: flex;
   align-items: center;
   gap: .2rem;
   border: 1px ${themeColors.white_20} solid;
   margin: 0 0 1.2rem;

   :active, :focus{
      border: 1px ${themeColors.primary_90} solid;
   }

`

export const Input = styled.input`
   background: transparent;
   border: none;
   padding: none;
   outline: none;
   color: ${themeColors.white};
   width: 100%;
   font-size: 1.5em;

   ::placeholder{
      color: ${themeColors.white_60};
      font-size: .875em;
      text-transform: capitalize;
   }

   
`

export const TextArea = styled.textarea`

   margin: 0;
   padding: .75rem 1rem;
   border: 1px ${themeColors.white_20} solid;
   resize: vertical;
   font-size: 1em;
   min-height: 8rem;
   max-height: 24rem;
   border-radius: 0.28571429rem;
   transition: all ease .2s;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   background: ${themeColors.white_40};
   color: ${themeColors.white};
   font-size: 1.5em;

   :focus{
      /* border: 1px ${themeColors.primary} solid; */
      outline: 1px ${themeColors.primary} solid;
   }
   ::placeholder{
      color: ${themeColors.white_60};
      font-size: .875em;
      text-transform: capitalize;
   }

`

export const FormButton = styled.button`

   background: ${props => props.background + "a6"};
   padding: .675rem 2.2rem;
   border-radius: 1rem;
   display: inline-block;
   place-items: center;
   border: 1px solid ${props => props.background};
   transition: all ease-in-out .2s;
   cursor: pointer;
   backdrop-filter: blur(12px);
   text-align: center;
   color: ${props => props.color};
   font-size: 1.2rem;

   :hover{
      background: ${props => props.hoverBackground}; 
      border: 1px solid ${props => props.hoverBackground};
      color: ${props => props.hoverColor};
   }

`
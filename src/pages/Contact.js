import React from 'react'
import { FormButton, Input, InputContainer, TextArea } from '../components/Form/formElements'
import { MainContentWrapper } from '../components/utils/mainComponents'
import { themeColors } from '../data/appColors'
import styled from 'styled-components'
import leftImage from '../images/gradient-left-dark-next-ui.svg'
import rightImage from '../images/gradient-right-dark-next-ui.svg'
import pattern from '../images/positive.png'
import { Heading } from './InfoSection'

const Background = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   width: 100%;
   mix-blend-mode: multiply;
   opacity: .4;
   z-index: 0;
   background: linear-gradient(transparent, transparent), url(${pattern});
   grid-column: 1 / 4;
   
`
const BgLeft = styled.div`
   
   position: absolute;
   z-index: 0;
   top: 0;
   left: 0;
  
   img{
      width: 100%;
   }
   
`
const BgRight = styled.div`
   position: absolute;
   z-index: 0;
   top: 0;
   right: 0;
   img{
      width: 100%;
   }
   
`
const Contact = () => {
   return (
      <MainContentWrapper id="contact" className="section" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
         <Background className='pattern-bg' />
         <BgLeft className="left">
            <img src={leftImage} alt="left gradient" className="left" />

         </BgLeft>
         <BgRight className="right">
            <img src={rightImage} alt="left gradient" className="left" />

         </BgRight>
         <Heading style={{ zIndex: 2 }}>Contact</Heading>
         <div className="form-container" style={{ display: 'flex', justifyContent: 'center', zIndex: 2 }}>

            <form className="form" style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', width: '100%' }}>

               <p style={{ marginBottom: '30px', color: themeColors.white_60, fontWeight: 300 }}>Have Questions? Ask Me Anything!</p>
               <InputContainer className="parent">
                  <Input type="text" placeholder="name" required />
               </InputContainer>
               <InputContainer>
                  <Input type="email" placeholder="email" required />
               </InputContainer>

               <TextArea rows="12" required placeholder="message" />
               <div className="submit" style={{ margin: '2rem 0' }}>
                  <FormButton background={themeColors.primary} hoverBackground={themeColors.primary} color={themeColors.white_80} hoverColor={themeColors.white} type="submit" >Send</FormButton>
               </div>

            </form>
         </div>

      </MainContentWrapper>
   )
}

export default Contact

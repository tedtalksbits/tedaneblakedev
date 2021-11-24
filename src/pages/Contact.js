import React from 'react'
import { FormButton, Input, InputContainer, TextArea } from '../components/Form/formElements'
import { Button, MainContentWrapper } from '../components/utils/mainComponents'
import { themeColors } from '../data/appColors'

const Contact = () => {
   return (
      <MainContentWrapper id="contact" className="section" style={{ minHeight: '100vh' }}>
         <h1>Contact</h1>
         <div className="form-container" style={{ display: 'flex', justifyContent: 'center' }}>

            <form className="form" style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', width: '100%' }}>

               <InputContainer>
                  <Input type="text" placeholder="name" required />
               </InputContainer>
               <InputContainer>
                  <Input type="email" placeholder="email" required />
               </InputContainer>

               <TextArea rows="12" required />
               <div className="submit" style={{ margin: '2rem 0' }}>
                  <FormButton background={themeColors.primary} hoverBackground={themeColors.primary} color={themeColors.white_80} hoverColor={themeColors.white} type="submit" value="submit" />
               </div>

            </form>
         </div>

      </MainContentWrapper>
   )
}

export default Contact

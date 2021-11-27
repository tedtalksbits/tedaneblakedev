import styled from "styled-components";


export const Card = styled.div`
   display: flex;
   flex-direction: column;
   /* max-width: 445px; */
   justify-content: flex-start;
   align-items: flex-start;
   border-radius: 8px;
   box-shadow: 0px 10px 20px 0px rgba(41, 41, 42, 0.07000000029802322);
   padding-top: 32px;
   padding-bottom: 32px;
   padding-right: 32px;
   padding-left: 32px;
   background-color: rgba(255, 255, 255, .11);

   .brandlogo{
      height: 46px;
   }
   .text-content{
      margin-top: 30px;
   }
   img{
      object-fit: contain;
      object-position: center;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
   }
   .quote-img{
      height: 16px;
      width: 16px;
      opacity: .4;
   }
   .quote-text, .details{
      margin-left: 15px;
   }
   .quote-text{
      margin-bottom: 24px;
   }
   .person{
      color: white;
      font-size: 18px;
      line-height: 28px;
   }
   .title, .company{
      color: rgba(150, 155, 171, 1);
      font-size: 14px;
      line-height: 24px
   }

`
export const BrandLogo = styled.div`
   display: flex;
   position: relative;
   min-width: 20px;
   min-height: 20px;
   max-width: 130px;
   justify-content: flex-start;
   align-items: flex-start;
   width: 130px;

   img{
      object-fit: contain;
      object-position: center;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
   }
`

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 381px;
   margin-top: 32px;
`

export const QuoteImageContainer = styled.div`
   display: flex;
   position: relative;
   min-width: 20px;
   min-height: 20px;
   max-width: 15.929831504821777px;
   width: 15.929831504821777px;
`
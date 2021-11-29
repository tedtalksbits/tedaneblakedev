import React, { useState } from 'react'
import styled from 'styled-components'
import { themeColors } from '../../data/appColors'

const Card = styled.div`
border-radius: 8px;
overflow: hidden;
max-height: 655px;  
background: ${themeColors.black_80};
box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

   .img{
      overflow: hidden;
     

   }
   img{
      width: 100%;
      object-fit: cover;
      transition: transform .3s linear;
     
      :hover{
         transform: scale(1.2);
      }
   }

.content{
   padding: 1.3rem 1.9rem;
}

.light{
   font-size: 14px;
   color: ${themeColors.white_30};
   margin-bottom: 10px;
   text-transform: capitalize;

}
.heading{
   font-size: 24px;
   font-weight: 500;
   line-height: 32px;
   color: ${themeColors.white_90};
   margin-bottom: 14px;
   text-transform: capitalize;
}

.content-top{
   margin-bottom: 30px;
}
.content-bottom{
   display: flex;
   flex-direction: column;

   & > a{
      margin-right: auto;
   }
}
.tags{
   display: flex;
   flex-wrap: wrap;
   margin-bottom: 20px;
   text-transform: capitalize;
}

.tag{
   font-weight: 400;
   font-size: 12px;
   line-height: 24px;
   color: ${themeColors.white_80};
   text-transform: capitalize;
   margin: 0 7px 5px 0;
   border: 1px ${themeColors.black_60} solid;
   border-radius: 9px;
   padding: 3px 5px;
   background: ${themeColors.black_40};
}
.primary{
   color: ${themeColors.secondary};
   text-transform: capitalize;
   border: 1px ${themeColors.secondary}aa solid;
   border-radius: 9px;
   padding: 3px 15px;
   background: ${themeColors.secondary}21;
   transition: all ease .3s;
  

   :hover{
      background: ${themeColors.secondary};
      color: ${themeColors.black_80}
   }
}
.project-action{
   display: flex;
   justify-content: space-between;
}
`

const DescriptionText = styled.p`


   font-size: 16px;
   line-height: 26px;
   font-weight: 300;
   color: ${themeColors.white_60};
   text-transform: capitalize;
   user-select: none;
   text-overflow: ellipsis;
   overflow: hidden;
   height: 40px;
   white-space: ${({ viewMore }) => viewMore ? 'normal' : 'nowrap'};
   cursor: pointer;
   transition: all .5s ease-in-out;
   animation:${({ viewMore }) => viewMore ? 'showText' : 'hideText'} .3s ease forwards;


   @keyframes showText {
      0%{

         height: 40px;
      };
      100%{

         height: 80px;
      };
   }
   @keyframes hideText {
      0%{

         height: 80px;
      };
      100%{

         height: 40px;
      };
   }

`
const ImgCard = ({ img, title, tags, link, type, desc, demo }) => {

   const [viewMore, setViewMore] = useState(false);
   return (
      <Card className="image-card">
         <div className="img">
            <img src={img || `https://images.unsplash.com/photo-1592179900370-57ae776846a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60`} alt="card" />
         </div>
         <div className="content">
            <div className="content-top">
               <p className="light">{type || 'Item'}</p>
               <p className="heading">{title || 'Title'}</p>
               <DescriptionText className="thin description" viewMore={viewMore} onClick={() => setViewMore(!viewMore)}>{desc}</DescriptionText>
            </div>
            <div className="content-bottom">
               <div className="tags">
                  {tags.map((tag, key) => (
                     <p className="normal tag" key={key}>{tag}</p>

                  ))}
               </div>
               <div className="project-action">

                  <a href={link} className="link primary">View</a>
                  {demo &&
                     <a href={demo} target="_blank" className="link primary">Demo</a>
                  }
               </div>
            </div>
         </div>
      </Card>
   )
}

export default ImgCard

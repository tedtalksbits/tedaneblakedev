import React from 'react'
import { BlobButton, Blobs, Inner, Blob } from './BlobbyElements'
function index({ color, text, alignment, whiteButton, altColor, small }) {
   return (
      <BlobButton small={small} color={color} alignment={alignment} whiteButton={whiteButton} altColor={altColor} className="animate__animated animate__fadeIn">{text}
         <Inner className="inner">
            <Blobs className="blobs">
               <Blob className="blob"></Blob>
               <Blob className="blob"></Blob>
               <Blob className="blob"></Blob>
               <Blob className="blob"></Blob>
            </Blobs>
         </Inner>
         <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
               <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                     result="goo"></feColorMatrix>
                  <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
               </filter>
            </defs>
         </svg>
      </BlobButton>
   )
}

export default index

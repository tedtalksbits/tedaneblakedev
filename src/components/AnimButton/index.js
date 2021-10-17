import React from 'react';
import { AnimButton } from './AnimButtonElements';

function index({ color, text}) {
   return (
      <AnimButton className="close-button" color={color}>
         <span className="text">{text}</span>
         <div className="icons">
            <div className="cross"></div>
            <div className="check"></div>
         </div>
      </AnimButton>
   )
}

export default index;

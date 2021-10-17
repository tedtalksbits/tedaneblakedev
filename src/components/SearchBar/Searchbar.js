import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.form`
   display: flex;
   padding: 9px .875rem;
   border: 1px ${props => props.bordercolor} solid;
   border-radius: 5px;
   gap: 7px;
   align-items: center;
   transition: all .5s ease;
   color: ${props => props.textColor};
   position: relative;
   

   &:hover, &:active{
      background: ${props => props.hoverBackgrund};
      color: ${props => props.color};

      > input.search_input{
         color: ${props => props.color};
      }
   }

   & > input.search_input{
      background: transparent;
      border: none;
      outline: none;
      outline-width: 0;
      font-size: 1.2rem;
      color: ${props => props.textColor};
      width: 100%;

      ::placeholder{
         color: ${props => props.placeholderColor};
      }
   }


`
const Searchbar = ({ type, placeholderColor, textColor, color, bordercolor, hoverBackgrund }) => {
   const change = (e) => {
      console.log(e.target.value);
   }

   const [showText, setShowText] = useState(false);
   const focus = (e) => {
      console.log("focused")
      setShowText(!showText);
      setTimeout(() => {
         setShowText(false)
      }, 3000)
   }

   const [inputVal, setInputVal] = useState("");


   return (

      <Container
         bordercolor={bordercolor}
         color={color}
         textColor={textColor}
         hoverBackgrund={hoverBackgrund}
         placeholderColor={placeholderColor}
         onSubmit={(e) => {
            e.preventDefault();
            console.table(inputVal, "<- value submitted");
            setInputVal('')
         }}>

         <i className="bx bx-search-alt"></i>
         <input
            type={type}
            name="search"
            className="search_input"
            placeholder="email"
            onChange={(e) => setInputVal(e.target.value)}
            onFocus={focus}
            value={inputVal}






         />
         {showText ? <p style={{ position: 'absolute', bottom: '-20px', left: 0 }}>press enter to submit</p> : null}
      </Container>

   )
}

export default Searchbar

import React from 'react'
import Header from '../components/Header/Header'


const HomePage = ({ ...themeColors }) => {
   return (
      <>

         <Header {...themeColors} />

      </>
   )
}

export default HomePage

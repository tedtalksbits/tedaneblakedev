import React from 'react'
import styled from 'styled-components'

const LogoLink = styled.a`
   text-decoration: none;

`
const LogoContainer = styled.div`
   margin-right: 1rem;
   display: flex;
   align-items: center;
   gap: .4rem;
`
const LogoText = styled.h1`
   font-size:  ${props => props.textSize || 'clamp(6px, 8vw, 1.5rem)'};
   /* font-style: italic; */
   font-weight: 600;
   white-space: nowrap;
   color: ${props => props.textColor || '#fff'};
   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;

`
const Icon = styled.i`
   font-size : ${props => props.iconSize || '2rem'};
   color: ${props => props.iconColor || '#39fecd'};

`

const Logo = ({ text, textSize, textColor, icon, iconSize, iconColor, href }) => {
   return (
      <LogoLink href={href}>

         <LogoContainer>
            <Icon className={icon} iconSize={iconSize} iconColor={iconColor} />
            <LogoText textSize={textSize} textColor={textColor}>{text ? text : 'logo here'}</LogoText>
         </LogoContainer>
      </LogoLink>
   )
}

export default Logo

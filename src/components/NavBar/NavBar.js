import React, { useState } from "react";
import styled from "styled-components";
import { links } from "../../data/linkData";
import Logo from "../Logo";

export const mixin = "940px";
export const bRadius = "12px";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 70px;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(100px);
  display: flex;
  align-items: center;
  z-index: 2000;
  transition: background 2s ease;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const NavLinks = styled.div`
  align-items: center;
  justify-content: space-between;
  gap: 2.3rem;
  font-size: 1.2rem;
  transition: 0.3s;
  display: none;

  @media screen and (min-width: ${mixin}) {
    display: flex;
  }
`;
const NavLinkItem = styled.a`
  padding: 0.4rem 1.5rem;
  position: relative;
  font-size: 1.875rem;
  transition: 0.4s ease all;
  color: ${({ theme }) => theme.white_60};

  @media screen and (min-width: ${mixin}) {
    font-size: 0.9rem;
  }
  :hover {
    color: ${({ theme }) => theme.white};
  }
  &.active {
    color: ${({ theme }) => theme.white};
    ::after {
      content: "";
      width: 7px;
      height: 7px;
      position: absolute;
      background: ${({ theme }) => theme.primary};
      left: 50%;
      border-radius: 20px;
      animation: dot 0.4s linear forwards;

      @keyframes dot {
        0% {
          opacity: 0;
          bottom: -20px;
        }
        100% {
          opacity: 1;
          bottom: -5px;
        }
      }
    }
  }
`;
const MobileMenu = styled.div`
  @media screen and (min-width: ${mixin}) {
    display: none;
  }
`;
const MobileLinksContainer = styled.div`
  display: ${({ openMobile }) => (openMobile ? "grid" : "none")};
  place-items: center;
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.gradientDark};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(1px);
  animation-duration: 0.3s;
  transition: all ease 0.3s;
  overflow: hidden;

  @media screen and (min-width: ${mixin}) {
    display: none;
  }
`;
const MobileLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

const NavIcon = styled.div`
  width: ${({ small }) => (small ? "35px" : "60px")};
  height: ${({ small }) => (small ? "25px" : "45px")};
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 2000;

  & span {
    display: block;
    position: absolute;
    height: ${({ small }) => (small ? "5px" : "9px")};
    width: 100%;
    background: ${({ theme }) => theme.white};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  & span:nth-child(1) {
    top: 0px;
  }

  & span:nth-child(2) {
    top: ${({ small }) => (small ? "12px" : "18px")};
  }

  & span:nth-child(3) {
    top: ${({ small }) => (small ? "24px" : "36px")};
  }

  & span:nth-child(1) {
    /* top: ${({ small }) => (small ? "12px" : "18px")}; */
    transform: ${({ iconOpen }) => (iconOpen ? "rotate(180deg)" : "")};
  }

  & span:nth-child(2) {
    opacity: ${({ iconOpen }) => (iconOpen ? "0" : "")};
    left: ${({ iconOpen }) => (iconOpen ? "-60px" : "")};
  }

  & span:nth-child(3) {
    /* top: ${({ small }) => (small ? "12px" : "18px")}; */
    transform: ${({ iconOpen }) => (iconOpen ? "rotate(180deg)" : "")};
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    const body = document.getElementById("body");
    if (isOpen === true) {
      body.classList.remove("mobile-no-scroll");
    } else {
      body.classList.add("mobile-no-scroll");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    const body = document.getElementById("body");
    setTimeout(() => {
      body.classList.remove("mobile-no-scroll");
    }, 500);
  };

  return (
    <Nav className="navbar nav" id="navbar">
      <MobileLinksContainer
        openMobile={isOpen}
        className="animate__animated animate__slideInRight mobile__container"
      >
        <MobileLinks className="mobile-links-container" onClick={handleClose}>
          {links.map((link, index) => (
            <NavLinkItem href={link.href} key={index}>
              {link.title}
            </NavLinkItem>
          ))}
        </MobileLinks>
      </MobileLinksContainer>

      <NavContainer>
        <Logo
          href="https://tedtalksbits.github.io/tedaneblakedev"
          text="TedDev"
          icon="bx bxs-cloud"
        />

        <NavLinksContainer>
          <NavLinks>
            {links.map((link, index) => (
              <NavLinkItem href={link.href} key={index} className={link.class}>
                {link.title}
              </NavLinkItem>
            ))}
          </NavLinks>
          <MobileMenu onClick={handleOpen}>
            <NavIcon small={true} id="nav-icon" iconOpen={isOpen}>
              <span></span>
              <span></span>
              <span></span>
            </NavIcon>
          </MobileMenu>
        </NavLinksContainer>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;

import styled, { keyframes } from "styled-components";
import { HashLink } from "react-router-hash-link";
import { IoMenu, IoClose } from "react-icons/io5";

const MobileMenuAnimation = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 32dvh;
  }
`;

const MobileMenuItemsAnimation = keyframes`
  0% {
    padding-top: 0;
    display: none;
  }
  100% {
    padding-top: 2rem;
    display: flex;
  }
`;

const SlideInIconsAnimation = keyframes`
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Wrapper = styled.nav`
  padding: 1rem 0;
  width: 100vw;
  z-index: 200;
  position: fixed;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
`;

export const Title = styled(HashLink)`
  padding-left: 2rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;

export const HamburgerButton = styled.button`
  transition: 0.5s;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
`;

export const MenuContainer = styled.div`
  height: 32dvh;
  animation-name: ${MobileMenuAnimation};
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-duration: 0.25s;
  @media (min-height: 550px) and (max-height: 796px) {
    height: 37dvh;
    gap: 1.25rem;
  }
  @media (max-height: 550px) {
    padding-bottom: 3rem;
    gap: 1rem;
  }
`;

export const MenuItems = styled.ul`
  padding-top: 2rem;
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  animation-name: ${MobileMenuItemsAnimation};
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-duration: 1s;
  @media (min-height: 550px) and (max-height: 796px) {
    gap: 1.25rem;
  }
  @media (max-height: 550px) {
    gap: 1rem;
  }
`;

export const MenuItem = styled(HashLink)`
  transition: 0.3s;
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media (hover: none) {
    &:active {
      color: #919191;
    }
  }
`;

export const SvgMenuIcon = styled(IoMenu)`
  color: ${({ theme }) => theme.text};
  padding-top: 0.7rem;
  padding-right: 0.5rem;
  width: 2rem;
  height: 2rem;

  animation-name: ${SlideInIconsAnimation};
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-duration: 0.65s;
`;

export const SvgCloseMenuIcon = styled(IoClose)`
  color: ${({ theme }) => theme.text};
  padding-top: 0.7rem;
  padding-right: 0.5rem;
  width: 2rem;
  height: 2rem;
  &:hover {
    color: #919191;
  }

  animation-name: ${SlideInIconsAnimation};
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-duration: 0.65s;
`;

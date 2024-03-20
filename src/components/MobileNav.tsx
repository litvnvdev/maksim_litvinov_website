import styled, { keyframes } from "styled-components";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

type MobileProps = {
  children?: React.ReactNode;
  toggleBurger?: string;
};

const MobileNav = (props: MobileProps) => {
  const [toggleBurger, setToggleBurger] = useState(false);

  const handleBurger = () => {
    setToggleBurger((prev) => !prev);
  };
  const menuItems = ["Home", "About", "Portfolio", "Contact"];
  return (
    <MobileMenu.Wrapper>
      <MobileMenu.Title>Litvinov.dev</MobileMenu.Title>
      <MobileMenu.HamburgerButton onClick={handleBurger}>
        {toggleBurger ? (
          <MobileMenu.SvgCloseMenuIcon />
        ) : (
          <MobileMenu.SvgMenuIcon />
        )}
      </MobileMenu.HamburgerButton>
      {toggleBurger && (
        <MobileMenu.Container>
          <MobileMenu.Items>
            {menuItems.map((el) => (
              <MobileMenu.Item key={el}>{el}</MobileMenu.Item>
            ))}
            {props.children}
          </MobileMenu.Items>
        </MobileMenu.Container>
      )}
    </MobileMenu.Wrapper>
  );
};

const MobileMenuAnimation = keyframes`
0%{
  height: 0;
}
100%{
  height: 32dvh;
}

`;

const MobileMenuItemsAnimation = keyframes`
  0%{
    padding-top:0;
    display: none;
  }
  100%{
    padding-top:2rem;
    display:flex;

  }
`;
const SlideInIconsAnimation = keyframes`
  0%{
    transform:translateX(50%);
  }
  100%{
    transform:translateX(0);
  }
`;
const MobileMenu = {
  Wrapper: styled.nav`
    padding: 1rem 0;
    width: 100vw;
    z-index: 200;
    position: fixed;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  `,
  Title: styled.h3`
    padding-left: 2rem;
    font-weight: 600;
  `,
  HamburgerButton: styled.button<MobileProps>`
    transition: 0.5s;
    display: ${(props) => props.toggleBurger};
    position: absolute;
    top: 0;
    right: 0;

    border: none;
    background: transparent;
  `,
  Container: styled.div`
    height: 32dvh;
    animation-name: ${MobileMenuAnimation};
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-duration: 0.25s;
    @media (min-height: 550px) and (max-height: 796px) {
      height: 37dvh;
      gap: 1.25rem;
    }
    @media (max-height: 550px){
      padding-bottom: 3rem;
      gap: 1rem;
    }
  `,
  Items: styled.ul`
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
    @media (max-height: 550px){
      gap: 1rem;
    }
  `,
  Item: styled.li`
    font-weight: 500;
    font-size: 0.9rem;
    &:hover {
      color: #919191;
    }
  `,
  SvgMenuIcon: styled(IoMenu)`
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
  `,
  SvgCloseMenuIcon: styled(IoClose)`
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
  `,
};

export default MobileNav;

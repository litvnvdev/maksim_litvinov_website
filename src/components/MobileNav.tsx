import styled from "styled-components";
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
          <IoClose style={{ paddingTop: "0.7rem" }} size={35} />
        ) : (
          <IoMenu style={{ paddingTop: "0.7rem" }} size={35} />
        )}
      </MobileMenu.HamburgerButton>
      {toggleBurger && (
        <MobileMenu.Container>
          <MobileMenu.Items>
            {menuItems.map((el) => (
              <MobileMenu.Item>{el}</MobileMenu.Item>
            ))}
            {props.children}
          </MobileMenu.Items>
        </MobileMenu.Container>
      )}
    </MobileMenu.Wrapper>
  );
};

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
    display: ${(props) => props.toggleBurger};
    position: absolute;
    top: 0;
    right: 0;

    border: none;
    background: transparent;
  `,
  Container: styled.div`
    height: 32dvh;
  `,
  Items: styled.ul`
    padding-top: 3rem;
    display: flex;
    list-style: none;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  `,
  Item: styled.li`
    font-size: 0.9rem;
  `,
};

export default MobileNav;

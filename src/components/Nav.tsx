import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

type NavProps = {
  children: React.ReactNode;
};

export const NavMenu = styled.nav`
  position: fixed;
  z-index: 200;
  font-size: 1.1rem;
  font-weight: 500;
  width: 100%;
  padding: 1.5rem 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  /* background: #2d2e32; */

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  max-width: 50vw;
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 1rem;
  }
`;

const NavLink = styled(HashLink)`
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  &:hover,
  &:focus {
    color: #919191;
  }
  &:active {
    color: #919191;
  }
`;
const Nav = (props: NavProps) => {
const navLinks = [
    { name: "Home", id: 1, anchor: "#home" },
    { name: "About", id: 2, anchor: "#about" },
    { name: "Portfolio", id: 3, anchor: "#portfolio" },
    { name: "Contact", id: 4, anchor: "#contact" },
  ];

  // ====smooth scroll to anchor only JS====//

  // const goToContact = (anchor:string) => {
  //   const element = document.querySelector(anchor);
  //   if (element != null) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   } else {
  //     console.log('empty anchor');
  //     ;
  //   }
  // };

  return (
    <NavMenu>
      <h3 style={{ paddingLeft: "3rem", cursor: "pointer" }}>
        <NavLink smooth to="#home">
          Litvinov.dev
        </NavLink >
      </h3>
      <List>
        {navLinks.map((el) => (
          <NavLink smooth to={el.anchor} key={el.id}>
              {el.name}
          </NavLink>
        ))}

        {props.children}
      </List>
    </NavMenu>
  );
};
export default Nav;

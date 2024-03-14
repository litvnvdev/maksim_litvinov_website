
import styled from "styled-components";

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

const NavLink = styled.li`
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #919191;
  }
`;
const Nav = (props: NavProps) => {
  const navLinks: string[] = ["Home", "About", "Portfolio", "Contact"];

  return (
    <NavMenu>
      <h3 style={{ paddingLeft: "3rem", cursor: "pointer" }}>Litvinov.dev</h3>
      <List>
        {navLinks.map((el, id) => (
          <NavLink key={el + id}>{el}</NavLink>
        ))}
        {props.children}
      </List>
    </NavMenu>
  );
};

export default Nav;

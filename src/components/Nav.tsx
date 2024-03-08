import styled from "styled-components";

type NavProps = {
  children: React.ReactNode;
};

const NavMenu = styled.nav`
  position: fixed;
  z-index: 200;
  font-size: 1.1rem;
  width: 100%;
  padding: 20px 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  /* background: #2d2e32; */
`;
const List = styled.ul`
  padding-right: 1rem;
  max-width: 50vw;
  display: flex;
  gap: 2rem;
  justify-content: space-around;
`;

const NavLink = styled.li`
  cursor: pointer;
`;
const Nav = (props: NavProps) => {
  const navLinks: string[] = ["Home", "About", "Portfolio", "Contact"];
  return (
    <NavMenu>
      <h3 style={{ paddingLeft: "3rem" }}>Litvinov.dev</h3>
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

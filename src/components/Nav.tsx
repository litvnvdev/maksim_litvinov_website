import styled from "styled-components";

type NavProps = {
  children: React.ReactNode;
};

const NavMenu = styled.nav`
  font-size: 1.1rem;
  width: 100%;
  z-index: 200;
  position: fixed;
  padding: 20px 0 20px 40px;
  height: auto;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  background: ${({ theme }) => theme.backgorund};
`;
const List = styled.ul`
  padding-right: 20px;
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
      <h3>Litvinov.dev</h3>
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

import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

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

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const List = styled.ul`
  max-width: 50vw;
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 1rem;
  }
`;

export const NavLink = styled(HashLink)`
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

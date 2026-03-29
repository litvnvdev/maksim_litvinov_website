import styled from "styled-components";

import { Wrapper, Container, Content } from "../../styles/styles";

export const ExtendContainer = styled(Container)`
  background: ${({ theme }) => theme.darkerBg};
`;

export const ExtendWrapper = styled(Wrapper)`
  background: ${({ theme }) => theme.darkerBg};
`;

export const ExtendContent = styled(Content)`
  background: ${({ theme }) => theme.darkerBg};
`;

export const Grid = styled.div`
  background: ${({ theme }) => theme.darkerBg};
  max-width: 100rem;
  margin-top: 3rem;
  display: flex;
  gap: 3rem;

  @media (min-width: 490px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media (min-width: 56px) and (max-width: 490px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  padding-bottom: 0.5rem;
`;

export const Link = styled.a`
  transition: 0.3s;
  cursor: pointer;
  color: currentColor;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.link};
  }
`;

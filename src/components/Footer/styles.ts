import styled from "styled-components";

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.footerBg};
  color: ${({ theme }) => theme.footerText};
  padding: 3rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 56px) and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  @media (min-width: 56px) and (max-width: 768px) {
    gap: 2rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  @media (min-width: 56px) and (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const Link = styled.a`
  transition: 0.3s;
  cursor: pointer;
  color: currentColor;
  text-decoration: none;

  &:hover {
    color: #919191;
  }
`;

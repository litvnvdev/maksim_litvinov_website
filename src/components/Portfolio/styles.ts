import styled from "styled-components";

/** Radius used on portfolio cards (image area inherits via overflow on shell). */
export const PORTFOLIO_CARD_RADIUS = "14px";

export const PortfolioContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.35rem;
  align-items: stretch;

  @media (max-width: 768px) {
    margin-top: 2.5rem;
    grid-template-columns: 1fr;
    gap: 1.15rem;
    max-width: 26rem;
  }
`;

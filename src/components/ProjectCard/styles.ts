import styled from "styled-components";

import { PORTFOLIO_CARD_RADIUS } from "../Portfolio/styles";

export const CardRoot = styled.article`
  height: 100%;
  min-width: 0;
`;

export const CardShell = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: ${PORTFOLIO_CARD_RADIUS};
  overflow: hidden;
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 2px 16px ${({ theme }) => theme.shadow};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 28px ${({ theme }) => theme.shadow};
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 1.15rem 1.15rem;
  min-width: 0;
  gap: 0.65rem;
`;

export const CardTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
  color: ${({ theme }) => theme.text};
`;

export const Summary = styled.p`
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.pText};
`;

export const MetaBlock = styled.div`
  margin-top: 0.15rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const MetaLabel = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.pText};
  opacity: 0.9;
`;

export const TeamText = styled.p`
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.45;
  color: ${({ theme }) => theme.text};
`;

export const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

export const StackChip = styled.span`
  font-size: 0.68rem;
  font-weight: 500;
  padding: 0.2rem 0.45rem;
  border-radius: 6px;
  line-height: 1.3;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.darkerBg};
  border: 1px solid ${({ theme }) => theme.border};
`;

export const ImageButton = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  border: none;
  background: ${({ theme }) => theme.darkerBg};
  cursor: pointer;
  overflow: hidden;
  line-height: 0;
  flex-shrink: 0;
  aspect-ratio: 16 / 10;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.border};
    outline-offset: -2px;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.75rem;
  align-items: center;
`;

export const DetailsButton = styled.button`
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.darkerBg};
  color: ${({ theme }) => theme.text};
  transition: background 0.2s, color 0.2s, border-color 0.2s;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.link};
  }
`;

export const CardLink = styled.a`
  font-size: 0.86rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.link};
  }
`;

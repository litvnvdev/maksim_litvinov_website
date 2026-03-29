import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Dialog = styled.div`
  position: relative;
  width: min(42rem, 100%);
  max-height: min(90vh, 900px);
  overflow: auto;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  box-shadow: 0 20px 50px ${({ theme }) => theme.shadow};
  padding: 1.25rem 1.25rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  animation: popIn 0.22s ease;

  @keyframes popIn {
    from {
      opacity: 0;
      transform: translateY(8px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.65rem;
  right: 0.65rem;
  width: 2.25rem;
  height: 2.25rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.35rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.darkerBg};
  color: ${({ theme }) => theme.text};
  transition: background 0.2s, color 0.2s;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.link};
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 600;
  margin: 0 2.5rem 1rem 0;
  padding-right: 0.5rem;
  line-height: 1.25;
`;

export const Media = styled.img`
  display: block;
  width: 100%;
  max-height: min(50vh, 420px);
  object-fit: contain;
  border-radius: 12px;
  background: ${({ theme }) => theme.darkerBg};
  margin-bottom: 1rem;
`;

export const Body = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.pText};
  margin-bottom: 1rem;
  white-space: pre-wrap;
`;

export const MetaPanel = styled.div`
  margin-bottom: 1rem;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.darkerBg};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const MetaBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const MetaLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.pText};
`;

export const TeamText = styled.p`
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
`;

export const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const StackChip = styled.span`
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.border};
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
`;

export const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.link};
  }
`;

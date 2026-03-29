import styled from "styled-components";

import { Wrapper, Container, Content } from "../../styles/styles";
import meAtWork from "../../assets/images/meAtWork2.png";

export const AboutContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 100rem;
  width: 100%;

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin: 1rem auto;
    gap: 2.5rem;
  }
  @media (min-width: 425px) and (max-width: 1023px) {
    margin: 0 auto;
    gap: 2.5rem;
    max-width: 70rem;
    flex-direction: column-reverse;
    align-items: center;
  }

  @media (min-width: 56px) and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    max-width: 50rem;
    margin: 1rem auto;
    gap: 2rem;
  }
`;

export const AboutImgBlock = styled.div`
  flex-shrink: 0;
  box-shadow: 5px 10px 25px 1px ${({ theme }) => theme.shadow};
  background-position: 30% 40%;
  background-size: cover;
  background-image: url(${meAtWork}),
    linear-gradient(
      242deg,
      rgba(54, 53, 55, 1) 0%,
      rgba(249, 249, 249, 1) 100%
    );
  border-radius: 5% 5% 50%;
  width: 25rem;
  height: 25rem;

  @media (min-width: 767px) and (max-width: 1440px) {
    width: 20rem;
    height: 20rem;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    height: 18rem;
    width: 18rem;
  }
  @media (min-width: 65px) and (max-width: 374px) {
    height: 15rem;
    width: 15rem;
  }
`;

export const InlineLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: underline;
  text-underline-offset: 3px;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.link};
  }
`;

export const ResumeColumn = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 48rem;

  @media (min-width: 767px) and (max-width: 1023px) {
    max-width: 41rem;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Headline = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.45;
  margin-bottom: 1.5rem;
  text-align: left;

  @media (min-width: 56px) and (max-width: 768px) {
    text-align: center;
  }
`;

export const ResumeSection = styled.section`
  margin-top: 2rem;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const SectionTitle = styled.h5`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.pText};
  margin-bottom: 0.75rem;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  opacity: 0.85;
`;

export const BulletList = styled.ul`
  margin: 0;
  padding: 0 0 0 1.2rem;
  list-style: none;
  color: ${({ theme }) => theme.pText};
  font-size: 0.95rem;
  line-height: 1.55;
`;

export const BulletItem = styled.li`
  display: list-item;
  list-style-type: disc;
  margin-bottom: 0.45rem;
  padding-left: 0.25rem;

  &::marker {
    color: ${({ theme }) => theme.text};
  }
`;

export const ExperienceCard = styled.article`
  margin-bottom: 1.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CompanyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.65rem;
  margin-bottom: 0.2rem;
`;

export const CompanyName = styled.span`
  font-weight: 700;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.text};
`;

export const RoleMeta = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.pText};
`;

export const Period = styled.span`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.pText};
  white-space: nowrap;
`;

export const ProductLine = styled.p`
  font-size: 0.92rem;
  color: ${({ theme }) => theme.pText};
  margin: 0.35rem 0 0.65rem;
  line-height: 1.45;
`;

export const TechGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));

  @media (min-width: 56px) and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const TechCategory = styled.div``;

export const TechCategoryTitle = styled.h6`
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const TechTag = styled.span`
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.25rem 0.55rem;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.border};
  opacity: 0.95;
`;

export const SectionWrapper = styled(Wrapper)`
  background: ${({ theme }) => theme.darkerBg};
`;

export const SectionContainer = styled(Container)`
  background: ${({ theme }) => theme.darkerBg};
`;

export const SectionContent = styled(Content)`
  background: ${({ theme }) => theme.darkerBg};
`;

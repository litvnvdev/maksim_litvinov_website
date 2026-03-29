import { SubTitle } from "../../styles/styles";
import {
  ABOUT_EXPERIENCE,
  ABOUT_SUMMARY_BULLETS,
  ABOUT_TECH_STACK,
  ABOUT_WORKFLOW_BULLETS,
} from "../../shared/aboutContent";

import {
  AboutContainer,
  AboutImgBlock,
  BulletItem,
  BulletList,
  CompanyName,
  CompanyRow,
  ExperienceCard,
  Headline,
  InlineLink,
  Period,
  ProductLine,
  ResumeColumn,
  ResumeSection,
  RoleMeta,
  SectionContainer,
  SectionContent,
  SectionTitle,
  SectionWrapper,
  TechCategory,
  TechCategoryTitle,
  TechGrid,
  TechTag,
  TechTags,
} from "./styles";

const About = () => {
  return (
    <SectionWrapper id="about" m_pt="2rem" l_pt="9rem" sm_pt="1rem">
      <SectionContainer sm_pt="4rem">
        <SectionContent direction="column">
          <SubTitle>About Me</SubTitle>
          <AboutContainer>
            <AboutImgBlock />

            <ResumeColumn>
              <Headline>
                Frontend developer · 3 years commercial · Krasnodar, Russia 📍
              </Headline>

              <ResumeSection aria-labelledby="about-summary-heading">
                <SectionTitle id="about-summary-heading">Summary</SectionTitle>
                <BulletList>
                  {ABOUT_SUMMARY_BULLETS.map((line) => (
                    <BulletItem key={line}>{line}</BulletItem>
                  ))}
                </BulletList>
              </ResumeSection>

              <ResumeSection aria-labelledby="about-experience-heading">
                <SectionTitle id="about-experience-heading">
                  Experience
                </SectionTitle>
                {ABOUT_EXPERIENCE.map((job) => (
                  <ExperienceCard key={`${job.company}-${job.period}`}>
                    <CompanyRow>
                      {job.companyHref ? (
                        <InlineLink
                          href={job.companyHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CompanyName>{job.company}</CompanyName>
                        </InlineLink>
                      ) : (
                        <CompanyName>{job.company}</CompanyName>
                      )}
                      <RoleMeta>· {job.role}</RoleMeta>
                      <Period>({job.period})</Period>
                    </CompanyRow>
                    {job.product && (
                      <ProductLine>{job.product}</ProductLine>
                    )}
                    <BulletList>
                      {job.highlights.map((item) => (
                        <BulletItem key={item}>{item}</BulletItem>
                      ))}
                    </BulletList>
                  </ExperienceCard>
                ))}
              </ResumeSection>

              <ResumeSection aria-labelledby="about-stack-heading">
                <SectionTitle id="about-stack-heading">
                  Technical stack
                </SectionTitle>
                <TechGrid>
                  {ABOUT_TECH_STACK.map((cat) => (
                    <TechCategory key={cat.title}>
                      <TechCategoryTitle>{cat.title}</TechCategoryTitle>
                      <TechTags>
                        {cat.items.map((item) => (
                          <TechTag key={item}>{item}</TechTag>
                        ))}
                      </TechTags>
                    </TechCategory>
                  ))}
                </TechGrid>
              </ResumeSection>

              <ResumeSection aria-labelledby="about-workflow-heading">
                <SectionTitle id="about-workflow-heading">
                  Collaboration
                </SectionTitle>
                <BulletList>
                  {ABOUT_WORKFLOW_BULLETS.map((line) => (
                    <BulletItem key={line}>{line}</BulletItem>
                  ))}
                </BulletList>
              </ResumeSection>
            </ResumeColumn>
          </AboutContainer>
        </SectionContent>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default About;

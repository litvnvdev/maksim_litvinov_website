import { useState } from "react";

import { Wrapper, Container, Content, Title, SubTitle } from "../../styles/styles";
import { PORTFOLIO_PROJECTS, type PortfolioProject } from "../../shared/portfolioProjects";
import ProjectCard from "../ProjectCard";
import { PortfolioModal } from "../PortfolioModal";

import { PortfolioContainer } from "./styles";

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(
    null,
  );

  return (
    <Wrapper id="portfolio" m_pt="2rem" l_pt="9rem" sm_pt="1rem">
      <Container>
        <Content direction="column" sm_padding="0">
          <SubTitle>Portfolio</SubTitle>
          <Title
            font_size="1.2rem"
            l_font="1.3rem"
            md_font="1.1rem"
            sm_font="1rem"
            mt="3rem"
          >
            Each project is a unique piece of product work
          </Title>
          <PortfolioContainer>
            {PORTFOLIO_PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={() => setActiveProject(project)}
              />
            ))}
          </PortfolioContainer>
        </Content>
      </Container>
      <PortfolioModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </Wrapper>
  );
};

export default Portfolio;

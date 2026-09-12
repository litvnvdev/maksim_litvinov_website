import type { PortfolioProject } from "../../shared/portfolioProjects";

import {
  Actions,
  CardBody,
  CardLink,
  CardRoot,
  CardShell,
  CardTitle,
  ContributionList,
  DetailsButton,
  ImageButton,
  MetaBlock,
  MetaLabel,
  MetaRow,
  ProjectImg,
  StackChip,
  StackRow,
  Summary,
  TeamText,
} from "./styles";

type ProjectCardProps = {
  project: PortfolioProject;
  onOpenDetails: () => void;
};

const ProjectCard = ({ project, onOpenDetails }: ProjectCardProps) => {
  const { title, summary, previewSrc, link, linkLabel, role, contribution, stack } =
    project;

  return (
    <CardRoot>
      <CardShell>
        <ImageButton
          type="button"
          onClick={onOpenDetails}
          aria-label={`Open project details: ${title.trim()}`}
        >
          <ProjectImg src={previewSrc} alt="" loading="lazy" />
        </ImageButton>
        <CardBody>
          <CardTitle>{title.trim()}</CardTitle>
          <Summary>{summary}</Summary>
          <MetaBlock>
            {role && (
              <MetaRow>
                <MetaLabel>Role</MetaLabel>
                <TeamText>{role}</TeamText>
              </MetaRow>
            )}
            {contribution && contribution.length > 0 && (
              <MetaRow>
                <MetaLabel>Contribution</MetaLabel>
                <ContributionList>
                  {contribution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ContributionList>
              </MetaRow>
            )}
            <MetaRow>
              <MetaLabel>Stack</MetaLabel>
              <StackRow>
                {stack.map((item) => (
                  <StackChip key={item}>{item}</StackChip>
                ))}
              </StackRow>
            </MetaRow>
          </MetaBlock>
          <Actions>
            <DetailsButton type="button" onClick={onOpenDetails}>
              Details
            </DetailsButton>
            {link && (
              <CardLink href={link} target="_blank" rel="noopener noreferrer">
                {linkLabel ?? "Link"}
              </CardLink>
            )}
          </Actions>
        </CardBody>
      </CardShell>
    </CardRoot>
  );
};

export default ProjectCard;

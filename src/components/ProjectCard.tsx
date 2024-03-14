import styled from "styled-components";

import { Content, Text } from "../styles/styles";

interface ProjectCardProps {
  title?: string;
  description?: string;
  img?: any;
  id?: number;
  direction?: string;
}

const ProjectTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;

  @media (min-width: 56px) and (max-width: 767px) {
    align-items: center;
    max-width: 25rem;
    padding: 0 2rem;
    margin: 0 auto;
    text-align: left;
    h4 {
      margin-bottom: 0.5rem;
      text-align: center;
    }
  }
`;
const ProjectImg = styled.img`
  width: 25rem;
  height: auto;
  border-radius: 20% 5%;

  @media (min-width: 375px) and (max-width: 768px) {
    margin: 0 auto;
    width: 20rem;
  }
  @media (min-width: 56px) and (max-width: 375px) {
    width: 18rem;
  }
`;

const ProjectCard = ({
  title,
  description,
  img,
  direction,
}: ProjectCardProps) => {
  return (
    <Content
      direction={direction}
      align_items="start"
      gap="2rem"
      width="70rem"
      margin_top_center="2rem auto"
      media_direction="column"
    >
      <ProjectTextContainer>
        <h4>{title}</h4>
        <Text>{description}</Text>
      </ProjectTextContainer>

      <ProjectImg width={350} src={img} alt="" />
    </Content>
  );
};

export default ProjectCard;

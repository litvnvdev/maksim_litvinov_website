import styled from "styled-components";

import {
  Wrapper,
  Container,
  Content,
  Title,
  SubTitle,
  Text,
} from "../styles/styles";

import { ProjectCard } from ".";

import MockImg_1 from "../assets/images/mock_img1.jpg";
import MockImg_2 from "../assets/images/mock_img2.jpg";
import MockImg_3 from "../assets/images/mock_img3.jpg";
import MockImg_4 from "../assets/images/mock_img4.jpg";

type Project = {
  id: number;
  title: string;
  description: string;
  img: any;
  direction: string;
};

const PortfolioContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 56px) and (max-width: 768px) {
    margin-top: 3rem;
    gap: 2rem;
  }
`;

const Protfolio = () => {
  const projectData: Project[] = [
    {
      id: 1,
      title: " Website",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, non? 1",
      img: MockImg_1,
      direction: "row",
    },
    {
      id: 2,
      title: " Application",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, non? 2 ",
      img: MockImg_2,
      direction: "row-reverse",
    },
    {
      id: 3,
      title: " E-commerce",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, non? 3",
      img: MockImg_3,
      direction: "row",
    },
    {
      id: 4,
      title: "Crypto App",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, non? 3",
      img: MockImg_4,
      direction: "row-reverse",
    },
  ];
  return (
    <Wrapper m_pt="2rem" l_pt="9rem" sm_pt="1rem">
      <Container>
        <Content direction="column" sm_padding="0">
          <SubTitle>Portfolio</SubTitle>
          <Text sm_text_align='center'>Each Project is unique peace of development</Text>
          <PortfolioContainer>
            {projectData.map((el) => (
              <ProjectCard key={el.id} {...el} />
            ))}
          </PortfolioContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Protfolio;
